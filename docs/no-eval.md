# no-eval

## Rule Details

This rule disables the usage of eval.

## Examples

Examples of **incorrect** code for this rule:

```js
eval("return 'foo';");
```

Examples of **correct** code for this rule:

```js
const result = "foo";
```
