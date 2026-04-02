import nextPlugin from "@next/eslint-plugin-next";
import browserConfig from "@repo/eslint-config/browser";
import globals from "globals";

const uiConfig = [
  ...browserConfig,
  {
    ignores: ["out/**"],
  },
  {
    files: ["next.config.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];

export default uiConfig;
