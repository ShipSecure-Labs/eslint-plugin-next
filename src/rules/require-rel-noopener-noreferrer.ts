import { createRule } from "../utils/rule";

export const rule = createRule({
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (
          node.name.type == "JSXIdentifier" &&
          (node.name.name === "a" || node.name.name === "Link") &&
          node.attributes.some(
            (attr) =>
              attr.type === "JSXAttribute" &&
              attr.name.name === "href" &&
              attr.value?.type === "Literal" &&
              typeof attr.value?.value === "string" &&
              /^http/.test(attr.value?.value)
          ) &&
          !node.attributes.some(
            (attr) =>
              attr.type === "JSXAttribute" &&
              attr.name.name === "rel" &&
              attr.value?.type === "Literal" &&
              typeof attr.value?.value === "string" &&
              (attr.value.value.includes("noopener") ||
                attr.value.value.includes("noreferrer"))
          )
        ) {
          context.report({
            messageId: "requireRelNoopenerNoreferrer",
            node,
          });
        }
      },
    };
  },
  name: "require-rel-noopener-noreferrer",
  meta: {
    docs: {
      description:
        "Require rel='noopener noreferrer' on external links to prevent tab-nabbing.",
      recommended: true,
    },
    messages: {
      requireRelNoopenerNoreferrer:
        "Add rel='noopener noreferrer' to external links for security.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
