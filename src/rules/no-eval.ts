import { createRule } from "../utils/rule";
import { TSESTree } from "@typescript-eslint/utils";

export const rule = createRule({
  create(context) {
    return {
      CallExpression(node: TSESTree.CallExpression) {
        if (node.callee.type === "Identifier" && node.callee.name === "eval") {
          context.report({
            messageId: "noEval",
            node: node,
          });
        }
      },
    };
  },
  name: "no-eval",
  meta: {
    docs: {
      description: "Disallow usage of eval for security reasons.",
      recommended: true,
    },
    messages: {
      noEval: "Avoid using eval as it can lead to security vulnerabilities.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
