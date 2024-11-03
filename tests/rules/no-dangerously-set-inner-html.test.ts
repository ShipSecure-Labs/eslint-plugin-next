import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "../../src/rules/no-dangerously-set-inner-html";

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

ruleTester.run("no-dangerously-set-inner-html", rule, {
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
        const element = <div dangerouslySetInnerHTML={{ __html: "Unsafe Content" }}></div>;
      `,
      errors: [{ messageId: "noDangerouslySetInnerHTML" }],
    },
    {
      code: `
        const element = <div dangerouslySetInnerHTML={dangerousVariable}></div>;
      `,
      errors: [{ messageId: "noDangerouslySetInnerHTML" }],
    },
  ],
});
