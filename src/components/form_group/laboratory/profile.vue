<template>
  <div class="card">
    <div class="profile-imgs position-relative">
      <div class="position-relative">
        <label class="w-100" for="img-selector1"
          ><input
            @change="choosedCover($event)"
            id="img-selector1"
            type="file"/><img
            class="w-100 profile-imgs-logo"
            :src="imageData[0]"
            v-if="imageData[0]"
        /></label>
      </div>
      <label class="w-100" for="img-selector2"
        ><input
          @change="choosedLogo($event)"
          id="img-selector2"
          type="file"/><img
          class="profile-imgs-icon position-absolute rounded-lg img-thumbnail col-5 col-md-3"
          :src="imageData[1]"
          v-if="imageData[1]"
      /></label>
    </div>
    <div class="card-body row justify-content-end">
      <div class="preview col-7 col-md-8 col-lg-8 col-sm-10">
        <h1>システム工学研究会</h1>
        <!-- //TODO: 大学HPへの遷移と，TOPページにて検索（県名で） -->
        <h2><a href="#">愛知工業大学</a>(<a href="#">愛知県</a>)</h2>
        <div class="mb-5 contact">
          <a class="text-decoration-none" v-if="sns.twitter" :href="sns.twitter"
            ><i class="fab fa-twitter-square"></i
          ></a>
          <a
            class="text-decoration-none"
            v-if="sns.facebook"
            :href="sns.facebook"
            ><i class="fab fa-facebook-square"></i
          ></a>
          <a
            class="text-decoration-none"
            v-if="sns.instagram"
            :href="sns.instagram"
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
      </div>
      <div class="edit"><form method="POST"></form></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      imageData: [
        require("../../../../src/assets/image/coverTest.jpg"),
        require("../../../../src/assets/image/labRegister.svg")
      ],
      sns: {
        // 受け取ったSNSのリンクが文字列として入る．リンクが存在していればv-if=trueとなる
        twitter: "https://twitter.com",
        facebook: "",
        instagram: ""
      }
    };
  },
  methods: {
    choosedCover(img) {
      const files = img.target.files;

      if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = img => {
          this.imageData.shift();
          this.imageData.splice(0, 0, img.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    choosedLogo(img) {
      const files = img.target.files;

      if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = img => {
          this.imageData.splice(1, 0, img.target.result);
          this.imageData.pop();
        };
        reader.readAsDataURL(file);
      }
    }
  }
};
</script>

<style scoped>
.preview {
  margin: -40px 0;
}
i {
  font-size: 5vw;
  margin: 1vw;
}
h1 {
  font-size: 3vw;
}
h2 {
  font-size: 2vw;
}
label {
  cursor: pointer;
}
label > input {
  display: none;
}
.profile-imgs > div img {
  max-height: 50vh;
  object-fit: cover;
}
.profile-imgs-icon {
  max-height: 200px;
  bottom: -8vw;
  left: 3%;
}
.profile-imgs-icon:hover,
.profile-imgs-logo:hover {
  opacity: 0.7;
}
</style>
