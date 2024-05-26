#!/usr/bin/env node

import { program } from 'commander';
import { parseFile } from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((first, second) => {
    const file1 = parseFile(first);
    const file2 = parseFile(second);

    return { file1, file2 };
  })
  .parse();
