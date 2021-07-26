import Vue from 'vue'
import app from './App.vue'
import directives from './index'

Vue.use(directives)

new Vue({
  el: '#app',
  render: h => h(app)
})
