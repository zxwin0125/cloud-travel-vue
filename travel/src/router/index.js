// 路由相关配置
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入对应路由
import Home from '../views/Home/Home.vue'
import Destination from '../views/Destination/Destination.vue'
import Destination_des from '../views/Destination/components/Destination_des.vue'
import Strategy from '../views/Strategy/Strategy.vue'
import Community from '../views/Community/Community.vue'
import Tickets from '../views/Tickets/Tickets.vue'
import DataView from '../views/DataView/DataView.vue'
import Users from '../views/Person/Users.vue'
import Login from '../views/Person/Login.vue'
import Register from '../views/Person/Register.vue'

// 使用路由
Vue.use(VueRouter)

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination,
    children: [
      {
        path: ':id',
        component: Destination_des
      }
    ]
  },
  {
    path: '/strategy',
    name: 'Strategy',
    component: Strategy
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/dataView',
    name: 'DataView',
    component: DataView
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/login',
    name: 'Login',
    components: { 
      default: Login,
      'header':null
    }
  },
  {
    path: '/register',
    name: 'Register',
    components: { 
      default: Register,
      'header':null
    }
  },
  {
    path:'*',
    redirect:'/home'
  } 
]

// 创建路由实例对象
const router = new VueRouter({
  mode: 'history', // 路由的路径方式 history不加#
  base: process.env.BASE_URL,
  routes
})

export default router
