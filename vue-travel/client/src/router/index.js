import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由
import Home from '../views/Home/Home.vue'
import DataVisualization from '../views/DataVisualization/DataVisualization.vue'
import Users from '../views/User/Users.vue'
import Login from '../views/User/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isturn: true
    }
  },
  {
    path: '/dataVisualization',
    name: 'DataVisualization',
    components: {
      default: DataVisualization,
      'header': null
    },
    meta: {
      isturn: true
    }
  },
  {
    path: '/users',
    name: 'Users',
    components: {
      default: Users,
      'header': null
    },
    meta: {
      isturn: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      default: Login,
      'header': null
    }
  },
  {
    path: '*',
    redirect: '/home'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router