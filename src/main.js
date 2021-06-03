import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from '@/router'
import i18n from '@/i18n'
// 自定义主题
import '~/theme/index.css'
// 基于断点的隐藏类
import 'element-plus/lib/theme-chalk/display.css';

const app = createApp(App) 
app.use(i18n)
   .use(ElementPlus)
   .use(router)
   .mount('#app')


