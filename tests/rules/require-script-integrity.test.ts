import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "../../src/rules/require-script-integrity";

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

ruleTester.run("require-script-integrity", rule, {
  valid: [
    {
      code: `
        <script src="/script.js" />
      `,
    },
    {
      code: `
        <Script src="/script.js" />
      `,
    },
    {
      code: `
        <script src="https://example.com/script.js" integrity="123" />
      `,
    },
    {
      code: `
        <Script src="https://example.com/script.js" integrity="123" />
      `,
    },
  ],
  invalid: [
    {
      code: `
        <script src="https://example.com/script.js" />
      `,
      errors: [{ messageId: "missingIntegrity" }],
    },
    {
      code: `
        <Script src="https://example.com/script.js" />
      `,
      errors: [{ messageId: "missingIntegrity" }],
    },
  ],
});
