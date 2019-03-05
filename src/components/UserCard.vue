<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4" v-for="card in cards">
        <div class="card w-100 my-3">
          <img
            class="card-img-top img-fluid"
            src="https://placehold.jp/300x200.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h2 class="card-title">{{ card.name }}</h2>
            <h3>{{ card.gender }}</h3>
            <h4>{{ card.grade }}</h4>
            <h4>{{ card.email }}</h4>
            <p class="card-text">{{ card.lab.name }}</p>
            <p class="card-text">{{ card.lab.overview }}</p>
            <p class="card-text">{{ card.context }}</p>
            <a href="#!" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var GET_URL = "http://localhost:3000/users";

export default {
  name: "card",
  data() {
    return {
      cards: ""
    };
  },
  created() {
    axios
      .get(GET_URL)
      .then(response => {
        this.cards = response.data;
      })
      .catch(err => {
        console.log("err:", err);
      });
  }
};
</script>

<style scoped></style>
