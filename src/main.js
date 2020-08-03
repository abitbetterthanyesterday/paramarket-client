import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'

//Typed js for main page.
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')
