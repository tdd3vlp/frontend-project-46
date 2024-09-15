import _ from 'lodash';

const stylishFormatter = (tree, depth = 1) => {
  const indent = '    '.repeat(depth - 1);

  const formatValue = (value, currentDepth) => {
    if (_.isPlainObject(value)) {
      const indentation = '    '.repeat(currentDepth);
      const entries = Object.entries(value)
        .map(([key, val]) => `${indentation}${key}: ${formatValue(val, currentDepth + 1)}`)
        .join('\n');
      return `{\n${entries}\n${'    '.repeat(currentDepth - 1)}}`;
    }
    return value;
  };

  const formattedResult = tree
    .map((item) => {
      const currentIndent = `${indent}  `;
      const nestedIndent = `${indent}    `;

      switch (item.type) {
        case 'added':
          return `${currentIndent}+ ${item.key}: ${formatValue(item.value, depth + 1)}`;
        case 'removed':
          return `${currentIndent}- ${item.key}: ${formatValue(item.value, depth + 1)}`;
        case 'unchanged':
          return `${nestedIndent}${item.key}: ${formatValue(item.value, depth + 1)}`;
        case 'changed':
          return `${currentIndent}- ${item.key}: ${formatValue(item.oldValue, depth + 1)}\n${currentIndent}+ ${item.key}: ${formatValue(item.newValue, depth + 1)}`;
        case 'nested':
          return `${nestedIndent}${item.key}: ${stylishFormatter(item.value, depth + 1)}`;
        default:
          return '';
      }
    })
    .join('\n');

  return `{\n${formattedResult}\n${indent}}`;
};

export default stylishFormatter;
