<template>
  <div>
    <Header></Header>
    <card></card>
  </div>
</template>

<script>
import Card from "../components/LabCard.vue";
import Header from "../components/Header.vue";

var GET_URL = "http://localhost:3000/labs/1";

export default {
  name: "lab",
  components: {
    Card,
    Header
  }
};
</script>

<style></style>
