/*
 * @Author: 徐庆凯
 * @Date: 2021-06-09 17:12:30
 * @LastEditTime: 2021-06-10 16:15:45
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /supervision-h5/src/views/cart/Cart.ts
 * 记得注释
 */
import { ref } from 'vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
  setup() {
    const test = ref(0)
    return test
  }
})
export default class Cart extends Vue {
  active: number = 0
}
