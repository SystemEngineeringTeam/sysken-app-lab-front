<template>
  <div id="login">
    <h1>ログインページ</h1>
    email:<input type="email"><br>
    password:<input type="password"><br>
    <h1><button type="submit">ログインする</button></h1>
    <router-link to="/user">userページへ</router-link>
    <router-link to="/lab">labページへ</router-link>
  </div>
</template>

<script>
  export default {
    el: "#login",
    name: 'login',
    data() {
      return {

      }
    },
    /*created() {
      /*axios.get(GET_URL)
        .then(response => {
          this.json_data = response;
          this.name = response.data.name;
          this.age = response.data.age;
          this.likes = response.data.likes;
        }).catch(err => {
        console.log('err:', err);
      });


      axios.get(GET_URL)
        .then(response => {
          console.log('body:', response.data);     // response body.
        }).catch(err => {
        console.log('err:', err);
      });

      json_data = require(GET_URL)
    }*/
  };
</script>

<style>

</style>
