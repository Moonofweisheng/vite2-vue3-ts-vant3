/*
 * @Author: 徐庆凯
 * @Date: 2021-06-11 10:12:12
 * @LastEditTime: 2021-06-17 17:33:20
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /supervision-h5/src/views/home/cmp/FlashCard.ts
 * 记得注释
 */
import SaleItem from '@/model/example/SaleItem'
import { Options, prop, Vue } from 'vue-class-component'

class Props {
  saleItem = prop({
    type: [SaleItem, Object],
    required: true,
    default: function () {
      return new SaleItem()
    }
  })
}

@Options({
  name: 'FlashCard',
  components: {}
})
export default class Home extends Vue.with(Props) {
  doClick() {
    this.$emit('click', this.saleItem.uuid)
  }
}
