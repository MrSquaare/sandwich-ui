import { createNormalizer } from "@zag-js/types";

import { AnyProps } from "../../types/props";

const propMap: Record<string, string> = {
  className: "class",
  defaultValue: "value",
  defaultChecked: "checked",
  htmlFor: "for",
  onChange: "onInput",
  onDoubleClick: "onDblClick",
  onFocus: "onFocusIn",
  onBlur: "onFocusOut",
};

const stringifyStyle = (style: object) => {
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
    key = propMap[key] || key;

    if (key === "style" && typeof value === "object") {
      value = stringifyStyle(value);
    }

    acc[key] = value;

    return acc;
  }, {} as AnyProps);

  return normalizedProps;
});
