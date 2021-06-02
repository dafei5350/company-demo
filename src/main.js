import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import VueI18n from 'vue-i18n'

// 自定义主题
import '~/theme/index.css'
// 基于断点的隐藏类
import 'element-plus/lib/theme-chalk/display.css';


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
// app.use(VueI18n)
app.mount('#app')


