<template>
<div>
  <nav class="nav has-shadow">
    <div class="nav-left">
      <span class="nav-item animated rubberBand">
        <img src="../../assets/logo.png" alt="VueJS Logo">
        VueJS Example
      </span>
    </div>

    <div class="nav-center">
      <a href="https://github.com/kaueDM/vuejs-example" target="_blank" class="nav-item">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
    </div>

    <div class="nav-right">
      <router-link to="/" class="nav-item" tag="li" active-class="is-active" exact><a>Home</a></router-link>
      <router-link to="/users" class="nav-item" tag="li" active-class="is-active"><a>Users</a></router-link>
    </div>
  </nav>
</div>
</template>

<script>
export default {}
</script>
