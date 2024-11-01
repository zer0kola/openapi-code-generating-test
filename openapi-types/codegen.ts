import * as fs from "node:fs";
import * as path from "node:path";
import { OpenAPIV3 } from "openapi-types";
import SwaggerParser from "@apidevtools/swagger-parser";
import { convertParametersToJSONSchema } from "openapi-jsonschema-parameters";
import { jsonSchemaToZod } from "json-schema-to-zod";

const URL = "https://petstore3.swagger.io/api/v3/openapi.json";
const outputPath = path.resolve(__dirname, "generated");

/**
 * 코드 생성
 */
const codeGenerate = async () => {
  try {
    const api = (await SwaggerParser.parse(URL)) as OpenAPIV3.Document;
    console.log("api", api);

    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    let typeDefinitions = "// 자동 생성된 타입 정의\n\n";

    const schemas = api.components?.schemas;
    if (schemas) {
      // 먼저 모든 타입 선언을 수집
      Object.entries(schemas).forEach(([name, schema]) => {
        typeDefinitions += generateTypeDefinition(name, schema as OpenAPIV3.SchemaObject);
        typeDefinitions += "\n";
      });

      // 모든 타입을 하나의 파일로 저장
      fs.writeFileSync(path.join(outputPath, "types.ts"), typeDefinitions, "utf-8");
    }

    console.log("✨ 타입 생성 완료!");
  } catch (error: unknown) {
    console.error("🤮 코드 생성 중 오류 발생:", error);
  }
};

/**
 * 타입 정의 생성
 * @param name 타입 이름
 * @param schema 타입 스키마
 * @returns 타입 정의
 */
function generateTypeDefinition(name: string, schema: OpenAPIV3.SchemaObject): string {
  if (schema.type === "object") {
    let typeContent = `export interface ${name} {\n`;
    if (schema.properties) {
      Object.entries(schema.properties).forEach(([propName, propSchema]) => {
        const propType = getPropertyType(propSchema as OpenAPIV3.SchemaObject);
        const required = schema.required?.includes(propName) ? "" : "?";
        typeContent += `  ${propName}${required}: ${propType};\n`;
      });
    }
    typeContent += `}\n`;
    return typeContent;
  } else if (schema.enum) {
    let typeContent = `export enum ${name} {\n`;
    schema.enum.forEach((value) => {
      typeContent += `  ${value} = "${value}",\n`;
    });
    typeContent += `}\n`;
    return typeContent;
  }
  return "";
}

/**
 * 속성 타입 가져오기
 * @param schema 속성 스키마
 * @returns 속성 타입
 */
function getPropertyType(schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject): string {
  if ("$ref" in schema) {
    const refName = schema.$ref.split("/").pop();
    return refName || "any";
  }

  if (schema.type === "string") return "string";
  if (schema.type === "number" || schema.type === "integer") return "number";
  if (schema.type === "boolean") return "boolean";
  if (schema.type === "array" && schema.items) {
    return `${getPropertyType(schema.items)}[]`;
  }
  return "any";
}

codeGenerate();
