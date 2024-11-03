import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "../../src/rules/no-open-redirects";

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

ruleTester.run("no-open-redirects", rule, {
  valid: [
    {
      code: `
      <a href="/test">
        test
      </a>
      `,
    },
    {
      code: `
        <a href={"/users/" + user.id}>
          test
        </a>
      `,
    },
  ],
  invalid: [
    {
      code: `
        <a href={userInput}>
          test
        </a>
      `,
      errors: [{ messageId: "noOpenRedirect" }],
    },
    {
      code: `
        <Link href={userInput}>
          test
        </Link>
      `,
      errors: [{ messageId: "noOpenRedirect" }],
    },
  ],
});
