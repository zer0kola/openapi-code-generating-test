# OpenAPI Generator, Schema Automation

## 프로젝트 설명

`openapi-types`와 `swagger-parser`를 사용하여 OpenAPI 스펙 기반의 DTO Zod 스키마, API 메서드, tanstack query, mutation hook을 자동으로 생성하는 프로젝트입니다.

사용되는 라이브러리:

- **openapi-types**:
  - OpenAPI 스펙을 TypeScript 타입으로 정의하고 활용하기 위한 라이브러리로, API 명세에서 타입을 추출하고 사용하기 위해 사용됩니다.
- **swagger-parser**:
  - OpenAPI 및 Swagger 스펙을 파싱하고 유효성을 검증하는 라이브러리입니다. 이를 통해 스펙을 파싱하여 DTO와 API 경로 정보를 추출합니다.
- **json-schema-to-zod**:
  - JSON 스키마를 Zod 스키마로 변환해주는 라이브러리입니다. Zod는 TypeScript로 작성된 스키마 선언 및 유효성 검사 라이브러리로, 개발자가 런타임 시점에 데이터를 안전하게 검증하고 변환할 수 있게 도와줍니다.
- **handlebars**:
  - 코드 템플릿을 정의하고, 이 템플릿을 기반으로 API 메서드 및 tanstack query/mutation hook 파일을 자동으로 생성할 수 있습니다.

### 기능 설명

1. **OpenAPI 스펙 로드 및 파싱**:
   - OpenAPI 스펙 URL을 입력해 `swagger-parser`로 스펙을 파싱하여 필요한 정보를 추출하고 `openapi-types`를 사용하여 TypeScript 타입을 정의합니다.

2. **Zod 스키마 생성**:
   - 파싱된 스펙의 `components.schemas`에서 DTO를 가져와 `json-schema-to-zod`를 사용해 Zod 스키마를 자동으로 생성합니다.

3. **API 엔드포인트 처리**:
   - 스펙의 `paths` 항목을 순회하면서 각 경로의 메서드(GET, POST 등)와 요청 파라미터, 응답 구조를 가져옵니다. 이를 기반으로 API 메서드와 tanstack query/mutation hook을 자동 생성합니다.

4. **API 메서드 생성**:
   - 요청 파라미터 및 응답 타입을 바탕으로 TypeScript API 메서드를 자동 생성하며, `handlebars` 템플릿을 사용해 메서드는 요청 파라미터, 응답 타입 등을 명시한 DTO로 작성됩니다.

5. **tanstack query/mutation hook 생성**:
   - 동일한 원리로 tanstack query 및 mutation hook을 자동으로 생성하여, react-query 기반의 데이터 fetching과 mutation을 간편하게 관리할 수 있습니다.
