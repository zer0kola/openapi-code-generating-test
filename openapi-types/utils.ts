import { OpenAPIV3 } from "openapi-types";
import { convertParametersToJSONSchema } from "openapi-jsonschema-parameters";
import { jsonSchemaToZod } from "json-schema-to-zod";
import prettier from "prettier";

/**
 * 타입 정의 생성
 * @param api OpenAPI 문서
 * @returns 타입 정의
 */
export const parseAndGenerateFiles = async (api: OpenAPIV3.Document) => {
  let typeDefinitions = "// 자동 생성된 타입 정의\n\n";

  // OAS의 components.schemas 추출
  const schemas = api.components?.schemas;
  if (schemas) {
    // 먼저 모든 타입 선언을 수집
    Object.entries(schemas).forEach(([name, schema]) => {
      typeDefinitions += generateTypeDefinition(name, schema as OpenAPIV3.SchemaObject);
      typeDefinitions += "\n";
    });
  }

  return typeDefinitions;
};

/**
 * 타입 정의 생성
 * @param name 타입 이름
 * @param schema 타입 스키마
 * @returns 타입 정의
 */
export const generateTypeDefinition = (name: string, schema: OpenAPIV3.SchemaObject): string => {
  if (schema.type === "object") {
    let typeContent = `export interface ${name} {\n`;
    if (schema.properties) {
      Object.entries(schema.properties).forEach(([propName, propSchema]) => {
        const propType = getPropertyType(propSchema as OpenAPIV3.SchemaObject);
        const required = schema.required?.includes(propName) ? "" : "?";
        if ((propSchema as OpenAPIV3.SchemaObject).description) {
          typeContent += `  /** ${(propSchema as OpenAPIV3.SchemaObject).description} */\n`;
        }
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
};

/**
 * 속성 타입 가져오기
 * @param schema 속성 스키마
 * @returns 속성 타입
 */
export const getPropertyType = (
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
): string => {
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
};

/**
 * ReferenceObject인지 확인하는 타입 가드 함수 추가
 * @param schema 스키마
 * @returns 스키마가 ReferenceObject인지 여부
 */
export const isReferenceObject = (
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
): schema is OpenAPIV3.ReferenceObject => {
  return "$ref" in schema;
};

/**
 * SchemaObject인지 확인하는 타입 가드 함수 추가
 * @param schema 스키마
 * @returns 스키마가 SchemaObject인지 여부
 */
export const isSchemaObject = (
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
): schema is OpenAPIV3.SchemaObject => {
  return !isReferenceObject(schema);
};

/**
 * Zod 스키마 생성
 * @param api OpenAPI 문서
 * @returns Zod 스키마 문자열
 */
export const generateZodSchemas = (api: OpenAPIV3.Document): string => {
  let zodSchemas = "// 자동 생성된 Zod 스키마\n\n";
  zodSchemas += "import { z } from 'zod';\n\n";
  zodSchemas += "export const schemas = {\n";

  // components/schemas에서 Zod 스키마 생성
  if (api.components?.schemas) {
    Object.entries(api.components.schemas).forEach(([name, schema]) => {
      if (isSchemaObject(schema)) {
        // OpenAPI 스키마를 JSON Schema 형식으로 변환
        const jsonSchema = {
          ...schema,
          $id: name,
          type: schema.type as string,
          ...(schema.nullable && { type: ["null", schema.type as string] }),
        };

        zodSchemas += `  ${name}: ${jsonSchemaToZod(jsonSchema)},\n`;
      }
    });
  }

  // paths에서 파라미터의 Zod 스키마 생성
  if (api.paths) {
    Object.entries(api.paths).forEach(([path, pathItem]) => {
      if (!pathItem) return;

      const validMethods = [
        "get",
        "put",
        "post",
        "delete",
        "options",
        "head",
        "patch",
        "trace",
      ] as const;

      validMethods.forEach((method) => {
        const operation = pathItem[method] as OpenAPIV3.OperationObject | undefined;

        if (!operation) return;

        if (operation.parameters) {
          const parameterSchemas = convertParametersToJSONSchema(operation.parameters);
          const operationId = operation.operationId || `${method}_${path.replace(/\W/g, "_")}`;

          Object.entries(parameterSchemas).forEach(([paramType, schema]) => {
            const jsonSchema = {
              ...schema,
              $id: `${operationId}_${paramType}`,
            };

            zodSchemas += `  ${operationId}_${paramType}: ${jsonSchemaToZod(jsonSchema)},\n`;
          });
        }
      });
    });
  }

  zodSchemas += "};\n";
  return zodSchemas;
};

/**
 * 코드를 prettier로 포맷팅하는 함수
 */
export const formatCode = async (code: string): Promise<string> => {
  const options = await prettier.resolveConfig(process.cwd());
  return prettier.format(code, {
    ...options,
    parser: "typescript",
  });
};
