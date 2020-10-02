<template>
  <div class="mobile__home__button">
    <button v-bind:class="{ white: type === 'white', blue: type !== 'white' }">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "MobileHomeButton",
  props: ["type", "label"]
};
</script>

<style lang="scss">
.mobile__home__button {
  margin: 0 auto;
  button {
    margin-top: 20px;
    padding: 10px 0;
    border-radius: 27px;
    width: 100%;
    font-family: Gilroy-Bold;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    text-align: center;
    box-shadow: 0 5px 10px 0 rgba(20, 40, 160, 0.05);
    &.blue {
      background-color: #00aeef;
      color: #fff;
    }
    &.white {
      background-color: #fff;
      color: #3a3f5c;
    }
  }
}
</style>
