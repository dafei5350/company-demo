import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vitePluginImport from 'vite-plugin-babel-import'

// https://vitejs.dev/config/
export default ({
  mode
}) => defineConfig({
  lintOnSave: false,
  configureWebpack: config => {
    if (import.meta.env === 'production') {
      // 为生产环境修改配置...
    } else {
      config.devtool = 'cheap-module-eval-source-map';
      config.mode = "development"
    }
  },

  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.vue', '.js', '.jsx', '.json']
  },
  base: mode === 'development' ? './' : (mode === 'beta' ? '//s.baidu.com/beta/xxx' : '//s.baidu.com/release/xxx'), // 静态资源路径配置
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost/......', // 凡是遇到 /api 路径的请求，都映射到 target 属性 
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') //重写api为空，则去掉
      }
    }
  }
})









// ,
//     vitePluginImport([{
//       libraryName: 'element-plus',
//       libraryDirectory: 'es',
//       style(name) {
//         return `element-plus/lib/theme-chalk/${name}.css`;
//       },
//     }])