<template>
  <div>
    <h1>{{ lab_profile }}</h1>
  </div>
</template>

<script>
export default {
  name: "LabProfile",
  data() {
    return {
      lab_profile: ""
    };
  },
  created() {
    axios
      .get("http://localhost:3000/labs/" + this.$route.params.id)
      .then(response => {
        this.lab_profile = response.data;
      })
      .catch(err => {
        console.log("err:", err);
      });
  }
};
</script>

<style scoped></style>
