import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import SwaggerParser from '@apidevtools/swagger-parser';

import type { CodeType } from './config';
import { BASE_URL, sourceDirectories, targetDirectories } from './config';

/**
 * oas 문서를 json으로 파싱
 * @param url - Swagger 문서 URL
 */
const parseOAS = async (url: string) => {
  const sourceDir = './src/test-types';
  const doc = await SwaggerParser.parse(url);
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
  }
  fs.writeFileSync(
    path.join(sourceDir, 'oas.json'),
    JSON.stringify(doc, null, 2),
  );
  console.log('✅ oas.json 파일 생성 완료!');
};

/**
 * Swagger TypeScript API 명령어 실행
 * @param url - Swagger 문서 URL
 * @param type - 생성할 코드 타입
 */
const executeSwaggerCommand = (url: string, type: CodeType) => {
  const templateType = type === 'types' ? 'api' : type;
  const command = `swagger-typescript-api -p ${url} -o ${sourceDirectories[type]} --axios --modular -t ./templates/swagger-${templateType}-template`;
  execSync(command, { stdio: 'inherit' });
};

/**
 * 디렉토리 생성
 */
const createDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

/**
 * 생성된 파일들을 최종 디렉토리로 이동
 * @param type - 파일 타입
 * @param domain - API 도메인
 */
const moveFiles = async (type: CodeType) => {
  const sourceDir = sourceDirectories[type];
  const targetDir = targetDirectories[type];

  const targetFilename = type === 'types' ? `${type}.d.ts` : `${type}.ts`;

  createDirectory(targetDir);
  createDirectory(sourceDir);

  try {
    if (type === 'types') {
      const sourceFile = path.join(sourceDir, 'data-contracts.ts');
      if (fs.existsSync(sourceFile)) {
        const content = fs.readFileSync(sourceFile, 'utf-8');
        fs.writeFileSync(
          path.join(targetDirectories.types, targetFilename),
          content,
        );
      }
    } else {
      const files = fs.readdirSync(sourceDir);
      const apiFiles = files.filter(
        (file) =>
          file !== 'data-contracts.ts' &&
          file !== 'http-client.ts' &&
          file.endsWith('.ts'),
      );

      for (const file of apiFiles) {
        const content = fs.readFileSync(path.join(sourceDir, file), 'utf-8');
        const apiName = file.replace('.ts', '').toLowerCase();
        fs.writeFileSync(
          path.join(targetDirectories[type], `${apiName}.ts`),
          content,
        );
      }
    }

    if (fs.existsSync(path.join(sourceDir, 'http-client.ts'))) {
      fs.unlinkSync(path.join(sourceDir, 'http-client.ts'));
    }

    if (fs.existsSync(sourceDir)) {
      const files = fs.readdirSync(sourceDir);
      for (const file of files) {
        fs.unlinkSync(path.join(sourceDir, file));
      }
      fs.rmdirSync(sourceDir);
    }
  } catch (error: any) {
    console.error(`Warning: ${error.message}`);
  }
};

/**
 * 특정 타입의 코드 생성 및 파일 이동
 * @param url - Swagger 문서 URL
 * @param domain - API 도메인
 * @param type - 생성할 코드 타입
 */
const generateCode = async (url: string, type: CodeType) => {
  console.log(`\n🔨 ${type.toUpperCase()} 코드 생성 중...`);
  const swaggerUrl = url ?? BASE_URL;
  executeSwaggerCommand(swaggerUrl, type);
  await moveFiles(type);
};

/**
 * Swagger API 코드 생성 메인 함수
 * - API, Query, Mutation 코드 자동 생성
 * - 타입 정의 파일 생성
 */
export const swaggerCommand = async () => {
  try {
    await parseOAS(BASE_URL);
    await generateCode(BASE_URL, 'types');
    await generateCode(BASE_URL, 'api');
    await generateCode(BASE_URL, 'query');
    await generateCode(BASE_URL, 'mutation');
    console.log('\n✅ 코드 생성 완료!');
  } catch (error: any) {
    console.error(`\n❌ 코드 생성 실패: ${error.message}`);
    return 1;
  }
};
