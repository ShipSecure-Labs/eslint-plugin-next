const eslintPlugin = require("eslint-plugin-eslint-plugin");

module.exports = [
  eslintPlugin.configs["flat/recommended"],
  {
    rules: {
      "eslint-plugin/require-meta-docs-description": "error",
    },
  },
];
