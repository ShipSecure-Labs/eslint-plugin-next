# no-dangerously-set-inner-html

## Rule Details

This rule disables the usage of dangerouslySetInnerHTML.

## Examples

Examples of **incorrect** code for this rule:

```js
<div dangerouslySetInnerHTML={{ __html: "Unsafe Content" }}></div>
```

Examples of **correct** code for this rule:

```js
<div>Safe Content</div>
```
