import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
  SET_USER_INFO: 'SET_USER_INFO' // 用户信息
}

const state = { // 需要维护的状态
  isAutnenticated: false,  // 是否认证
  user_info: {}   // 存储用户信息
}

const getters = {
  isAutnenticated: state => state.isAutnenticated,
  user_info: 
  state => state.user_info
}

const mutations = {
  [types.SET_IS_AUTNENTIATED](state, isAutnenticated) {
    if (isAutnenticated)
      state.isAutnenticated = isAutnenticated
    else
      state.isAutnenticated = false
  },
  [types.SET_USER_INFO](state, user_info) {
    if (user_info)
      state.user_info = user_info
    else
      state.user_info = {}
  }
}

const actions = {
  setIsAutnenticated: ({ commit }, isAutnenticated) => {
    commit(types.SET_IS_AUTNENTIATED, isAutnenticated)
  },
  setUserInfo: ({ commit }, user_info) => {
    commit(types.SET_USER_INFO, user_info)
  },
  clearCurrentState: ({ commit }) => {
    commit(types.SET_IS_AUTNENTIATED, false)
    commit(types.SET_USER_INFO, null)
  }
}




export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
