<template>
<div class="column">
  <h2 class="title has-text-centered">New User</h2>
  <form class="container is-fluid">
    <div class="field">
      <label class="label">Name</label>
      <p class="control">
        <input type="text" class="input" placeholder="John Doe" v-model="user.name">
      </p>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <p class="control">
        <input type="text" class="input" placeholder="john@email.com" v-model="user.email">
      </p>
    </div>
    <div class="field">
      <button class="button is-primary is-pulled-right" @click.prevent="addUser">
          Create New User
        </button>
    </div>
  </form>
</div>
</template>

<script>
import {
  database
} from '../../services/firebase/database'

export default {
  firebase: {
    userRef: database.ref('users')
  },
  data() {
    return {
      user: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    addUser() {
      this.$firebaseRefs.userRef.push(this.user)
        .then(() => {
          const successToast = this.$toasted.show(`User ${this.user.name} (${this.user.email}) Registered!`);
          successToast.goAway(1500);
          this.user.name = '';
          this.user.email = '';
        })
        .catch(() => {
          const errorToast = this.$toasted.show('Error registering this user.');
          errorToast.goAway(1500);
        })
    }
  }
}
</script>
