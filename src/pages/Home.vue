<template>
  <div>
    <Header></Header>
    <Carousel></Carousel>
    <section>
      <h1 class="text-center my-5">- 研究室一覧 -</h1>
      <LabCard></LabCard>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import LabCard from "../components/LabCard";

export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    LabCard
  }
};
</script>

<style scoped></style>
