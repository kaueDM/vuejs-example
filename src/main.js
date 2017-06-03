import Vue from 'vue'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import {
  routes
} from './routes'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(Toasted, {
  position: 'bottom-center'
})

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
