/* eslint-disable import-x/no-named-as-default */
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig(
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat["recommended-latest"],
  reactRefresh.configs.vite,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react/jsx-curly-brace-presence": ["error", { props: "always" }],
      "react/jsx-sort-props": ["error"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);
