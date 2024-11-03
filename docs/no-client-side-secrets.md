# no-client-side-secrets

## Rule Details

This rule disables the usage of secrets in combination with NEXT_PUBLIC.

## Examples

Examples of **incorrect** code for this rule:

```js
const key = process.env.NEXT_PUBLIC_API_KEY;
```

Examples of **correct** code for this rule:

```js
const key = process.env.API_KEY;
```

## Further Reading

- [Next.js Configure Environment Variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)
