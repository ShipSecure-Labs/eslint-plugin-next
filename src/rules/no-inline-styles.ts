import { createRule } from "../utils/rule";

export const rule = createRule({
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name && node.name.name === "style") {
          context.report({
            messageId: "noInlineStyles",
            node,
          });
        }
      },
    };
  },
  name: "no-inline-styles",
  meta: {
    docs: {
      description:
        "Disallow inline styles in JSX to reduce security risks and improve maintainability.",
      recommended: true,
    },
    messages: {
      noInlineStyles:
        "Avoid using inline styles in JSX as it can lead to security vulnerabilities.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
