<template>
<div id="app">
  <app-header />
  <router-view />
</div>
</template>

<script>
import Header from './components/_common/Header.vue'
export default {
  components: {
    appHeader: Header
  }
}
</script>
