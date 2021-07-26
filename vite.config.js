const path = require('path')
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

function resolve(_path) {
  return path.resolve(__dirname, _path)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
      'comps': resolve('src/components'),
      'styles': resolve('src/styles'),
      'views': resolve('src/views'),
      'dirs': resolve('src/directives'),
      'routers': resolve('src/routers'),
      'utils': resolve('src/utils'),
      'assets': resolve('assets')
    }
  },
  plugins: [
    createVuePlugin()
  ],
  build: {
    lib: {
      entry: resolve('src/index.js'),
      name: 'vue-v-directives'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
