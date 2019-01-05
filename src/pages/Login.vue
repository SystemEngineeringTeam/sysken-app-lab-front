<template>
  <div id="login">
    <h1>{{ message }}</h1>
    <router-link to="/user">Go to user</router-link>
    <router-link to="/lab">Go to lab</router-link>
  </div>
</template>

<script>
  export default {
    el: '#login',
    name: 'login',
    data() {
      return {
        message: "login",
      }
    }
  }
</script>

<style>

</style>
