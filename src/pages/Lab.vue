<template>
  <div id="lab">
    <h1>{{ json_data }}</h1>
    <ul>
      <li>研究室名：{{ name }}</li>
      <li>大学名：{{ university }}</li>
      <li>県名：{{ prefecture }}</li>
      <li>オーバービュー：{{ overview }}</li>
    </ul>
    <router-link to="/user">Go to user</router-link>
    <router-link to="/login">Go to login</router-link>
  </div>
</template>

<script>

  import lab from '../assets/api_lab.json'

  export default {
    el: '#lab',
    name: 'lab',
    data() {
      return {
        json_data: lab,
        name: lab.name,
        university: lab.university,
        prefecture: lab.prefecture,
        overview: lab.overview,

      }
    }
  }
</script>

<style>
  a {
    margin: 20px 20px;
  }
</style>
