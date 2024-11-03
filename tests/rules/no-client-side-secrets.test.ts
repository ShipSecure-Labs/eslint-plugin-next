import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "../../src/rules/no-client-side-secrets";

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

ruleTester.run("no-client-side-secrets", rule, {
  valid: [
    {
      code: `
        const port = process.env.PORT;
      `,
    },
    {
      code: `
        const port = process.env.NEXT_PUBLIC_PORT;
      `,
    },
  ],
  invalid: [
    {
      code: `
        <div>Here is your token: {process.env.NEXT_PUBLIC_SECRET}</div>
      `,
      errors: [{ messageId: "noClientSideSecrets" }],
    },
    {
      code: `
      const test = process.env.NEXT_PUBLIC_API_KEY;
      `,
      errors: [{ messageId: "noClientSideSecrets" }],
    },
  ],
});
