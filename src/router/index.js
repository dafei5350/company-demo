import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Index from '@/views/index.vue'
import AboutMe from '@/views/about-me.vue'
import Question from '@/views/about-question.vue'
import Supervise from '@/views/about-supervise.vue'
import Notice from '@/views/about-notice.vue'
import Contact from '@/views/about-contact.vue'

import ProductForex from '@/views/product-forex.vue'
import ProductIndex from '@/views/product-index.vue'
import ProductMetal from '@/views/product-metal.vue'

import PlatformMt4 from '@/views/platform-mt4.vue'
import PlatformMt5 from '@/views/platform-mt5.vue'

import NewsAnalysis from '@/views/news-analysis.vue'
import NewsLetters from '@/views/news-letters.vue'
import NewsMain from '@/views/news-main.vue'

import CoopIB from '@/views/coop-ib.vue'
import CoopIntem from '@/views/coop-intem.vue'
import CoopAgent from '@/views/coop-agent.vue'

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [{
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
      path: '/about-question',
      name: '常见问题',
      component: Question
    },
    {
      path: '/about-supervise',
      name: '监管信息',
      component: Supervise
    },
    {
      path: '/about-notice',
      name: '公告',
      component: Notice
    },
    {
      path: '/about-contact',
      name: '联系我们',
      component: Contact
    },
    {
      path: '/product-forex',
      name: '外汇',
      component: ProductForex
    },
    {
      path: '/product-index',
      name: '指数',
      component: ProductIndex
    },
    {
      path: '/product-metal',
      name: '贵金属',
      component: ProductMetal
    },
    {
      path: '/platform-mt4',
      name: 'MT4平台',
      component: PlatformMt4
    },
    {
      path: '/platform-mt5',
      name: 'MT5-平台',
      component: PlatformMt5
    },
    {
      path: '/news-analysis',
      name: '市场分析',
      component: NewsAnalysis
    },
    {
      path: '/news-letters',
      name: '市场快报',
      component: NewsLetters
    },
	{
		path: '/news-main',
		name: '市场内容',
		component: NewsMain
	},
    {
      path: '/coop-ib',
      name: 'IB代理计划',
      component: CoopIB
    },
    {
      path: '/coop-intem',
      name: '国际合作',
      component: CoopIntem
    },
    {
      path: '/coop-agent',
      name: '区域代理',
      component: CoopAgent
    }
  ]
})

export default router