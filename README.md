# My ESLint config

This is a set of Javascript style configs for [ESLint][eslint_home] I use in my everyday JavaScript programming. Comes in standard and React/JSX sets of rules.

## Installing

```bash
npm install --save-dev eslint babel-eslint @piratus/eslint-config-piratus
```

To use React/JSX rules a plugin `eslint-plugin-react` is also required:

```bash
npm install --save-dev eslint-plugin-react
```

## Using

To use the config, add an `"extends"` section to your `.eslintrc` file:

```json
"extends": "@piratus/eslint-config-piratus"
```

To use React/JSX version of config use:

```json
"extends": "@piratus/eslint-config-piratus/react"
```

*You can learn more about [shareable configs][docs_link] on the official ESLint website*

[eslint_home]: http://eslint.org/
[docs_link]: http://eslint.org/docs/developer-guide/shareable-configs
