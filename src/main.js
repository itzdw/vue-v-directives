import Vue from 'vue'
import app from './App.vue'
import zery from './index'

Vue.use(zery)

new Vue({
  el: '#app',
  render: h => h(app)
})
