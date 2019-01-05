<template>
  <div id="lab">
    <h1>{{ message }}</h1>
    <router-link to="/user">Go to user</router-link>
    <router-link to="/login">Go to login</router-link>
  </div>
</template>

<script>
  export default {
    el: '#lab',
    name: 'lab',
    data() {
      return {
        message: "lab",
      }
    }
  }
</script>

<style>

</style>
