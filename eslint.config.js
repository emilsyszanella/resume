import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          // Allow PascalCase vars (React components) AND 'motion' / 'AnimatePresence' (framer-motion JSX namespace)
          varsIgnorePattern: '^([A-Z_]|motion|AnimatePresence)',
          // Ignore unused destructured vars when there is a rest sibling (e.g. prop-stripping in tests)
          ignoreRestSiblings: true,
        },
      ],
    },
  },
])
