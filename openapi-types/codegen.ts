import * as fs from "node:fs";
import * as path from "node:path";
import { OpenAPIV3 } from "openapi-types";
import SwaggerParser from "@apidevtools/swagger-parser";
import { generateZodSchemas, parseAndGenerateFiles, formatCode } from "./utils";

const URL = "https://petstore3.swagger.io/api/v3/openapi.json";
const TYPE_PATH = path.resolve(__dirname, "types");
const ZOD_PATH = path.resolve(__dirname, "zod");

/**
 * 디렉토리 생성, 파일 생성
 */
const generateFiles = async () => {
  try {
    // swagger parser를 사용해 OpenAPI 문서 파싱
    const api = (await SwaggerParser.parse(URL)) as OpenAPIV3.Document;

    // types dir 생성
    if (!fs.existsSync(TYPE_PATH)) {
      fs.mkdirSync(TYPE_PATH, { recursive: true });
    }

    // zod-schemas dir 생성
    if (!fs.existsSync(ZOD_PATH)) {
      fs.mkdirSync(ZOD_PATH, { recursive: true });
    }

    const typeDefinitions = await parseAndGenerateFiles(api);
    // 타입 정의 포맷팅
    const formattedTypes = await formatCode(typeDefinitions);

    const fileName = `Pet.d.ts`;
    fs.writeFileSync(path.join(TYPE_PATH, fileName), formattedTypes, "utf-8");

    // Zod 스키마 생성 및 저장
    const zodSchemas = generateZodSchemas(api);
    // Zod 스키마 포맷팅
    const formattedZodSchemas = await formatCode(zodSchemas);

    const zodFileName = `Pet.zod.ts`;
    fs.writeFileSync(path.join(ZOD_PATH, zodFileName), formattedZodSchemas, "utf-8");

    console.log("✨ 타입과 Zod 스키마 생성 완료!");
  } catch (error: unknown) {
    console.error("🤮 코드 생성 중 오류 발생:", error);
  }
};

generateFiles();
