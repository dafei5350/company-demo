import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'

import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

locale.use(lang)
import { 
  ElHeader,
  ElMain,
  ElContainer,
  ElFooter, 
  ElButton,
  ElInput,
  ElCarousel,
  ElCarouselItem,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElTabPane,
  ElTabs,
} from 'element-plus'

const components = [
  ElHeader,
  ElMain,
  ElContainer,
  ElFooter, 
  ElButton,
  ElInput,
  ElCarousel,
  ElCarouselItem,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElTabPane,
  ElTabs,
]
const plugins = [

]
// 自定义主题
import '~/theme/index.css'
// 基于断点的隐藏类
import 'element-plus/lib/theme-chalk/display.css';

// createApp(App).use(router, ElementPlus).mount('#app')

const app = createApp(App)
app.use(router)
components.forEach(component => {
  app.component(component.name, component)
})
plugins.forEach(plugin => {
  app.use(plugin)
})

app.mount('#app')

if( import.meta.env.MODE == "development") {
  app.config.devtools = true
} else{
  app.config.devtools = false
}

console.log(import.meta.env.MODE);