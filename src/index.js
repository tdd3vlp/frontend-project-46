import * as fs from 'node:fs';

const parseFile = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

export { parseFile };
