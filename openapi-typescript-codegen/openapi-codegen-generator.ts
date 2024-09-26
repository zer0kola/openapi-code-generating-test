import * as path from "path";
import { generate, HttpClient } from "openapi-typescript-codegen";
import * as fs from "fs";
import { jsonSchemaToZod } from "json-schema-to-zod";
import { execSync } from "child_process";

const URL = "https://petstore.swagger.io/v2/swagger.json";
const outputPath = path.resolve(path.join(__dirname, "./", "generated"));

async function swaggerModelGenerate() {
  try {
    await generate({
      input: URL,
      output: outputPath,
      httpClient: HttpClient.AXIOS,
      exportCore: false,
      exportServices: true,
      exportModels: true,
      useOptions: true,
      useUnionTypes: true,
      exportSchemas: true,
      write: true,
    });
    console.log("🚀 모델 생성 완료");

    await convertSchemaToZod(outputPath);
  } catch (err) {
    console.error(err);
  }
}

async function convertSchemaToZod(outputPath: string) {
  const schemasDir = path.resolve(__dirname, "./generated/schemas");
  const outputDir = path.resolve(__dirname, "./generated/zodSchemas");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const schemaFiles = fs.readdirSync(schemasDir);

  schemaFiles.forEach((file) => {
    const schemaPath = path.resolve(schemasDir, file);
    const fileContent = fs.readFileSync(schemaPath, "utf-8");
    const jsonString = extractJsonString(fileContent);

    const schema = JSON.parse(jsonString);
    const zodSchema = jsonSchemaToZod(schema, {
      module: "esm",
      type: true,
      name: file.replace(".ts", ""),
    });
    const zodSchemaPath = path.resolve(outputDir, file.replace(".ts", ".zod.ts"));
    fs.writeFileSync(zodSchemaPath, zodSchema);
  });
  // export const $User = z.object({ "id": z.number().int().optional(), "username": z.string().optional(), "firstName": z.string().optional(), "lastName": z.string().optional(), "email": z.string().optional(), "password": z.string().optional(), "phone": z.string().optional(), "userStatus": z.number().describe("User Status").optional() })
  // 저장하는 파일의 내용은 위와 같이 저장됨
  // 자동으로 lint가 적용되지 않아서 prettier로 포맷팅을 해주어야 함
  execSync(`prettier --write ${outputDir}/*.ts`);

  console.log("🚀 Zod 스키마 변환 완료");
}

function extractJsonString(fileContent: string): string {
  const jsonStartIndex = fileContent.indexOf("=");

  const jsonString = fileContent
    .substring(jsonStartIndex + 1)
    .replace("properties:", '"type": "object", "properties":')
    .replace(/(\w+)(?=\s*:)/g, '"$1"')
    .replace(/'/g, '"')
    .replace(/,(\s*})/g, "$1")
    .replace("as const;", "")
    .replace(/`/g, '"')
    .trim();

  return jsonString;
}

swaggerModelGenerate();
