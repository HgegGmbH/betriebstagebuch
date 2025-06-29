// main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// 🔥 Das ist die wichtige Zeile:
window.store = store

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
