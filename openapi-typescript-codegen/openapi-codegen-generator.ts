import * as path from "path";
import { generate, HttpClient } from "openapi-typescript-codegen";
import * as fs from "fs";
import { jsonSchemaToZod } from "json-schema-to-zod";

const URL = "https://petstore.swagger.io/v2/swagger.json";
const outputPath = path.resolve(path.join(__dirname, "./", "generated"));

async function swaggerModelGenerate() {
  try {
    await generate({
      input: URL,
      output: outputPath,
      httpClient: HttpClient.AXIOS,
      exportCore: true,
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
  // // `type` can be either a string or - outside of the CLI - a boolean. If its `true`, the name of the type will be the name of the schema with a capitalized first letter.
  // const moduleWithType = jsonSchemaToZod(myObject, { name: "mySchema", module: "esm", type: true });

  // const cjs = jsonSchemaToZod(myObject, { module: "cjs", name: "mySchema" });

  // const justTheSchema = jsonSchemaToZod(myObject);

  const schemasPath = path.join(outputPath, "schemas");
  const zodOutputPath = path.join(outputPath, "zod-schemas");

  if (!fs.existsSync(zodOutputPath)) {
    fs.mkdirSync(zodOutputPath);
  }

  console.log("🚀 Zod 스키마 변환 완료");
}

swaggerModelGenerate();
