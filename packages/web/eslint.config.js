import lit from "eslint-plugin-lit";
import globals from "globals";

import rootConfig from "../../eslint.config.mjs";

export default [
  { ignores: ["dist"] },
  ...rootConfig,
  lit.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
];
