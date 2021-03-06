import Vue from 'vue'
import App from './App.vue'
import mock from './mock-data.js'
import scriptures from './scripture-data.js'
import router from './router'

Vue.config.productionTip = false

let data= {
  persons: mock,
  scriptures: scriptures,
  ward:[]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
