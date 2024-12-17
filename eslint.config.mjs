import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginHooks from 'eslint-plugin-react-hooks'
import pluginRefresh from 'eslint-plugin-react-refresh'
import pluginReact from 'eslint-plugin-react'
import pluginJest from 'eslint-plugin-jest'
import pluginrn from '@react-native/eslint-plugin'
import pluginExpo from 'eslint-config-expo'
import eslintReactNative from 'eslint-plugin-react-native'
import { fixupPluginRules } from '@eslint/compat'

//react插件如果是jsx/runtime则就不需要在文件中导入"import React from 'react'"
// pluginReact.configs.flat['jsx-runtime'],
// pluginReact.configs.flat.recommended,
// pluginExpo: 这个插件不支持eslint9，等支持
//eslintReactNative:这个很久没维护了，也不支持eslint9，但是可以用fixupPluginRules转换
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
  //react插件如果是jsx/runtime则就不需要在文件中导入"import React from 'react'"
  // pluginReact.configs.flat['jsx-runtime'],
  pluginReact.configs.flat.recommended,
  pluginRefresh.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off'
    }
  },
  {
    plugins: {
      'react-hooks': pluginHooks
      // '@react-native': pluginrn
    },
    rules: {
      // 'react/react-in-jsx-scope': 'off',
      ...pluginHooks.configs.recommended.rules
    }
  },
  //jest
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
  //rn
  // {
  //   name: 'eslint-plugin-react-native',
  //   plugins: {
  //     'react-native': fixupPluginRules({
  //       rules: eslintReactNative.rules
  //     })
  //   },
  //   rules: {
  //     ...eslintReactNative.configs.all.rules
  //   }
  // }
)
