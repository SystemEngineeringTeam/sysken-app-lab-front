<template>
  <div class="card">
    <div class="profile-imgs position-relative">
      <div class="position-relative">
        <label for="img-selector1"
          ><input
            @change="choosedCover($event)"
            id="img-selector1"
            type="file"/><img
            class="w-100"
            :src="imageData[0]"
            v-if="imageData[0]"
            v-on:mouseover="mouseoverCover"
            v-on:mouseleave="mouseleaveCover"
        /></label>
      </div>
      <div>
        <label for="img-selector2"
          ><input
            @change="choosedLogo($event)"
            id="img-selector2"
            type="file"/><img
            class="profile-imgs-icon position-absolute rounded-lg img-thumbnail col-5 col-md-3"
            :src="imageData[1]"
            v-if="imageData[1]"
            v-on:mouseover="mouseoverLogo"
            v-on:mouseleave="mouseleaveLogo"
        /></label>
      </div>
    </div>
    <div class="card-body">
      <div class="preview"></div>
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
        require("../../../../src/assets/image/coverTest.jpg").toString(),
        require("../../../../src/assets/image/labRegister.svg").toString()
      ]
    };
  },
  methods: {
    mouseoverCover: function() {
      $(".profile-imgs > div:nth-of-type(1) img").css({
        opacity: 0.3
      });
    },
    mouseleaveCover: function() {
      $(".profile-imgs > div:nth-of-type(1) img").css({
        opacity: 1
      });
    },
    mouseoverLogo: function() {
      $(".profile-imgs > div:nth-of-type(2) img").css({
        opacity: 0.7
      });
    },
    mouseleaveLogo: function() {
      $(".profile-imgs > div:nth-of-type(2) img").css({
        opacity: 1
      });
    },
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
label {
  z-index: 10;
  cursor: pointer;
}
label > input {
  display: none;
}
.profile-imgs > div img {
  max-height: 300px;
  object-fit: cover;
}
.profile-imgs-icon {
  max-height: 200px;
  bottom: -20%;
  left: 3%;
}
</style>
