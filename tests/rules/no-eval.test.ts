import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "../../src/rules/no-eval";

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

ruleTester.run("no-eval", rule, {
  valid: [
    {
      code: `
        const result = "test123";
      `,
    },
  ],
  invalid: [
    {
      code: `
        eval("test 123")
      `,
      errors: [{ messageId: "noEval" }],
    },
  ],
});
