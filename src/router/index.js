import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/index.vue'
import AboutMe from '@/views/about-me.vue'
import Pro from '@/views/product-fx.vue'

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
	  path: '/product-fx',
	  name: '外汇',
	  component: Pro
	}
  ]
})

export default router