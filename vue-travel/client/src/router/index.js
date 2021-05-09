import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由
import Home from '../views/Home/Home.vue'

import Destination from '../views/Destination/Destination.vue'
import des_lj from '../views/Destination/components/des_lj.vue'
import des_km from '../views/Destination/components/des_km.vue'
import des_xgll from '../views/Destination/components/des_xgll.vue'
import des_xsbn from '../views/Destination/components/des_xsbn.vue'

import Strategy from '../views/Strategy/Strategy.vue'
import StrategyDetail from '../views/Strategy/StrategyDetail.vue'

import Community from '../views/Community/Community.vue'

import Tickets from '../views/Tickets/Tickets.vue'
import Tickets_pay from '../views/Tickets/Tickets_pay.vue'

import DataVisualization from '../views/DataVisualization/DataVisualization.vue'

import Users from '../views/User/Users.vue'
import Login from '../views/User/Login.vue'
import Register from '../views/User/Register.vue'

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
    path: '/destination',
    name: 'Destination',
    components: {
      default: Destination,
      'header': null
    },
    children: [
      {
        path: 'lj',
        name: 'des_lj',
        component: des_lj,
        meta: {
          isturn: true
        }
      },
      {
        path: 'km',
        name: 'des_km',
        component: des_km,
        meta: {
          isturn: true
        }
      },
      {
        path: 'xgll',
        name: 'des_xgll',
        component: des_xgll,
        meta: {
          isturn: true
        }
      },
      {
        path: 'xsbn',
        name: 'des_xsbn',
        component: des_xsbn,
        meta: {
          isturn: true
        }
      }
    ],
    meta: {
      isturn: true
    }
  },
  {
    path: '/strategy',
    name: 'Strategy',
    components: {
      default: Strategy,
      'header': null
    },
    children: [
      {
        path: 'detail',
        name: 'detail',
        components: StrategyDetail
      }
    ],
    meta: {
      isturn: true
    }
  },
  {
    path: '/community',
    name: 'Community',
    components: {
      default: Community,
      'header': null
    },
    meta: {
      isturn: true
    }
  },
  {
    path: '/tickets',
    name: 'Tickets',
    components: {
      default: Tickets,
      'header': null
    },
    meta: {
      isturn: true, // 表示这个路由需要导航和底部
      isLogin: true // 表示进入这个路由需要登录
    }
  },
  {
    path: '/tickets/tickets_pay',
    name: 'Tickets_pay',
    components: {
      default: Tickets_pay,
      'header': null
    },
    meta: {
      isturn: true, // 表示这个路由需要导航和底部
      isLogin: true // 表示进入这个路由需要登录
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
      isturn: true,
      isLogin: true
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
    path: '/register',
    name: 'Register',
    components: {
      default: Register,
      'header': null
    }
  },
  {
    path: '*',
    redirect: '/'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router