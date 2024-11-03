import { createRule } from "../utils/rule";

export const rule = createRule({
  create(context) {
    return {
      CallExpression(node) {
        if (
          (node.callee.type === "Identifier" && node.callee.name === "fetch") ||
          (node.callee.type === "MemberExpression" &&
            node.callee.object.type === "Identifier" &&
            node.callee.object.name === "axios")
        ) {
          const firstArg = node.arguments[0];
          if (
            firstArg &&
            firstArg.type === "Literal" &&
            typeof firstArg.value === "string" &&
            firstArg.value.startsWith("http:")
          ) {
            context.report({
              messageId: "useHttps",
              node: firstArg,
            });
          }
        }
      },
    };
  },
  name: "enforce-https",
  meta: {
    docs: {
      description: "Enforce HTTPS in network requests.",
      recommended: true,
    },
    messages: {
      useHttps: "Use HTTPS instead of HTTP for secure connections.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
