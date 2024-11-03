import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "../../src/rules/enforce-https";

const ruleTester = new RuleTester({
  // @ts-ignore
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

ruleTester.run("enforce-https", rule, {
  valid: [
    {
      code: `
        await axios.post("https://example.com/cats")
      `,
    },
    {
      code: `
        await fetch("https://example.com/cats", {
            method: "PATCH"
        })
      `,
    },
  ],
  invalid: [
    {
      code: `
        await fetch("http://example.com/cats", {
            method: "POST"
        })
      `,
      errors: [{ messageId: "useHttps" }],
    },
    {
      code: `
        await axios.patch("http://example.com/cats", {})
      `,
      errors: [{ messageId: "useHttps" }],
    },
  ],
});
