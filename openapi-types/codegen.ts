import * as fs from "node:fs";
import * as path from "node:path";
import { OpenAPIV3 } from "openapi-types";
import { parse } from "@apidevtools/swagger-parser";
import { convertParametersToJSONSchema } from "openapi-jsonschema-parameters";
import { jsonSchemaToZod } from "json-schema-to-zod";

const URL = "https://petstore3.swagger.io/api/v3/openapi.json";
const outputPath = path.resolve(__dirname, "generated");

const codeGenerate = async () => {
  try {
  } catch (error: unknown) {
    console.error("🤮 코드 생성 중 오류 발생:", error);
  }
};

codeGenerate();
