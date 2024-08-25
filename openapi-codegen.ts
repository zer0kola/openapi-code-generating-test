import * as path from "path";
import { generate, HttpClient } from "openapi-typescript-codegen";

const specURL = "https://petstore.swagger.io/v2/swagger.json";
const outputPath = path.resolve(
  path.join(__dirname, "./", "openapi-typescript-codegen"),
);

async function swaggerModelGenerate() {
  try {
    await generate({
      input: specURL,
      output: outputPath,
      httpClient: HttpClient.AXIOS,
      exportCore: false,
      exportServices: false,
      exportModels: true,
      useOptions: true,
      useUnionTypes: true,
      exportSchemas: true,
    });
  } catch (err) {
    console.error(err);
  }
}

swaggerModelGenerate().then(() => console.log(`🚀 model 생성 완료`));
