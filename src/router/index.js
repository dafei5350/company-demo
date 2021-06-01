import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/index'
import AboutMe from '@/views/about-me'
import Question from '@/views/question'

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
    },
    {
      path: '/about-me',
      name: '关于我们',
      component: AboutMe
    },
    {
      path: '/question',
      name: '常见问题',
      component: Question
    }
  ]
})

export default router