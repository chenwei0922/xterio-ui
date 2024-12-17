
# 概述

## 运行项目

## 安装项目木注意

## 参与贡献须知

## 新建分支

## 创建文件须知

## 组件命名规范
- `components`目录下新建文件夹，文件夹名称采用`PascalCase` 大驼峰命名，比如`Button`。
- 添加组件导出语句到 `components/index.ts` 文件
- 组件名以`X`开头，导出为默认。

## 更新本地缓存资源

## 本地联调

## 提交与发布代码

## 代码规范
`npm init @eslint/config@latest`

- eslint: `@eslint/js eslint`
- ts: `typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser`
- prettier: `prettier eslint-config-prettier eslint-plugin-prettier`
- rn: `@react-native/eslint-config`
- react: `eslint-plugin-react eslint-plugin-react-refresh eslint-plugin-react-hooks`
- promise `eslint-plugin-promise`

```bash
npm install --save-dev husky
npx husky init

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

npm install --save-dev lint-staged

@commitlint/cli  @commitlint/config-conventional
```


"devDependencies": {
    "@babel/core": "^7.25.2",
    "@commitlint/cli": "^19.6.1",
    "@commitlint/config-conventional": "^19.6.0",
    "@eslint/js": "^9.16.0",
    "@react-native/eslint-config": "^0.76.5",
    "@types/jest": "^29.5.12",
    "@types/react": "~18.3.12",
    "@types/react-test-renderer": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^8.18.0",
    "@typescript-eslint/parser": "^8.18.0",
    "eslint": "^9.9.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-promise": "^6.6.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.13.0",
    "husky": "^9.1.7",
    "jest": "^29.2.1",
    "jest-expo": "~52.0.2",
    "lint-staged": "^15.2.11",
    "prettier": "^3.4.2",
    "react-test-renderer": "18.3.1",
    "typescript": "^5.3.3",
    "typescript-eslint": "^8.18.0"
  },


  // https://docs.expo.dev/guides/using-eslint/
eslint-config-expo
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  ignorePatterns: ["/dist/*", "app-example/**/*"],
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  rules: {
    // 'prettier/prettier': 'error'
  },
};
