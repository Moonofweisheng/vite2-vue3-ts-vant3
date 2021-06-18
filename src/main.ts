/*
 * @Author: 徐庆凯
 * @Date: 2021-06-09 14:32:57
 * @LastEditTime: 2021-06-10 17:19:24
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /supervision-h5/src/main.ts
 * 记得注释
 */
import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import Mock from './mock/mock'
createApp(App).use(store).use(router).use(Mock).mount('#app')
