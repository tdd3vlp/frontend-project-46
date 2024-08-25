import { readFileSync } from "node:fs";
import * as path from "node:path";
import parse from "./parsers.js";
import format from "./formatters/formatter.js";
import buildTree from "./buildTree.js";

const getFileData = (file) => {
  return readFileSync(path.resolve(file), "utf-8");
};

const getFileFormat = (filePath) => {
  return path.extname(filePath).slice(1).toLowerCase();
};

const genDiff = (filePath1, filePath2) => {
  const format1 = getFileFormat(filePath1);
  const format2 = getFileFormat(filePath2);

  const firstFileData = parse(getFileData(filePath1), format1);
  const secondFileData = parse(getFileData(filePath2), format2);
  const result = buildTree(firstFileData, secondFileData);
  return format(result);
};

export default genDiff;
