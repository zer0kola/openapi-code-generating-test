# OpenAPI Generator, Schema Automation

## 프로젝트 설명

OAS를 사용하여 DTO zod 스키마, API 메서드, tanstack query, mutation hook을 자동으로 생성

사용되는 라이브러리:

- **openapi-typescript-codegen**:
  - OpenAPI 스펙을 기반으로 TypeScript 타입 정의 파일을 자동으로 생성해주는 도구입니다.
    이 라이브러리는 OpenAPI 사양의 엔드포인트, 요청, 응답 등을 분석하여 해당 사양을 TypeScript 타입으로 변환합니다.
- **json-schema-to-zod**:
  - JSON 스키마를 Zod 스키마로 변환해주는 라이브러리입니다. Zod는 TypeScript로 작성된 스키마 선언 및 유효성 검사 라이브러리로, 개발자가 런타임 시점에 데이터를 안전하게 검증하고 변환할 수 있게 도와줍니다.
- **handlebars**:
  - 코드 템플릿을 정의하고, 이 템플릿을 기반으로 API 메서드 및 tanstack query/mutation hook 파일을 자동으로 생성할 수 있습니다.

### 기능 설명

1. **OpenAPI 스펙 로드 및 파싱**:

   - OpenAPI 스펙 URL을 입력해 `openapi-typescript-codegen`를 사용하여 이를 TypeScript 타입으로 변환합니다.
     스펙을 직접 파싱하여 필요한 정보를 추출합니다.

2. **Zod 스키마 생성**:

   - 파싱된 스펙의 `components.schemas`에서 DTO를 가져와 `json-schema-to-zod`를 사용해 Zod 스키마를 생성합니다.

3. **API 엔드포인트 처리**:

   - 스펙의 `paths` 항목을 순회하면서 각 경로의 메서드(GET, POST 등)와 요청 파라미터, 응답 구조를 가져옵니다. 이를 기반으로 API 메서드와 tanstack query/mutation hook을 자동으로 생성합니다.

4. **API 메서드 생성**:

   - 요청 파라미터 및 응답 타입을 바탕으로 TypeScript API 메서드를 자동으로 생성합니다. `handlebars` 템플릿을 사용하여 코드가 자동으로 작성되며, 메서드는 요청 파라미터, 응답 타입 등을 명시한 DTO로 작성됩니다.

5. **tanstack query/mutation hook 생성**:
   - 동일한 원리로 tanstack query 및 mutation hook을 자동으로 생성합니다.
