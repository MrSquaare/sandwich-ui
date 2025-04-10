import config from "@sandwich-ui/eslint-config";
import configReact from "@sandwich-ui/eslint-config-react";
import storybook from "eslint-plugin-storybook";

export default [
  { ignores: ["storybook-static", "!.storybook"] },
  ...config,
  ...configReact,
  ...storybook.configs["flat/recommended"],
];
