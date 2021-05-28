import { createApp } from 'vue'

import router from '@/router'
import { ElButton } from 'element-plus'
import App from './App.vue'


// import 'element-plus/lib/theme-chalk/index.css';
// 自定义主题
import '~/theme/index.css'
// 基于断点的隐藏类
import 'element-plus/lib/theme-chalk/display.css';

// createApp(App).use(router, ElementPlus).mount('#app')

const app = createApp(App)

app.use(router)

app.use(ElButton)

app.mount('#app')