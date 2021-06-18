import { createStore } from 'vuex'

export interface State {
  userInfo: Nullable<string> // 用户信息
}

export default createStore<State>({
  state: {
    userInfo: null
  },
  mutations: {},
  actions: {},
  modules: {}
})
