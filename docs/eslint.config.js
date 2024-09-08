import astro from "eslint-plugin-astro";

import rootConfig from "../eslint.config.mjs";

export default [
  { ignores: ["dist", ".astro"] },
  ...rootConfig,
  ...astro.configs.recommended,
];
