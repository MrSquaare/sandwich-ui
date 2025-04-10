import config from "@sandwich-ui/eslint-config";

export default [
  { ignores: ["dist", "src/styled-system"] },
  ...config,
  {
    languageOptions: {
      ecmaVersion: 2020,
    },
  },
];
