import { createApp } from 'vue'
import { ElButton } from 'element-plus'
import App from './App.vue'
import router from '@/router'
import i18n from '@/i18n'
// 自定义主题
import '~/theme/index.css'
// 基于断点的隐藏类
import 'element-plus/lib/theme-chalk/display.css';

const app = createApp(App) // 生成 Vue 实例 app

app.use(router) // 引用路由实例

app.use(ElButton)
app.use(i18n)
app.mount('#app') // 挂载到 #app
