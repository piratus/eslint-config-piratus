/*eslint-env node */
const merge = require('lodash.merge');
const baseConfig = require('./base.js');


module.exports = merge(baseConfig, {
  ecmaFeatures: {
    jsx: true
  },
  plugins: ['react'],
  rules: {
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-curly-spacing': [2, "never", {'allowMultiline': false}],
    'react/jsx-indent-props': 0,
    'react/jsx-max-props-per-line': [1, {'maximum': 3}],
    'react/jsx-no-bind': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-quotes': [2, 'double', 'avoidEscape'],
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 2,
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 2,

    'react/sort-comp': [2, {
      order: [
        'lifecycle',
        'everything-else',
        'handlers',
        'renderers'
      ],
      groups: {
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
          'componentWillUnmount'
        ],
        'handlers': [
          '/^on.+$/',
          '/^handle.+$/'
        ],
        'renderers': [
          '/^render.+$/',
          'render'
        ]
      }
    }]
  }
});
