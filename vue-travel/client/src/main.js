import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as echarts from 'echarts';

// 使用 axios、echarts
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false




// 引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

// 使用 element-ui
Vue.use(ElementUI)

// 添加路由守卫
// 路由拦截, 拦截全部路由，每次操作路由都是被拦截进行判断
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('eleToken')
  // 筛选需要传token的页面, 匹配router里面需要登录的路径，如果匹配到就是true
  if (to.matched.some(res => res.meta.isLogin)) { // 判断是否需要登录
    if (token) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
