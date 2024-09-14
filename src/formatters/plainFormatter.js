import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : String(value);
};

const plainFormatter = (tree, parentPath = '') => {
  const formattedResult = tree.flatMap((item) => {
    const propertyPath = parentPath ? `${parentPath}.${item.key}` : item.key;

    switch (item.type) {
      case 'added':
        return `Property '${propertyPath}' was added with value: ${formatValue(item.value)}`;
      case 'removed':
        return `Property '${propertyPath}' was removed`;
      case 'changed':
        return `Property '${propertyPath}' was updated. From ${formatValue(item.oldValue)} to ${formatValue(item.newValue)}`;
      case 'nested':
        return plainFormatter(item.value, propertyPath);
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown child type: '${item.type}'`);
    }
  });
  return formattedResult.join('\n');
};

export default plainFormatter;
