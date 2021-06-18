<!--
 * @Author: 徐庆凯
 * @Date: 2021-06-09 17:12:30
 * @LastEditTime: 2021-06-17 16:38:11
 * @LastEditors: 徐庆凯
 * @Description: 
 * @FilePath: /supervision-h5/src/views/index/Index.vue
 * 记得注释
-->
<template>
  <div class="index">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/channel" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script src="./Index.ts" lang="ts"></script>
<style lang="less" scoped>
.index {
  padding-bottom: 50px;
  :deep(.van-tabbar--fixed) {
    position: fixed !important;
  }
}
</style>
