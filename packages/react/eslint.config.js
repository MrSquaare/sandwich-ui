import config from "@sandwich-ui/eslint-config";
import configReact from "@sandwich-ui/eslint-config-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
  globalIgnores(["dist", "styled-system"]),
  config,
  configReact,
);
