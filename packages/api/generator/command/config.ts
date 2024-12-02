/** 소스 파일이 생성될 임시 디렉토리 */
export const sourceDirectories = {
  api: './src/temp/api',
  query: './src/temp/query',
  mutation: './src/temp/mutation',
  types: './src/temp/types',
} as const;

/** 생성된 파일이 이동할 최종 디렉토리 */
export const targetDirectories = {
  api: './src/api',
  query: './src/hook/query',
  mutation: './src/hook/mutation',
  types: './src/type',
  zod: './src/zod',
  handler: './src/mock/handler',
  data: './src/mock/data',
} as const;

/** 생성할 코드 타입 정의 */
export type CodeType = keyof typeof sourceDirectories;

/** OAS default URL */
export const DEFAULT_URL = 'https://petstore3.swagger.io/api/v3/openapi.json';
