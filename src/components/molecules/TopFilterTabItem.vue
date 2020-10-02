<template>
  <div
    class="top-filter-tab-item"
    v-bind:class="{ end: end, active: active }"
    v-on:click="activeTab(title)"
  >
    <h4 class="top-filter-tab-item__title">{{ title }}</h4>
    <h4 class="top-filter-tab-item__description">{{ description }}</h4>
  </div>
</template>

<script>
export default {
  name: "TopFilterTabItem",
  props: ["title", "description", "active", "end", "activeTab"]
};
</script>

<style scoped lang="scss">
.top-filter-tab-item {
  cursor: pointer;
  flex: 1;
  border-right: 1px solid #edeef6;
  padding: 35px 0;
  &.end {
    border: none;
  }
  &.active {
    h4 {
      color: #00aeef;
    }
    border-bottom: 4px solid #00aeef;
  }
  &__title {
    font-family: Gilroy;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #3a3f5c;
  }
  &__description {
    font-family: Gilroy;
    font-size: 0.7rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #bbc4dc;
  }
}
</style>
