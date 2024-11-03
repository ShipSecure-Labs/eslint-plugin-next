import { ESLintUtils } from "@typescript-eslint/utils";

export interface PluginDocs {
  description: string;
  recommended?: boolean;
  requiresTypeChecking?: boolean;
}

export const createRule = ESLintUtils.RuleCreator<PluginDocs>(
  (name) =>
    `https://github.com/shipsecure-labs/eslint-plugin-next/tree/main/docs/${name}.md`
);
