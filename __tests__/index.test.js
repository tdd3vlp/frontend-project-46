import { dirname } from 'path';
import * as path from 'node:path';
import { fileURLToPath } from 'url';
import { describe, expect, test } from '@jest/globals';
import genDiff from '../src/index.js';
import jsonFormat from '../__fixtures__/jsonFormat.js';
import stylishFormat from '../__fixtures__/stylishFormat.js';
import plainFormat from '../__fixtures__/plainFormat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFullPath = (file) => {
  return path.join(__dirname, '..', '__fixtures__', file);
};

describe('Compare module', () => {
  test('Compare JSON files with stylish formatter', () => {
    expect(genDiff(getFullPath('file1.json'), getFullPath('file2.json'))).toEqual(stylishFormat);
  });
  test('Compare YML files with stylish formatter', () => {
    expect(genDiff(getFullPath('file1.yml'), getFullPath('file2.yml'))).toEqual(stylishFormat);
  });
  test('Compare JSON files with plain formatter', () => {
    expect(genDiff(getFullPath('file1.json'), getFullPath('file2.json'), 'plain')).toBe(
      plainFormat,
    );
  });
  test('Compare YML files with plain formatter', () => {
    expect(genDiff(getFullPath('file1.yml'), getFullPath('file2.yml'), 'plain')).toBe(plainFormat);
  });
  test('Compare JSON files with json formatter', () => {
    expect(genDiff(getFullPath('file1.json'), getFullPath('file2.json'), 'json')).toBe(jsonFormat);
  });
  test('Compare YML files with json formatter', () => {
    expect(genDiff(getFullPath('file1.yml'), getFullPath('file2.yml'), 'json')).toBe(jsonFormat);
  });
});
