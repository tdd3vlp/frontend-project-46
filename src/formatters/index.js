import stylishFormatter from './stylishFormatter.js';
import plainFormatter from './plainFormatter.js';

const format = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylishFormatter(tree);
    case 'plain':
      return plainFormatter(tree);
    default:
      throw new Error(`Unknown formatter: ${formatName}`);
  }
};

export default format;
