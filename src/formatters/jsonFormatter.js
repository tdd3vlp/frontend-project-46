import _ from 'lodash';

const formatValue = (value) => {
  if (_.isPlainObject(value)) {
    // Если значение — это объект, обрабатываем его рекурсивно
    return _.mapValues(value, formatValue);
  }
  return value;
};

const jsonFormatter = (tree) => {
  const formatItems = (items) =>
    items.reduce((acc, item) => {
      switch (item.type) {
        case 'nested':
          // Если это вложенный элемент, рекурсивно обрабатываем его
          return { ...acc, [item.key]: formatItems(item.value) };
        case 'added':
          return { ...acc, [item.key]: { type: 'added', value: formatValue(item.value) } };
        case 'removed':
          return { ...acc, [item.key]: { type: 'removed', value: formatValue(item.value) } };
        case 'unchanged':
          return { ...acc, [item.key]: { type: 'unchanged', value: formatValue(item.value) } };
        case 'changed':
          return {
            ...acc,
            [item.key]: {
              type: 'changed',
              oldValue: formatValue(item.oldValue),
              newValue: formatValue(item.newValue),
            },
          };
        default:
          throw new Error(`Unknown item type: ${item.type}`);
      }
    }, {});

  return JSON.stringify(formatItems(tree), null, 2);
};

export default jsonFormatter;
