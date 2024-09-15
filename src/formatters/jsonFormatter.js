const jsonFormatter = (tree) => {
  const formatItems = (items) => items.reduce((acc, item) => ({ ...acc, ...formatItem(item) }), {});

  const formatItem = (item) => {
    switch (item.type) {
      case 'nested':
        return { [item.key]: formatItems(item.value) };
      case 'added':
        return { [item.key]: { type: 'added', value: item.value } };
      case 'removed':
        return { [item.key]: { type: 'removed', value: item.value } };
      case 'unchanged':
        return { [item.key]: { type: 'unchanged', value: item.value } };
      case 'changed':
        return {
          [item.key]: {
            type: 'changed',
            oldValue: item.oldValue,
            newValue: item.newValue,
          },
        };
      default:
        throw new Error(`Unknown item type: ${item.type}`);
    }
  };

  return JSON.stringify(formatItems(tree), null, 2);
};

export default jsonFormatter;
