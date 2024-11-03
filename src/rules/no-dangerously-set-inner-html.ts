import { createRule } from "../utils/rule";

export const rule = createRule({
  create(context) {
    return {
      JSXAttribute(node) {
        // Check if the attribute name is "dangerouslySetInnerHTML"
        if (node.name && node.name.name === "dangerouslySetInnerHTML") {
          context.report({
            messageId: "noDangerouslySetInnerHTML",
            node: node,
          });
        }
      },
    };
  },
  name: "no-dangerously-set-inner-html",
  meta: {
    docs: {
      description:
        "Disallow usage of dangerouslySetInnerHTML due to potential security risks.",
      recommended: true,
    },
    messages: {
      noDangerouslySetInnerHTML:
        "Avoid using dangerouslySetInnerHTML as it can lead to security vulnerabilities.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
