module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    '@typescript-eslint/no-namespace': 0,
    'no-console': 0,
    'func-names': 0,
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 2,
    'react/self-closing-comp': 1,
  },
  // settings: {
  //   react: {
  //     pragma: 'React',
  //     version: '17.0.2',
  //   },
  // },
};
