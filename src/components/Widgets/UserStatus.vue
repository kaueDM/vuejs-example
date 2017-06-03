<template>
<nav class="level" style="margin-top: 10px">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Registered Users</p>
      <p class="title">
        <span class="has-text-centered">{{ userRef.length }}</span>
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Daily Views</p>
      <p class="title">224K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Monthly Views</p>
      <p class="title"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></p>
    </div>
  </div>
</nav>
</template>

<script>
import {
  database
} from '../../services/firebase/database'

export default {
  firebase: {
    userRef: database.ref('users')
  }
}
</script>
