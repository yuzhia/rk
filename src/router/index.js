import { createRouter, createWebHistory } from 'vue-router'

// 路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/chapter',
    name: 'chapter',
    component: () => import('@/views/chapter.vue'),
    meta: { title: '章节' }
  },
  {
    path: '/paper',
    name: 'paper',
    component: () => import('@/views/paper.vue'),
    meta: { title: '真题' }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine.vue'),
    meta: { title: '我的' }
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('@/views/question.vue'),
    meta: { title: '题目' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true
  }
  // { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true }
]

// 路由器
const router = createRouter({
  history: createWebHistory(), // HTML5模式
  routes
})

export default router

export function resetRouter() {
  const newRouter = createRouter({
    history,
    routes
  })
  router.matcher = newRouter.matcher // reset router
}
