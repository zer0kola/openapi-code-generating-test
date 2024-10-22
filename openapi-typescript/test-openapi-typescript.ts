import openapiTS, { astToString } from "openapi-typescript";
import * as fs from "node:fs";
import * as path from "node:path";

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

    console.log("스키마가 성공적으로 생성되었습니다.");
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

    const content = `${imports}\nexport interface ${name} {\n${generateProperties(properties)}\n}\n`;
    fs.writeFileSync(path.join(outputDir, "models", `${name}.ts`), content);
  });
}

/** 스키마 생성 */
function generateSchemas(schemas: Record<string, any>) {
  Object.entries(schemas).forEach(([name, schema]) => {
    const content = `export const ${name}Schema = {\n${generateSchemaProperties(schema.properties)}\n};\n`;
    fs.writeFileSync(path.join(outputDir, "schemas", `${name}Schema.ts`), content);
  });
}

/** 모델 프로퍼티 생성 */
function generateProperties(properties: Record<string, any>) {
  return Object.entries(properties)
    .map(([name, prop]) => `  ${name}: ${getTypeFromSchema(prop)};`)
    .join("\n");
}

/** 스키마 프로퍼티 생성 */
function generateSchemaProperties(properties: Record<string, any>) {
  return Object.entries(properties)
    .map(
      ([name, prop]) =>
        `  ${name}: { type: '${prop.type}' ${prop.format ? `, format: '${prop.format}'` : ""} },`
    )
    .join("\n");
}

/** 스키마에서 타입 가져오기 */
function getTypeFromSchema(schema: any): string {
  if (schema.$ref) {
    return schema.$ref.split("/").pop() as string;
  }
  switch (schema.type) {
    case "integer":
    case "number":
      return "number";
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "array":
      return schema.items.$ref
        ? `${schema.items.$ref.split("/").pop()}[]`
        : `${getTypeFromSchema(schema.items)}[]`;
    default:
      return "any";
  }
}

/** 문자열 첫 글자를 대문자로 변환 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

generateSchema();
