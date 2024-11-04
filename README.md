# @shipsecure/eslint-plugin-next

## Overview

`@shipsecure/eslint-plugin-next` is a custom ESLint plugin designed to enhance the security of Next.js applications by identifying potentially insecure patterns in code. This plugin offers a set of rules specifically tailored to prevent common security pitfalls in Next.js, encouraging best practices and securing your app's frontend and backend code.

## Features

- Rules for Secure Code: Detects usage of unsecure URLs, inline scripts, eval, and other potential security vulnerabilities.
- Recommended Configurations: Provides a recommended set of rules for immediate security improvements.
- Easy to Integrate: Seamlessly integrates with any Next.js project with simple installation and configuration.

## Installation

```bash
npm install @shipsecure/eslint-plugin-next --save-dev
```

## Usage

### Flat config (requires eslint >= v8.23.0)

Add the following to your `eslint.config.js` file:

```javascript
const shipsecureNext = require("@shipsecure/eslint-plugin-next");

module.exports = [shipsecureNext.configs.recommended];
```

### eslintrc config (deprecated)

Add the following to your `.eslintrc` file:

```javascript
module.exports = {
  extends: ["plugin:@shipsecure/next/recommended-legacy"],
};
```

## Contributing

Contributions are welcome! If you'd like to add new rules, suggest enhancements, or report issues, please open a pull request or issue on our [GitHub repository](https://github.com/shipsecure-labs/eslint-plugin-next).

### Steps to Contribute

<ol>
<li>Fork the repository.</li>
<li>Create a new branch for your feature (git checkout -b feature-name).</li>
<li>Make your changes and add tests.</li>
<li>Run tests to ensure everything works (npm test).</li>
<li>Push your branch and submit a pull request.</li>
</ol>

## License

This project is licensed under the MIT License - see the LICENSE file for details.
