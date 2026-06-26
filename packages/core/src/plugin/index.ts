import type { PandaPlugin, UserConfig } from "@pandacss/types";

import { definePlugin } from "@pandacss/dev";
import { existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { cwd } from "node:process";

const DIRS = ["css", "tokens", "types", "patterns", "recipes", "jsx", "themes"];
let config: UserConfig;

export default definePlugin({
  hooks: {
    "codegen:done": async () => {
      const cwdPath = cwd();
      const outDir = config.outdir || "styled-system";
      const outDirPath = resolve(cwdPath, outDir);
      const importMap = config.importMap;

      if (!existsSync(outDirPath)) {
        console.warn(
          `⚠️ \`codegen:done\`: \`${outDir}\` path does not exist. Skipping package.json creation`,
        );

        return;
      }

      if (typeof importMap !== "string") {
        console.warn(
          `⚠️ \`codegen:done\`: importMap is not a string. Skipping package.json creation`,
        );

        return;
      }

      const isJS = config.outExtension === "js";
      const jsExt = isJS ? ".js" : ".mjs";
      const dtsExt =
        !isJS && config.forceConsistentTypeExtension ? ".d.mts" : ".d.ts";

      const createEntry = (dir: string) => ({
        import: `./${dir}/index${jsExt}`,
        ...(isJS ? { require: `./${dir}/index${jsExt}` } : {}),
        types: `./${dir}/index${dtsExt}`,
      });

      const exports: Record<string, object> = {};

      for (const dir of DIRS) {
        if (existsSync(resolve(outDirPath, dir))) {
          exports[`./${dir}`] = createEntry(dir);
        }
      }

      const packageJSONPath = resolve(outDirPath, "package.json");
      const packageJSON = {
        exports,
        name: importMap,
      };

      writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2));

      console.log(
        `✔️ \`${outDir}/package.json\`: package.json declaration for ${importMap}`,
      );
    },
    "config:resolved": (ctx) => {
      config = ctx.config;
    },
  },
  name: "pandacss-outdir-package",
}) satisfies PandaPlugin;
