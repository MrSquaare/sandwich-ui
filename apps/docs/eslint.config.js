import config from "@sandwich-ui/eslint-config";
import * as astro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
  globalIgnores(["dist", ".astro"]),
  config,
  astro.configs.recommended,
  {
    rules: {
      "import-x/no-unresolved": ["error", { ignore: ["astro:"] }],
    },
  },
);
