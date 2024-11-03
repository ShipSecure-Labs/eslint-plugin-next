import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "../../src/rules/require-rel-noopener-noreferrer";

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

ruleTester.run("require-rel-noopener-noreferrer", rule, {
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
    {
      code: `
        <a href={"https://example.com/users/" + user.id} rel="noopener noreferrer">
          test
        </a>
      `,
    },
  ],
  invalid: [
    {
      code: `
      <a href="https://example.com/users/">
          test
        </a>
      `,
      errors: [{ messageId: "requireRelNoopenerNoreferrer" }],
    },
    {
      code: `
      <a href="http://example.com/users">
          test
        </a>
      `,
      errors: [{ messageId: "requireRelNoopenerNoreferrer" }],
    },
    {
      code: `
      <Link href="http://example.com/users">
          test
        </Link>
      `,
      errors: [{ messageId: "requireRelNoopenerNoreferrer" }],
    },
  ],
});
