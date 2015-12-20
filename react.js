/* eslint-env node */
const merge = require('lodash.merge')
const baseConfig = require('./base.js')


module.exports = merge(baseConfig, {
  ecmaFeatures: {
    jsx: true,
  },
  plugins: ['babel', 'react'],
  rules: {
    'jsx-quotes': [2, 'prefer-double'],

    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,

    'react/jsx-no-bind': 2,
    'react/jsx-no-undef': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,

    'react/sort-comp': [2, {
      'order': [
        'lifecycle',
        'everything-else',
        'handlers',
        'renderers',
      ],
      'groups': {
        'lifecycle': [
          'displayName',
          'mixins',
          'propTypes',
          'defaultProps',
          'getDefaultProps',
          'getInitialState',
          'contextTypes',
          'childContextTypes',
          'constructor',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
        'handlers': [
          '/^handle.+$/',
        ],
        'renderers': [
          '/^render.+$/',
          'render',
        ],
      },
    }],
  },
})
