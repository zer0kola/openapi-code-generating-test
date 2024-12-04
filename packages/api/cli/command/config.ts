/** 생성할 코드 타입 정의 */
export type CodeType = keyof typeof sourceDirectories;

/** 소스 파일이 생성될 임시 디렉토리 */
export const sourceDirectories = {
  api: './src/test-api',
  query: './src/test-query',
  mutation: './src/test-mutation',
  types: './src/test-types',
} as const;

/** 생성된 파일이 이동할 최종 디렉토리 */
export const targetDirectories = {
  api: './src/api',
  query: './src/query',
  mutation: './src/mutation',
  types: './src/types',
} as const;

export const BASE_URL = 'https://petstore.swagger.io/v2/swagger.json';
