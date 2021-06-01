import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Index from '@/views/index'
import AboutMe from '@/views/about-me'
import Question from '@/views/about-question'
import Supervise from '@/views/about-supervise'
import Notice from '@/views/about-notice'
import Contact from '@/views/about-contact'

import ProductForex from '@/views/product-forex'
import ProductIndex from '@/views/product-index'
import ProductMetal from '@/views/product-metal'

import PlatformMt4 from '@/views/platform-mt4'
import PlatformMt5 from '@/views/platform-mt5'

import NewsAnalysis from '@/views/news-analysis'
import NewsLetters from '@/views/news-letters'

import CoopIB from '@/views/coop-ib'
import CoopIntem from '@/views/coop-intem'
import CoopAgent from '@/views/coop-agent'

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
      path: '/product-meta',
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