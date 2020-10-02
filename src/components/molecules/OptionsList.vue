<template>
  <div class="options-list">
    <p
      v-for="item in list"
      :key="item"
      class="option"
      v-bind:class="{ selected: item === selected }"
      v-on:click="click(item, id)"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: "OptionsList",
  props: ["selected", "click", "list", "id"]
};
</script>

<style scoped lang="scss">
.options-list {
  padding-top: 1rem;
  border-top: 1px solid #edeef6;
  .option {
    font-family: Gilroy;
    font-size: 0.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    margin-bottom: 1rem;
  }
  .selected {
    color: #00aeef;
  }
}
</style>
