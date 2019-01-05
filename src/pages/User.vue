<template>
  <div id="user">
    <h1>{{ message }}</h1>
    <router-link to="/lab">Go to lab</router-link>
    <router-link to="/login">Go to login</router-link>
  </div>
</template>

<script>
  export default {
    el: '#user',
    name: 'user',
    data() {
      return {
        message: "user",
      }
    }
  }
</script>

<style>

</style>
