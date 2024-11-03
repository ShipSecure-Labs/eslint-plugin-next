import { createRule } from "../utils/rule";

export const rule = createRule({
  create(context) {
    return {
      JSXOpeningElement(node) {
        const isScriptElement =
          node.name &&
          node.name.type === "JSXIdentifier" &&
          (node.name.name === "script" || node.name.name === "Script");

        if (
          isScriptElement &&
          node.attributes.some(
            (attr) =>
              attr.type === "JSXAttribute" &&
              attr.name.name === "src" &&
              attr.value &&
              attr.value.type === "Literal" &&
              typeof attr.value.value === "string" &&
              attr.value.value.startsWith("http")
          ) &&
          !node.attributes.some(
            (attr) =>
              attr.type === "JSXAttribute" && attr.name.name === "integrity"
          )
        ) {
          context.report({
            messageId: "missingIntegrity",
            node,
          });
        }
      },
    };
  },
  name: "require-script-integrity",
  meta: {
    docs: {
      description:
        "Require integrity attribute on external scripts to prevent CDN tampering.",
      recommended: true,
    },
    messages: {
      missingIntegrity:
        "Add an integrity attribute to this external script to prevent potential tampering.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
