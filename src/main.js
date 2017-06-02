import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import {
  routes
} from './routes'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueFire)

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
