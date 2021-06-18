/*
 * @Author: 徐庆凯
 * @Date: 2021-06-09 16:58:11
 * @LastEditTime: 2021-06-17 17:33:41
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /supervision-h5/src/router/index.ts
 * 记得注释
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress' // 顶部进度条
import 'nprogress/nprogress.css' // 进度条样式
NProgress.configure({ showSpinner: false }) // 禁用加载动画

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "about" */ '@/views/index/Index.vue'),
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: '/channel',
        name: 'Channel',
        meta: {
          title: '分类'
        },
        component: () => import('@/views/channel/Channel.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        meta: {
          title: '购物车'
        },
        component: () => import('@/views/cart/Cart.vue')
      },
      {
        path: '/mine',
        name: 'Mine',
        meta: {
          title: '我的'
        },
        component: () => import('@/views/mine/Mine.vue')
      }
    ]
  },
  {
    path: '/goodsDetail',
    name: 'GoodsDetail',
    component: () => import('@/views/goodsDetail/GoodsDetail.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  return next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
