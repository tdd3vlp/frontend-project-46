import yaml from "js-yaml";

const mapping = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const parse = (content, format) => {
  const parser = mapping[format];
  if (!parser) {
    throw new Error(`Unsupported format: ${format}`);
  }
  return parser(content);
};

export default parse;
