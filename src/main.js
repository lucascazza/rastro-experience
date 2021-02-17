import Vue from 'vue'
import VueResource from 'vue-resource'
import Token from './services/token'
import router from './router'
import store from './store'
import api from './services/api'
import Viewer from 'v-viewer'
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import toastr from 'toastr'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Viewer);
Vue.use(VueResource);
Vue.use(Token);
Vue.use(api);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.http.options.root = process.env.VUE_APP_SERVER

// Config toastr alert
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

Vue.prototype.$toastr = toastr

if (process.env.NODE_ENV === "development") {
  // Estamos en modo desarrollo
  console.log("Modo desarrollo");
} else {
  // En producción
  console.log("Modo producción");
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
