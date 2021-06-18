/*
 * @Author: 徐庆凯
 * @Date: 2021-06-09 17:13:20
 * @LastEditTime: 2021-06-10 17:39:27
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /supervision-h5/src/mock/mock.ts
 * 记得注释
 */
/*
 * @Author: 徐庆凯
 * @Date: 2021-06-09 17:13:20
 * @LastEditTime: 2021-06-10 17:31:55
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /supervision-h5/src/mock/mock.ts
 * 记得注释
 */
import Mock from 'mockjs'
import BaseResponse from '@/model/common/BaseResponse'
import HomeInit from '@/model/example/HomeInit'
import SaleItem from '@/model/example/SaleItem'
import GoodsInfo from '@/model/example/GoodsInfo'
import rou from '@/assets/img/img_rou.png'
import haichan from '@/assets/img/img_haichan.png'
import shuiguo from '@/assets/img/img_shuiguo.png'
import hongbei from '@/assets/img/img_hongbei.png'
import sushi from '@/assets/img/img_sushi.png'
import yinliao from '@/assets/img/img_yinliao.png'
import kuaishou from '@/assets/img/img_kuaishou.png'
import shucai from '@/assets/img/img_shucai.png'

const Random = Mock.Random

/**
 * 使用mockjs进行拦截请求模拟数据，具体使用方法可至http://mockjs.com/进行查看
 */

/**
 * 获取首页信息
 */
const getInit = function () {
  const resp = new BaseResponse()
  const data: HomeInit = new HomeInit()
  data.channelList = [
    { txt: '蔬菜豆制品', image: shucai },
    { txt: '肉禽蛋', image: rou },
    { txt: '水产海鲜', image: haichan },
    { txt: '水果', image: shuiguo },
    { txt: '乳品烘焙', image: hongbei },
    { txt: '速食冻品', image: sushi },
    { txt: '酒饮零食', image: yinliao },
    { txt: '快手菜', image: kuaishou }
  ]
  data.swipeList = [
    'https://www.missfresh.cn/img/home/home_img.jpg',
    'https://www.missfresh.cn/img/home/hao_img_3.jpg',
    'https://www.missfresh.cn/img/home/hao_img_2.jpg',
    'https://www.missfresh.cn/img/home/hao_img_1.jpg'
  ]
  for (let i = 0; i < 10; i++) {
    const item: SaleItem = new SaleItem()
    item.image = 'https://img.yzcdn.cn/vant/cat.jpeg'
    item.name = Random.cname() + '瓜' + Random.string('number', 3) + 'g'
    item.uuid = Random.string('number', 10)
    item.description = Random.cparagraph(10)
    data.flashSale.saleList.push(item)
  }
  data.flashSale.time = 3600000
  resp.code = 200
  resp.data = data
  resp.fields = '你嘿嘿嘿嘿嘿'
  resp.more = true
  resp.msg = '事实上事实上'
  resp.success = true
  resp.total = Random.natural(60, 100)
  return resp
}

/**
 * 获取商品详细信息
 */
const getGoodsInfo = function () {
  const resp = new BaseResponse()
  const data: GoodsInfo = new GoodsInfo()
  data.code = Random.string('number', 10)
  data.weight = Random.string('number', 3) + 'g'
  data.oldPrice = Random.natural(60, 100)
  data.newPrice = data.oldPrice - Random.natural(1, 10)
  data.name = Random.cname() + Random.cname() + Random.cname() + '果'
  data.description = '趁热吃更好吃哦~~~'
  data.swipeList = [
    'https://www.missfresh.cn/img/home/home_img.jpg',
    'https://www.missfresh.cn/img/home/hao_img_3.jpg',
    'https://www.missfresh.cn/img/home/hao_img_2.jpg',
    'https://www.missfresh.cn/img/home/hao_img_1.jpg'
  ]
  resp.code = 200
  resp.data = data
  resp.fields = '你嘿嘿嘿嘿嘿'
  resp.more = true
  resp.msg = '事实上事实上'
  resp.success = true
  resp.total = Random.natural(60, 100)
  return resp
}
Mock.mock(/\/example\/getInit/, getInit)
Mock.mock(/\/example\/getGoodsInfo/, getGoodsInfo)
export default Mock
