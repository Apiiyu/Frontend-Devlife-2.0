import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';

// Css
import 'vuesax/dist/vuesax.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import '@/assets/css/style.css'
import '@/assets/css/components.css'
import '@/assets/css/custom.css'

import 'jquery-ui-dist/jquery-ui';
import 'jquery-ui-dist/jquery-ui.css';

// Javascript
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuesax)
window.axios = require('axios')
window.$ = window.jQuery = require('jquery');
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
