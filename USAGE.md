
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
```