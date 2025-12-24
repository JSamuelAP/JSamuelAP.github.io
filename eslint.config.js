import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro', '**/*.ts', '**/*.js'],
    processor: 'astro/client-side-ts',
    rules: {
      'astro/prefer-class-list-directive': 'warn',
      'astro/no-set-html-directive': 'warn',
      'astro/no-unused-css-selector': 'error',
      eqeqeq: 'error',
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'error',
      'no-eval': 'error',
      'no-fallthrough': 'error',
      'no-implied-eval': 'error',
      'no-unreachable': 'error',
      'no-unused-vars': 'error',
    },
  },
];
