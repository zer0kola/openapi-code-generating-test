# @repo/api

api 패키지는 OAS를 기반으로 TypeScript 코드를 자동 생성하고, Tanstack Query와 함께 사용할 수 있는 형태로 가공합니다.

## 기능

- API 클라이언트 코드 생성
- Tanstack Query hook (Query, Mutation) 코드 생성
- 타입 정의 파일(.d.ts) 생성
- validation (zod) 생성
- msw mock (handler, data) 생성

## 디렉토리 구조

```

```

## 사용 방법

### API 코드 생성

이 명령어를 실행하면 해당 OAS 문서에 정의된 모든 API 코드가 생성됩니다.

### 생성되는 파일

- `src/type/{domain}.d.ts`: 타입 정의
- `src/api/{domain}.ts`: API 클라이언트
- `src/hook/query/{domain}.ts`: Query 함수
- `src/hook/mutation/{domain}.ts`: Mutation 함수
- `src/mock/{domain}.ts`: msw mock 코드
- `src/zod/{domain}.ts`: validation 코드 (zod)

### 코드 사용 예시

```typescript
// Query 사용 예시
import { useTestQuery } from "@repo/api";
const { data: testData } = useTestQuery();
// Mutation 사용 예시
import { useUpdateTestMutation } from "@repo/api";
const { mutate: updateTest } = useUpdateTestMutation();
```
