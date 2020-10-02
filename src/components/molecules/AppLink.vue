<template>
  <div class="app-link">
    <div class="app-link__wrapper">
      <div class="app-link__image">
        <img
          alt="flight icon"
          :src="require('../../assets/images/' + image)"
          width="20"
          height="20"
        />
      </div>
      <div class="app-link__content">
        <p class="app-link__content__comment">{{ comment }}</p>
        <p class="app-link__content__source">{{ source }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLink",
  props: ["image", "source", "comment"]
};
</script>

<style lang="scss">
.app-link {
  display: flex;
  width: 97%;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 31px;
  box-shadow: 0 5px 10px 0 rgba(20, 40, 160, 0.05);

  .app-link__wrapper {
    margin: 0 auto;
    display: flex;
  }
  .app-link__image {
    margin-right: 10px;
  }
  .app-link__content__comment {
    font-family: Gilroy-Bold;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #0e3178;
    margin: 0;
    margin-bottom: 4px;
    line-height: 1;
  }
  .app-link__content__source {
    font-family: Gilroy-Bold;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #0e3178;
    margin: 0;
    line-height: 1;
  }
}
</style>
