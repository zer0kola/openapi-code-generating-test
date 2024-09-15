# OpenAPI Type Schema Test Automation

## 프로젝트 설명

OpenAPI 스펙을 사용하여 DTO zod 스키마, API 메서드, tanstack query, mutation hook을 자동으로 생성

사용되는 라이브러리:

- **openapi-types**: OpenAPI 스펙의 타입 정의로 변환하여 TypeScript에서 다룰 수 있게 합니다.
- **openapi-jsonschema-parameters**: OpenAPI 파라미터를 JSON 스키마로 변환
- **json-schema-to-zod**: JSON 스키마를 Zod 스키마로 변환하여 데이터 검증을 위한 타입을 자동으로 생성
- **handlebars**: 코드 템플릿을 사용하여 API 메서드, query/mutation hook 파일을 생성
- **clipanion**: CLI 유틸리티로 사용

### 기능 설명

1. **OpenAPI 스펙 로드 및 파싱**:

   - OpenAPI 스펙 JSON 파일을 가져와 openapi-types를 사용하여 이를 TypeScript 타입으로 변환합니다. 스펙을 직접 파싱하여 필요한 정보를 추출합니다.

2. **Zod 스키마 생성**:

   - 파싱된 스펙의 `components.schemas`에서 DTO를 가져와 `json-schema-to-zod`를 사용해 Zod 스키마를 생성합니다.

3. **API 엔드포인트 처리**:

   - 스펙의 `paths` 항목을 순회하면서 각 경로의 메서드(GET, POST 등)와 요청 파라미터, 응답 구조를 가져옵니다. 이를 기반으로 API 메서드와 tanstack query/mutation hook을 자동으로 생성합니다.

4. **API 메서드 생성**:

   - 요청 파라미터 및 응답 타입을 바탕으로 TypeScript API 메서드를 자동으로 생성합니다. `handlebars` 템플릿을 사용하여 코드가 자동으로 작성되며, 메서드는 요청 파라미터, 응답 타입 등을 명시한 DTO로 작성됩니다.

5. **tanstack query/mutation hook 생성**:
   - 동일한 원리로 tanstack query 및 mutation hook을 자동으로 생성합니다.
