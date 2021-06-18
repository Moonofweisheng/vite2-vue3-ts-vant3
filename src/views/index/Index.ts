/*
 * @Author: 徐庆凯
 * @Date: 2021-06-09 17:12:30
 * @LastEditTime: 2021-06-10 17:54:18
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /supervision-h5/src/views/index/Index.ts
 * 记得注释
 */
import { Options, Vue } from 'vue-class-component'
import { Tabbar, TabbarItem } from 'vant'

@Options({
  components: {
    [TabbarItem.name]: TabbarItem,
    [Tabbar.name]: Tabbar
  }
})
export default class Index extends Vue {}
