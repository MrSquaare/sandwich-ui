import config from "@sandwich-ui/eslint-config";
import configReact from "@sandwich-ui/eslint-config-react";
import * as storybook from "eslint-plugin-storybook";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
  globalIgnores(["storybook-static", "!.storybook", "styled-system"]),
  config,
  configReact,
  storybook.configs["flat/recommended"],
);
