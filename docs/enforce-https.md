# enforce-https

## Rule Details

This rule enforces the use of HTTPS in network requests.

## Examples

Examples of **incorrect** code for this rule:

```js
fetch("http://example.com/api/data");
axios.post("http://example.com/api/data");
```

Examples of **correct** code for this rule:

```js
fetch("https://example.com/api/data");
```

## Further Reading

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
