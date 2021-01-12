import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import api from './services/api'
import Viewer from 'v-viewer'
import vuetify from './plugins/vuetify';


Vue.use(Viewer);
Vue.use(VueResource);
Vue.use(api);

Vue.config.productionTip = false
Vue.http.options.root = process.env.VUE_APP_SERVER

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
