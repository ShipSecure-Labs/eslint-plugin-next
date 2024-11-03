import { createRule } from "../utils/rule";

export const rule = createRule({
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name && node.name.name === "href") {
          const value = node.value;
          if (
            value &&
            value.type === "JSXExpressionContainer" &&
            value.expression.type === "Identifier"
          ) {
            context.report({
              messageId: "noOpenRedirect",
              node,
            });
          }
        }
      },
    };
  },
  name: "no-open-redirects",
  meta: {
    docs: {
      description:
        "Disallow open redirects by preventing user-controlled href values.",
      recommended: true,
    },
    messages: {
      noOpenRedirect:
        "Avoid using user-controlled values in href attributes to prevent open redirects.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
