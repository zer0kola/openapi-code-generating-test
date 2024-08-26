import * as fs from "fs";

export function getAllFiles(dirPath: string, arrayOfFiles: string[]) {
  //  return getAllFiles(path.resolve(BASE_URL, "generated"), []);
  // ./generated 하위 디렉토리에 있는 파일들을 전부 찾는다.
  const files = fs.readdirSync(dirPath);
}
