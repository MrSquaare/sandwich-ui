import storybook from "eslint-plugin-storybook";
import globals from "globals";

import rootConfig from "../../eslint.config.mjs";

export default [
  { ignores: ["storybook-static", "!.storybook"] },
  ...rootConfig,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  ...storybook.configs["flat/recommended"],
];
