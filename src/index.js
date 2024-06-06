import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import parse from './parsers.js';
import _ from 'lodash';
import format from './formatters/formatter.js';
import buildTree from './buildTree.js';

const getFileData = (file) => {
  return readFileSync(path.resolve(file), 'utf-8');
};

const genDiff = (filePath1, filePath2) => {
  const firstFile = parse(getFileData(filePath1));
  const secondFile = parse(getFileData(filePath2));
  const result = buildTree(firstFile, secondFile);
  return format(result);
};

export default genDiff;
