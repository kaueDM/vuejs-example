<template>
<div>
  <nav class="level" style="margin-top: 10px">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Free Users</p>
        <p class="title"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Premium Users</p>
        <p class="title"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Daily Views</p>
        <p class="title"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Monthly Views</p>
        <p class="title"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></p>
      </div>
    </div>
  </nav>

  <div class="columns">

    <a class="button is-info is-outlined" style="width: 80%; margin-left: 10%" @click="fetchUsers">
        Fetch Users
      </a>

    <span v-if="isVisible">
        <h3>Users List</h3>
      </span>

    <a class="button is-success" @click="addItem">Add Item</a>

  </div>

  <div class="column" style="background-color: lightgreen">
    2
  </div>
</div>
</div>
</template>

<script>
import {
  database
} from '../../services/firebase/database'

export default {
  firebase: {
    user: database.ref('users')
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    fetchUsers() {
      this.isVisible = !this.isVisible;
    },
    addItem() {
      this.$firebaseRefs.user.push({
        name: 'John',
        email: 'john@test.com'
      }).then((response) => {
        console.log('Success! ', response.key)
      }, (err) => {
        console.log('Error! ', err)
      })
    }
  }
}
</script>
