import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginReact from 'eslint-plugin-react'
import pluginRN from '@react-native/eslint-config'

export default tseslint.config(
  {
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      pluginPrettier
      // pluginRN
      // pluginReact.configs['flat/essential'],
      // '@react-native'
    ]
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    plugins: {
      '@react-native': pluginRN,
      react: pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    }
  },
  {
    rules: {
      // ...reactHooks.configs.recommended.rules,
      // '@typescript-eslint/no-var-requires': 'off',
      // '@typescript-eslint/no-unused-vars': 'off',
      // '@typescript-eslint/no-explicit-any': 'off',
      // 'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
      // 'react-hooks/exhaustive-deps': 'warn'
    }
  }
)
