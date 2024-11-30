import rootConfig from "../../eslint.config.mjs";

export default [
  { ignores: ["dist", "src/styled-system"] },
  ...rootConfig,
  {
    languageOptions: {
      ecmaVersion: 2020,
    },
  },
];
