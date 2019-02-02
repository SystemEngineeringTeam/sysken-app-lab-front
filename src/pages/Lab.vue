<template>
  <div id="lab">
    <Header></Header>
    <card></card>
    <router-link to="/user">Go to user</router-link>
    <router-link to="/login">Go to login</router-link>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Header from "../components/Header.vue";

var GET_URL = "http://localhost:3000/labs/1";

export default {
  el: "#lab",
  name: "lab",
  components: {
    Card,
    Header
  },
  data() {
    return {
      json_data: "",
      name: "",
      university: "",
      prefecture: "",
      overview: ""
    };
  },
  created() {
    axios
      .get(GET_URL)
      .then(response => {
        this.json_data = response.data;
        this.name = response.data.name;
        this.university = response.data.university;
        this.prefecture = response.data.prefecture;
        this.overview = response.data.overview;
      })
      .catch(err => {
        console.log("err:", err);
      });

    axios
      .get(GET_URL, {
        withCredentials: true
      })
      .then(response => {
        console.log("body:", response.data); // response body.
      })
      .catch(err => {
        console.log("err:", err);
      });
  }
};
</script>

<style>
a {
  margin: 20px 20px;
}
</style>
