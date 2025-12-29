import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

const baseJsRules = {
  eqeqeq: 'error',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'no-duplicate-imports': 'error',
  'no-eval': 'error',
  'no-fallthrough': 'error',
  'no-implied-eval': 'error',
  'no-unreachable': 'error',
  'prefer-const': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
};

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'astro/no-set-html-directive': 'warn',
      'astro/no-unused-css-selector': 'error',
      'astro/prefer-class-list-directive': 'warn',
      ...baseJsRules,
    },
  },
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...baseJsRules,
    },
  },
];
