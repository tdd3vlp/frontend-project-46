#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

const fn = (filepath1, filepath2) => {
  console.log(genDiff(filepath1, filepath2, program.opts().format));
};

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action(fn)
  .parse();
