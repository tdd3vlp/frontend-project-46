const formatResult = (result) => {
  const formattedResult = result
    .map((item) => {
      switch (item.type) {
        case 'added':
          return `  + ${item.key}: ${item.value}`;
        case 'removed':
          return `  - ${item.key}: ${item.value}`;
        case 'unchanged':
          return `    ${item.key}: ${item.value}`;
        case 'changed':
          return `  - ${item.key}: ${item.oldValue}\n  + ${item.key}: ${item.newValue}`;
        default:
          return '';
      }
    })
    .join('\n');

  return `{\n${formattedResult}\n}`;
};

export default formatResult;
