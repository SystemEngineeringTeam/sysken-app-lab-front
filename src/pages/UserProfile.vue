<template>
  <div>
    <h1>{{ user_profile }}</h1>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      user_profile: ""
    };
  },
  created() {
    axios
      .get("http://localhost:3000/users/" + this.$route.params.id)
      .then(response => {
        this.user_profile = response.data;
      })
      .catch(err => {
        console.log("err:", err);
      });
  }
};
</script>

<style scoped></style>
