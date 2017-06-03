<template>
<div>
  <app-status />
  <hr>
  <div class="columns">
    <app-user-new />
    <div class="column">
      <h2 class="title has-text-centered">Users List</h2>
      <h6 class="subtitle has-text-centered">Click To Remove</h6>
      <ul>
        <li v-for="item in userRef" class="user-li" @click="removeUser(item['.key'])">
          {{ item.name }} <small>({{ item.email }})</small>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import UserStatus from '../Widgets/UserStatus.vue'
import UserNew from './UserNew.vue'
import {
  database
} from '../../services/firebase/database'

export default {
  components: {
    AppStatus: UserStatus,
    AppUserNew: UserNew
  },
  firebase: {
    userRef: database.ref('users')
  },
  methods: {
    removeUser(key) {
      this.$firebaseRefs.userRef.child(key).remove()
    }
  }
}
</script>

<style>
.user-li {
  margin-top: 10px;
  border-bottom: 1px #ccc solid;
  padding: 2px;
  cursor: pointer;
}
</style>
