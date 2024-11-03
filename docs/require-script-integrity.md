# require-script-integrity

## Rule Details

This rule requires the use of integrity attribute on external scripts to prevent CDN tampering.

## Examples

Examples of **incorrect** code for this rule:

```jsx
<script src="https://example.com/script.js" />
```

```jsx
<Script src="https://example.com/script.js" />
```

Examples of **correct** code for this rule:

```jsx
<script
  src="https://example.com/script.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
/>
```

```jsx
<Script
  src="https://example.com/script.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
/>
```
