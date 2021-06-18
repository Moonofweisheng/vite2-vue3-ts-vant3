/*
 * @Author: 徐庆凯
 * @Date: 2021-06-10 15:09:33
 * @LastEditTime: 2021-06-10 16:42:30
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /supervision-h5/.eslintrc.js
 * 记得注释
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console": "off",
    "no-debugger": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-namespace": "off",
    "no-inner-declarations": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": ["warn", {"singleQuote": true}] // 开启单引号
  },
  globals: {
    none: false
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
