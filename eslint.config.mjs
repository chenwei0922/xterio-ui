import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginHooks from 'eslint-plugin-react-hooks'
import pluginRefresh from 'eslint-plugin-react-refresh'
import pluginReact from 'eslint-plugin-react'
import pluginJest from 'eslint-plugin-jest'

export default tseslint.config(
  {
    ignores: ['**/dist/**', 'app-example/**/*']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginRefresh.configs.recommended,
  {
    plugins: {
      'react-hooks': pluginHooks
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      ...pluginHooks.configs.recommended.rules
    }
  },
  {
    // update this to match your test files
    files: ['**/*.spec.js', '**/*.test.js'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals
    },
    rules: {
      // 'jest/no-disabled-tests': 'warn',
      // 'jest/no-focused-tests': 'error',
      // 'jest/no-identical-title': 'error',
      // 'jest/prefer-to-have-length': 'warn',
      // 'jest/valid-expect': 'error'
    }
  }
)
