import openapiTS, { astToString } from "openapi-typescript";
import * as fs from "node:fs";
import * as path from "node:path";
import { jsonSchemaToZod } from "json-schema-to-zod";
import { execSync } from "child_process";

const URL = "https://petstore3.swagger.io/api/v3/openapi.json";
const outputDir = path.resolve(__dirname, "generated");

async function generateSchema() {
  try {
    // OpenAPI 스키마를 가져와서 TypeScript AST로 변환
    const ast = await openapiTS(URL);

    // AST를 문자열로 변환
    const content = astToString(ast);

    // 폴더 생성
    createFolders();

    // 전체 스키마 파일 생성
    fs.writeFileSync(path.join(outputDir, "schema.ts"), content);

    // OpenAPI 스키마를 직접 가져와서 파싱
    const response = await fetch(URL);
    const schema = await response.json();

    // 모델 생성
    generateModels(schema.components.schemas);

    // 스키마 생성
    generateSchemas(schema.components.schemas);

    // Zod 스키마 생성
    await convertSchemaToZod();

    // schema 폴더 삭제
    const schemaDir = path.join(outputDir, "schemas");
    if (fs.existsSync(schemaDir)) {
      fs.rmSync(schemaDir, { recursive: true, force: true });
      console.log("🗑️ schema 폴더 삭제 완료");
    }
  } catch (error) {
    console.error("스키마 생성 중 오류 발생:", error);
  }
}

