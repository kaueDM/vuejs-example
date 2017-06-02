import Home from './components/Home.vue'
import User from './components/User/User.vue'
import UserIndex from './components/User/UserIndex.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/users', component: User }
]
