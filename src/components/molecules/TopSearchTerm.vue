<template>
  <div class="top-search-term">
    <div class="top-search-term__header" v-on:click="click(id)">
      <div class="top-search-term__image-wrapper">
        <img
          :src="require('../../assets/images/' + icon)"
          width="18px"
          height="18px"
        />
      </div>
      <div class="top-search-term__selected">
        <p class="label">{{ label }}</p>
        <p class="value">{{ value }}</p>
      </div>
      <div class="top-search-term__action" v-if="isCollapsible">
        <img
          :src="
            require('../../assets/images/' +
              (!toggle ? 'expand.png' : 'collapse.png'))
          "
          width="12px"
          height="12px"
        />
      </div>
    </div>
    <slot class="top-search-term__content" v-if="toggle"></slot>
  </div>
</template>

<script>
export default {
  name: "TopSearchTerm",
  props: ["label", "value", "id", "isCollapsible", "icon", "click", "toggle"]
};
</script>

<style scoped lang="scss">
.top-search-term {
  min-width: 14rem;
  border-radius: 27px;
  box-shadow: 0 0 40px 0 rgba(43, 57, 94, 0.06);
  border: solid 1px #edeef6;
  background-color: #ffffff;
  padding: 0.2rem 1rem;
  margin-right: 2rem;
  height: 100%;
  cursor: pointer;
  z-index: 9;
  &__header {
    display: flex;
    margin-bottom: 0.2rem;
  }
  &__selected {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  &__image-wrapper {
    margin-top: 0.4rem;
    margin-right: 1.2rem;
  }
  &__action {
    margin-top: 0.25rem;
  }
  .label {
    opacity: 0.4;
    font-family: Gilroy;
    font-size: 0.7rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    margin-bottom: 0;
  }
  .value {
    font-family: Gilroy;
    font-size: 0.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    margin-bottom: 0;
  }
}
</style>
