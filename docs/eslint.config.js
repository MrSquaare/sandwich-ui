import config from "@sandwich-ui/eslint-config";
import * as astro from "eslint-plugin-astro";

export default [
  { ignores: ["dist", ".astro"] },
  ...config,
  ...astro.configs.recommended,
];
