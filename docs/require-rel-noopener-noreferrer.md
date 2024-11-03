# require-rel-noopener-noreferrer

## Rule Details

This rule requires the use of rel="noopener noreferrer" on external links to prevent tab-nabbing.

## Examples

Examples of **incorrect** code for this rule:

```jsx
<a href="https://example.com">Test</a>
```

```jsx
<Link href="https://example.com">Test</Link>
```

Examples of **correct** code for this rule:

```jsx
<a href="https://example.com" rel="noopener noreferrer">
  Test
</a>
```

```jsx
<Link href="https://example.com" rel="noopener noreferrer">
  Test
</Link>
```
