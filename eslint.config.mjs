import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  /** .gitignore 포함된 항목은 eslint 대상에서 제외함 */
  includeIgnoreFile(gitignorePath),

  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      /** any를 불가피하게 사용할 수 있음 (Record<string, any> 등...) */
      "@typescript-eslint/no-explicit-any": "warn",

      /** type만을 import할 때 type-import를 강제하도록 함 */
      "@typescript-eslint/consistent-type-imports": "error",

      /** 미사용 변수 경고 */
      "@typescript-eslint/no-unused-vars": "warn",

      /** 명시적 함수 반환 타입 강제하지 않음 */
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    ignores: ["node_modules/", "dist/", ".next/", "coverage/"],
  },

  eslintConfigPrettier,
];
