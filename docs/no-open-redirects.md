# no-open-redirects

## Rule Details

This rule disables the usage of user-controlled values in href attributes to prevent open redirects.

## Examples

Examples of **incorrect** code for this rule:

```jsx
<a href={userInput}>Test</a>
```

```jsx
<Link href={userInput}>Test</Link>
```

Examples of **correct** code for this rule:

```jsx
<a href="/test">Test</a>
```

```jsx
<Link href="/test">Test</Link>
```
