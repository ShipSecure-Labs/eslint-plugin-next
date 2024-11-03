import { createRule } from "../utils/rule";

export const rule = createRule({
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.object.type === "MemberExpression" &&
          node.object.object.type === "Identifier" &&
          node.object.object.name === "process" &&
          node.object.property.type === "Identifier" &&
          node.object.property.name === "env" &&
          node.property.type === "Identifier" &&
          node.property.name.startsWith("NEXT_PUBLIC_") &&
          (node.property.name.includes("SECRET") ||
            node.property.name.includes("API_KEY") ||
            node.property.name.includes("KEY") ||
            node.property.name.includes("TOKEN") ||
            node.property.name.includes("PASSWORD"))
        ) {
          context.report({
            messageId: "noClientSideSecrets",
            node: node.property,
          });
        }
      },
    };
  },
  name: "no-client-side-secrets",
  meta: {
    docs: {
      description: "Prevent the use of server secrets on the client side.",
      recommended: true,
    },
    messages: {
      noClientSideSecrets:
        "Avoid exposing secret environment variables with NEXT_PUBLIC_ prefix on the client side.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
