import stylishFormatter from './stylishFormatter.js';

const format = (tree, formatterName = 'stylish') => {
  switch (formatterName) {
    case 'stylish':
      return stylishFormatter(tree);
    default:
      throw new Error(`Unknown formatter: ${formatterName}`);
  }
};

export default format;
