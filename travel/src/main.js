import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入 animate.css
import animate from 'animate.css'

// 使用 element-ui
Vue.use(ElementUI)
// 使用 animate.css
Vue.use(animate)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
