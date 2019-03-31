<template>
  <div>
    <Header></Header>
    <Profile class="m-5"></Profile>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Profile from "../components/form_group/laboratory/profile";

export default {
  name: "LabRegister",
  components: {
    Header,
    Profile
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
