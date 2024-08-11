import _ from "lodash";

const buildTree = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!_.has(obj1, key)) return { key, value: value2, type: "added" };
    if (!_.has(obj2, key)) return { key, value: value1, type: "removed" };
    if (_.isEqual(value1, value2))
      return { key, value: value1, type: "unchanged" };

    return { key, oldValue: value1, newValue: value2, type: "changed" };
  });

  return result;
};

export default buildTree;
