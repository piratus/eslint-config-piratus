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
    'react/jsx-boolean-value': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-quotes': [2, 'double', 'avoidEscape'],
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
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
