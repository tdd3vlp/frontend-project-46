import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import parse from './parsers.js';
import format from './formatters/index.js';
import buildTree from './buildTree.js';

// Get data and parse
const getParsedFileData = (filePath) => {
  const format = getFileFormat(filePath);
  const data = getFileData(filePath);
  return parse(data, format);
};

// Read file
const getFileData = (filePath) => {
  return readFileSync(path.resolve(filePath), 'utf-8');
};

// Get file format
const getFileFormat = (filePath) => {
  return path.extname(filePath).slice(1).toLowerCase();
};

// Main function
const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const firstFileData = getParsedFileData(filePath1);
  const secondFileData = getParsedFileData(filePath2);

  const tree = buildTree(firstFileData, secondFileData);

  return format(tree, formatName);
};

export default genDiff;
