#!/usr/bin/env node

import { program } from 'commander';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { parseData } from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filePath1);
    const absolutePath2 = path.resolve(process.cwd(), filePath2);

    const firstFile = parseData(fs.readFileSync(absolutePath1));
    const secondFile = parseData(fs.readFileSync(absolutePath2));

    return { firstFile, secondFile };
  })
  .parse();
