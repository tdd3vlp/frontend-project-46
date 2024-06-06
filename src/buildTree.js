import _ from 'lodash';

const buildTree = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return {
        key,
        value: obj2[key],
        type: 'added',
      };
    }
    if (!_.has(obj2, key)) {
      return {
        key,
        value: obj1[key],
        type: 'removed',
      };
    }
    if (_.isEqual(obj1[key], obj2[key])) {
      return {
        key,
        value: obj1[key],
        type: 'unchanged',
      };
    }
    return {
      key,
      oldValue: obj1[key],
      newValue: obj2[key],
      type: 'changed',
    };
  });

  return result;
};

export default buildTree;
