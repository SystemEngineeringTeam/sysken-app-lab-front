<template>
  <div id="user">
    <h1>{{ json_data }}</h1>
    <ul>
      <li>ユーザ名：{{ name }}</li>
      <li>性別：{{ gender }}</li>
      <li>所属研究室名：{{ lab_name }}</li>
      <li>所属研究室オーバビュー：{{ lab_overview }}</li>
      <li>コンテキスト: {{ context }}</li>
    </ul>
    <router-link to="/lab">Go to lab</router-link>
    <router-link to="/login">Go to login</router-link>
  </div>
</template>

<script>

  import user from '../assets/api_user.json'

  export default {
    el: '#user',
    name: 'user',
    data() {
      return {
        json_data: user,
        name: user.name,
        gender: user.gender,
        lab_name: user.lab["name"],
        lab_overview: user.lab["overview"],
        context: user.context
      }
    }
  }
</script>

<style>
  a {
    margin: 20px 20px;
  }
</style>
