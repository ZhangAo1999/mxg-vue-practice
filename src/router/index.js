import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login/index'
import Login from '@/views/login' // 如果是有index.vue的话，可以省略不用写，就能自动找到。

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login', // 路由名称
    component: Login // 组件对象
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
