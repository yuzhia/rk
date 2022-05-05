import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import'

// 引入文件
const path = require('path')

export default () => {
  // const envConfig = loadEnv(mode, process.cwd()).VITE_APP_BASE_API
  // console.log(envConfig)
  return defineConfig({
    server: {
      // host: '0.0.0.0',
      port: 32001,
      open: false,
      // 代理
      proxy: {
        '/dev-api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/dev-api/, '')
        }
      }
    },
    // 别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    define: {
      'process.env': {}
    },
    // base: loadEnv(mode, process.cwd()).VITE_APP_BASE_API,
    plugins: [
      vue(),
      // vant
      createStyleImportPlugin({
        resolves: [VantResolve()]
      })
    ]
  })
}
