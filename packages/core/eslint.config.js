import config from "@sandwich-ui/eslint-config";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(globalIgnores(["dist", "styled-system"]), config);