function createFolders() {
  const folders = ["models", "schemas", "services"];
  folders.forEach((folder) => {
    const folderPath = path.join(outputDir, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  });
}

/** 모델 생성 */
function generateModels(schemas: Record<string, any>) {
  // 먼저 모든 모델 이름을 수집합니다.
  const modelNames = Object.keys(schemas);

  Object.entries(schemas).forEach(([name, schema]) => {
    let imports = "";
    const properties = schema.properties || {};

    // 필요한 import 구문을 생성합니다.
    Object.values(properties).forEach((prop: any) => {
      if (prop.$ref) {
        const refType = prop.$ref.split("/").pop();
        if (modelNames.includes(refType) && refType !== name) {
          imports += `import { ${refType} } from './${refType}';\n`;
        }
      } else if (prop.type === "array" && prop.items && prop.items.$ref) {
        const refType = prop.items.$ref.split("/").pop();
        if (modelNames.includes(refType) && refType !== name) {
          imports += `import { ${refType} } from './${refType}';\n`;
        }
      }
    });

    const content = `${imports}\nexport interface ${name} {\n${generateProperties(properties, schema)}\n}\n`;
    fs.writeFileSync(path.join(outputDir, "models", `${name}.ts`), content);
  });

  console.log("🚀 모델 생성 완료");
}

/** 스키마 생성 */
function generateSchemas(schemas: Record<string, any>) {
  Object.entries(schemas).forEach(([name, schema]) => {
    const content = `export const ${name}Schema = ${JSON.stringify(schema, null, 2)};\n`;
    fs.writeFileSync(path.join(outputDir, "schemas", `${name}Schema.ts`), content);
  });
}

/** 모델 프로퍼티 생성 */
function generateProperties(properties: Record<string, any>, schema: any) {
  return Object.entries(properties)
    .map(([name, prop]) => {
      const description = prop.description ? `  /** ${prop.description} */\n` : "";
      return `${description}  ${name}: ${getTypeFromSchema(prop, schema)};`;
    })
    .join("\n");
}

/** 스키마에서 타입 가져오기 */
function getTypeFromSchema(schema: any, parentSchema: any): string {
  if (schema.$ref) {
    return schema.$ref.split("/").pop() as string;
  }
  switch (schema.type) {
    case "integer":
    case "number":
      return "number";
    case "string":
      if (schema.enum) {
        return schema.enum.map((value: string) => `'${value}'`).join(" | ");
      }
      return "string";
    case "boolean":
      return "boolean";
    case "array":
      return schema.items.$ref
        ? `${schema.items.$ref.split("/").pop()}[]`
        : `${getTypeFromSchema(schema.items, parentSchema)}[]`;
    default:
      return "any";
  }
}

/** 문자열 첫 글자를 대문자로 변환 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function convertSchemaToZod() {
  const schemasDir = path.join(outputDir, "schemas");
  const zodOutputDir = path.join(outputDir, "zodSchemas");

  if (!fs.existsSync(zodOutputDir)) {
    fs.mkdirSync(zodOutputDir, { recursive: true });
  }

  const schemaFiles = fs.readdirSync(schemasDir);

  for (const file of schemaFiles) {
    const schemaPath = path.join(schemasDir, file);
    const fileContent = fs.readFileSync(schemaPath, "utf-8");
    const jsonString = extractJsonString(fileContent);

    try {
      const schema = JSON.parse(jsonString);
      const propertiesSchema = schema.properties || {};

      const zodSchema = await jsonSchemaToZod(propertiesSchema, {
        module: "esm",
        type: true,
        name: file.replace(".ts", ""),
      });

      // Enum 처리
      let modifiedZodSchema = zodSchema.replace(
        /z\.string\(\)(.+?enum\: \[.+?\])/g,
        (match, p1) => `z.enum([${p1.match(/\[(.+?)\]/)[1]}])`
      );

      // 참조 타입 및 배열 처리
      const imports = new Set<string>();
      modifiedZodSchema = modifiedZodSchema.replace(
        /z\.(lazy\(\(\) => z\.unknown\(\)\)|array\(z\.any\(\)\))/g,
        (match, _, propertyName) => {
          const propertySchema = propertiesSchema[propertyName];

          if (propertySchema) {
            if (propertySchema.$ref) {
              const schemaName = propertySchema.$ref.split("/").pop();
              imports.add(schemaName);
              return `z.lazy(() => ${schemaName}Schema)`;
            } else if (
              propertySchema.type === "array" &&
              propertySchema.items &&
              propertySchema.items.$ref
            ) {
              const schemaName = propertySchema.items.$ref.split("/").pop();
              imports.add(schemaName);
              return `z.array(z.lazy(() => ${schemaName}Schema))`;
            }
          }
          return match;
        }
      );

      // import 문 생성
      const importStatements = Array.from(imports)
        .map((schemaName) => `import { ${schemaName}Schema } from './${schemaName}Schema.zod';`)
        .join("\n");

      const finalContent = `${importStatements}\n\n${modifiedZodSchema}`;

      const zodSchemaPath = path.join(zodOutputDir, file.replace(".ts", ".zod.ts"));
      fs.writeFileSync(zodSchemaPath, finalContent);
    } catch (error) {
      console.error(`${file} 처리 중 오류 발생:`, error);
    }
  }

  execSync(`prettier --write ${zodOutputDir}/*.ts`);

  console.log("🚀 Zod 스키마 변환 완료");
}

function extractJsonString(fileContent: string): string {
  const jsonStartIndex = fileContent.indexOf("=");
  if (jsonStartIndex === -1) {
    throw new Error("JSON 시작 부분을 찾을 수 없습니다.");
  }

  let jsonString = fileContent.substring(jsonStartIndex + 1).trim();

  // 마지막 세미콜론과 'as const' 제거
  jsonString = jsonString.replace(/\s*;\s*$/, "").replace(/\s+as\s+const\s*$/, "");

  // 모든 프로퍼티 이름을 큰따옴표로 감싸기
  jsonString = jsonString.replace(/(\w+):/g, '"$1":');

  // 작은따옴표와 백틱을 큰따옴표로 변경
  jsonString = jsonString.replace(/['`]/g, '"');

  // 객체 타입 추가 (필요한 경우)
  if (!jsonString.startsWith('{"type":"object",')) {
    jsonString = '{"type":"object","properties":' + jsonString + "}";
  }

  // 마지막 쉼표 제거 (JSON에서 유효하지 않음)
  jsonString = jsonString.replace(/,\s*}/g, "}");

  // 줄바꿈 문자 제거
  jsonString = jsonString.replace(/\n/g, "");

  return jsonString;
}

generateSchema();
