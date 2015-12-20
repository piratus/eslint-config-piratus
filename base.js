/* eslint-env node */
module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  extends: 'eslint:recommended',
  ecmaFeatures: {
    modules: true,
  },
  env: {
    es6: true,
  },
  rules: {
    'camelcase': [2, {'properties': 'always'}],
    'comma-dangle': [1, 'always-multiline'],
    'curly': [2, 'all'],
    'semi': [2, 'never'],
    'quotes': [2, 'single'],

    'no-var': 2,
    'no-unexpected-multiline': 2,
    'no-spaced-func': 2,

    'babel/generator-star-spacing': 2,
    'babel/new-cap': 2,
    'babel/object-curly-spacing': 2,
    'babel/object-shorthand': 2,
    'babel/arrow-parens': 2,
    'babel/no-await-in-loop': 2,
  },
}
