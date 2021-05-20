import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
var VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false
Vue.use(VueScrollTo)
new Vue({
  render: h => h(App),
}).$mount('#app')
