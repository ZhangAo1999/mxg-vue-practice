import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login/index'
import Login from '@/views/login' // 如果是有index.vue的话，可以省略不用写，就能自动找到。
import Layout from '@/components/Layout'
import Home from '@/views/home'
import Member from '@/views/member'
import Supplier from '@/views/supplier'
import Goods from '@/views/goods'
import Staff from '@/views/staff'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login', //路由名称
    component: Login //组件对象
  },
  {
    path: '/',
    name: 'layout', //路由名称
    component: Layout, //组件对象
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        meta: {title: '首页'}
      },
      // {
      //   path: '/member',
      //   component: Member
      // }
    ]
  },
  {
    path: '/member',
    component: Layout,
    children: [
      {
        path: '/', // /member/
        component: Member,
        meta: {title: '会员管理'}
      }
    ]
  },
  {
    path: '/supplier',
    component: Layout,
    children: [
      {
        path: '/', 
        component: Supplier,
        meta: {title: '供应商管理'}
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    children: [
      {
        path: '/', 
        component: Goods,
        meta: {title: '商品管理'}
      }
    ]
  },
  {
    path: '/staff',
    component: Layout,
    children: [
      {
        path: '/', 
        component: Staff,
        meta: {title: '员工管理'}
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
