import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import parse from './parsers.js';
import format from './formatters/index.js';
import buildTree from './buildTree.js';

// Read file
const getFileData = (filePath) => readFileSync(path.resolve(filePath), 'utf-8');

// Get file format
const getFileFormat = (filePath) => path.extname(filePath).slice(1).toLowerCase();

// Get data and parse
const getParsedFileData = (filePath) => {
  const fileFormat = getFileFormat(filePath);
  const fileData = getFileData(filePath);
  return parse(fileData, fileFormat);
};

// Main function
const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const firstFileData = getParsedFileData(filePath1);
  const secondFileData = getParsedFileData(filePath2);

  const tree = buildTree(firstFileData, secondFileData);

  return format(tree, formatName);
};

export default genDiff;
