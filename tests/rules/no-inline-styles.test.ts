import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "../../src/rules/no-inline-styles";

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

ruleTester.run("no-inline-styles", rule, {
  valid: [
    {
      code: `
        const element = <div>Safe Content</div>;
      `,
    },
    {
      code: `
        const element = <div innerHTML={{ __html: "Safe Content" }}></div>;
      `,
    },
  ],
  invalid: [
    {
      code: `
        <div style={{
            display: "block"
        }}></div>;
      `,
      errors: [{ messageId: "noInlineStyles" }],
    },
    {
      code: `
        <button style={{
            display: "block"
        }}></button>;
      `,
      errors: [{ messageId: "noInlineStyles" }],
    },
  ],
});
