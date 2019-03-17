<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-sm-6" v-for="card in hitcards">
        <div class="card w-100 my-3">
          <a :href="'/labs/' + card.id" class="text-deco-none">
            <img
              class="card-img-top img-fluid"
              src="https://placehold.jp/300x200.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h2 class="card-title">{{ card.name }}</h2>
              <h3>{{ card.university }}</h3>
              <h4>{{ card.prefecture }}</h4>
              <p class="card-text">{{ card.overview }}</p>
              <a :href="'/labs/' + card.id" class="btn btn-primary"
                >詳しく見る！</a
              >
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var GET_URL = "http://localhost:3000/labs";

export default {
  name: "card",
  props: ["search_word", "search_prefecture"],
  data() {
    return {
      cards: ""
    };
  },
  computed: {
    // リアルタイム検索機能
    hitcards: function() {
      var cards = [];

      for (var i in this.cards) {
        var card = this.cards[i];

        const condition =
          card.name.includes(this.search_word) ||
          card.university.includes(this.search_word) ||
          card.prefecture.includes(this.search_word) ||
          card.overview.includes(this.search_word);

        if (this.search_word == "" && this.search_prefecture == "") {
          cards.push(card);
          continue;
        }

        if (this.search_word !== "" && this.search_prefecture == "") {
          if (condition) {
            cards.push(card);
            continue;
          }
        } else if (this.search_word == "" && this.search_prefecture !== "") {
          if (this.search_prefecture == card.prefecture) {
            cards.push(card);
            continue;
          }
        } else {
          if (this.search_prefecture == card.prefecture && condition) {
            cards.push(card);
          }
        }
      }
      return cards;
    }
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

<style scoped>
.text-deco-none {
  text-decoration: none;
  color: black;
}
</style>
