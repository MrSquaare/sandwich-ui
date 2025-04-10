import config from "@sandwich-ui/eslint-config";
import configReact from "@sandwich-ui/eslint-config-react";

export default [
  { ignores: ["dist"] },
  ...config,
  ...configReact,
  /* {
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }, */
];
