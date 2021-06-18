/*
 * @Author: 徐庆凯
 * @Date: 2021-06-09 16:54:50
 * @LastEditTime: 2021-06-10 17:36:20
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /supervision-h5/src/shims-vue.d.ts
 * 记得注释
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const _default: ComponentOptions
  export default _default
}

declare module '*.png'
declare type Nullable<T> = T | null // 空
declare module 'mockjs'
