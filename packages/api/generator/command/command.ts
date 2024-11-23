import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

import type { CodeType } from './config';
import { DEFAULT_URL, sourceDirectories, targetDirectories } from './config';

/**
 * Swagger TypeScript API 명령어 실행
 * @param url - Swagger 문서 URL
 * @param type - 생성할 코드 타입
 */
const executeSwaggerCommand = (url: string, type: CodeType) => {
  let templatePath = '';
  if (type === 'api' || type === 'types')
    templatePath = './templates/api-template';
  else if (type === 'query') templatePath = './templates/hook-query-template';
  else if (type === 'mutation')
    templatePath = './templates/hook-mutation-template';
  const command = `swagger-typescript-api -p ${url} -o ${sourceDirectories[type]} --axios --modular -t ${templatePath}`;
  execSync(command, { stdio: 'inherit' });
};

/**
 * 생성된 파일들을 최종 디렉토리로 이동
 * @param type - 파일 타입
 */
const moveFiles = async (type: CodeType) => {
  const sourceDir = sourceDirectories[type];
  const targetFilename =
    type === 'types'
      ? `test.d.ts` // types는 .d.ts로 생성
      : `test.ts`;

  try {
    // data-contracts.ts 파일 이동 (타입 정의)
    if (type === 'types') {
      const sourceFile = path.join(sourceDir, 'data-contracts.ts');
      if (fs.existsSync(sourceFile)) {
        // 파일 내용 수정 후 이동
        const content = fs.readFileSync(sourceFile, 'utf-8');
        fs.writeFileSync(
          path.join(targetDirectories.types, targetFilename),
          content,
        );
      }
    } else {
      // 도메인별 파일 이동 (API, Query, Mutation)
      const files = fs.readdirSync(sourceDir);
      const domainFile = files.find(
        (file) => file.toLowerCase() === `test.ts`.toLowerCase(),
      );

      if (domainFile) {
        const sourceFile = path.join(sourceDir, domainFile);
        const content = fs.readFileSync(sourceFile, 'utf-8');
        fs.writeFileSync(
          path.join(targetDirectories[type], targetFilename),
          content,
        );
      }
    }

    // 임시 파일 정리
    if (fs.existsSync(path.join(sourceDir, 'http-client.ts'))) {
      fs.unlinkSync(path.join(sourceDir, 'http-client.ts'));
    }

    // 임시 디렉토리 정리
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
  executeSwaggerCommand(url, type);
  await moveFiles(type);
};

/**
 * Swagger API 코드 생성 메인 함수
 * - API, Query, Mutation 코드 자동 생성
 * - 타입 정의 파일 생성
 * - Vue Query와 함께 사용할 수 있는 형태로 생성
 */
export const swaggerCommand = async () => {
  let url: string = '';

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await new Promise<string>((resolve) => {
    rl.question('\n🔍 OAS URL을 입력하세요: ', (answer) => {
      rl.close();
      resolve(answer);
    });
  });

  if (!answer) {
    url = DEFAULT_URL;
  } else {
    url = answer;
  }

  console.log(`\n🚀 ${url} 도메인 코드 생성 시작`);

  try {
    await generateCode(url, 'types');
    await generateCode(url, 'api');
    await generateCode(url, 'query');
    await generateCode(url, 'mutation');
    console.log('\n✅ 코드 생성 완료!');
  } catch (error: any) {
    console.error(`\n❌ 코드 생성 실패: ${error.message}`);
    return 1;
  }
};
