import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import storybookPlugin from "eslint-plugin-storybook";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.jest, 
        ...globals.node,
      },
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      storybook: storybookPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...storybookPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];