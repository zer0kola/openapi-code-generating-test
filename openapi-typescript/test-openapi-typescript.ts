import openapiTS, { astToString } from "openapi-typescript";
import * as fs from "node:fs";
import * as path from "node:path";

const URL = "https://petstore3.swagger.io/api/v3/openapi.json";
const outputPath = path.resolve(__dirname, "generated", "schema.ts");

async function generateSchema() {
  try {
    // OpenAPI 스키마를 가져와서 TypeScript AST로 변환
    // ast는 타입이 정의된 객체
    const ast = await openapiTS(URL);

    // AST를 문자열로 변환
    const content = astToString(ast);

    // 생성된 스키마를 파일로 저장
    fs.writeFileSync(outputPath, content);

    console.log(`스키마가 성공적으로 생성되었습니다: ${outputPath}`);
  } catch (error) {
    console.error("스키마 생성 중 오류 발생:", error);
  }
}

generateSchema();
