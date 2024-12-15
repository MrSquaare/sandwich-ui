import { createNormalizer } from "@zag-js/types";

import { AnyProps } from "../../types/props";

const propMap: Record<string, string> = {
  htmlFor: "for",
  className: "class",
  defaultValue: "value",
  defaultChecked: "checked",
};

const processStyle = (style: object) => {
  return Object.entries(style).reduce((acc, [key, value]) => {
    if (value === null || value === undefined) return acc;

    if (!key.startsWith("--")) {
      key = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    }

    acc += `${key}:${value};`;

    return acc;
  }, "");
};

export const normalizeProps = createNormalizer((props) => {
  const normalizedProps = Object.entries(props).reduce((acc, [key, value]) => {
    const prop = propMap[key] || key;

    if (prop === "style") {
      value = processStyle(value);
    }

    acc[prop] = value;

    return acc;
  }, {} as AnyProps);

  return normalizedProps;
});
