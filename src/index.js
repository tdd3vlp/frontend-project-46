import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import parse from './parsers.js';

const getFileData = (file) => {
  return readFileSync(path.resolve(file), 'utf-8');
};

const genDiff = (filePath1, filePath2) => {
  const firstFile = parse(getFileData(filePath1));
  const secondFile = parse(getFileData(filePath2));

  return { firstFile, secondFile };
};

export default genDiff;
