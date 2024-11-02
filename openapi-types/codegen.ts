import * as fs from "node:fs";
import * as path from "node:path";
import { OpenAPIV3 } from "openapi-types";
import SwaggerParser from "@apidevtools/swagger-parser";
import { generateTypeDefinition, generateZodSchemas } from "./utils";

const URL = "https://petstore3.swagger.io/api/v3/openapi.json";
const TYPE_PATH = path.resolve(__dirname, "types");
const ZOD_PATH = path.resolve(__dirname, "zod");

/**
 * 코드 생성
 */
const codeGenerate = async () => {
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

    let typeDefinitions = "// 자동 생성된 타입 정의\n\n";

    // OAS의 components.schemas 추출
    const schemas = api.components?.schemas;
    if (schemas) {
      // 먼저 모든 타입 선언을 수집
      Object.entries(schemas).forEach(([name, schema]) => {
        typeDefinitions += generateTypeDefinition(name, schema as OpenAPIV3.SchemaObject);
        typeDefinitions += "\n";
      });

      // 모든 타입을 하나의 파일로 저장
      fs.writeFileSync(path.join(TYPE_PATH, "pet.d.ts"), typeDefinitions, "utf-8");
    }

    // Zod 스키마 생성 및 저장
    const zodSchemas = generateZodSchemas(api);
    fs.writeFileSync(path.join(ZOD_PATH, "pet.zod.ts"), zodSchemas, "utf-8");

    console.log("✨ 타입과 Zod 스키마 생성 완료!");
  } catch (error: unknown) {
    console.error("🤮 코드 생성 중 오류 발생:", error);
  }
};

codeGenerate();
