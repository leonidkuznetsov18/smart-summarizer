module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
  rules: {
    // TS
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/naming-convention': 0,

    // React
    'react-hooks/exhaustive-deps': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-curly-spacing': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0, // Since we do not use prop-types

    // jsx-a11y
    'jsx-a11y/anchor-is-valid': 0,

    // Default
    'no-else-return': 'off',
    'linebreak-style': 0,
    'object-curly-spacing': [2, 'always'],
    'no-debugger': 0,

    // Prettier
    'prettier/prettier': [
      2,
      {
        bracketSameLine: true,
        plugins: ['@ianvs/prettier-plugin-sort-imports'],
        importOrder: [
          '<BUILTIN_MODULES>', // Node.js built-in modules
          '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
          '', // Empty line
          '^@plasmo/(.*)$',
          '',
          '^@plasmohq/(.*)$',
          '',
          '^~(.*)$',
          '',
          '^[./]',
        ],
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        printWidth: 80,
        bracketSpacing: true,
        useTabs: false,
        cssEnable: ['css', 'scss'],
        javascriptEnable: ['javascript', 'javascriptreact'],
        typescriptEnable: ['typescript', 'typescriptreact'],
      },
    ],
  },
};
