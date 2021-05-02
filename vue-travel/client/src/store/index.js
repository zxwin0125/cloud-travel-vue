import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
  SET_USER: 'SET_USER' // 用户信息
}

const state = { // 需要维护的状态
  isAutnenticated: false,  // 是否认证
  user_info: {}   // 存储用户信息
}

const getters = {
  isAutnenticated: state => state.isAutnenticated,
  user_info: state => state.user_info
}



export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
