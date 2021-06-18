/*
 * @Author: 徐庆凯
 * @Date: 2021-06-09 14:32:57
 * @LastEditTime: 2021-06-17 17:12:43
 * @LastEditors: 徐庆凯
 * @Description: vite配置
 * @FilePath: /supervision-h5/vite.config.js
 * 记得注释
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import pxtoviewport from 'postcss-px-to-viewport'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        pxtoviewport({
          viewportWidth: 375
        })
      ]
    }
  }
})
