<template>
  <div class="side-filter-option">
    <div class="side-filter-option__wrapper">
      <h3 class="side-filter-option__label">{{ label }}</h3>
      <span class="side-filter-option__more" v-on:click="toggleButton">{{
        toggle ? "-" : "+"
      }}</span>
    </div>
    <div>
      <slot v-if="toggle"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopFilterTabItem",
  props: ["label", "default"],
  data: function() {
    return {
      toggle: this.default
    };
  },
  methods: {
    toggleButton: function() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style scoped lang="scss">
.side-filter-option {
  border-bottom: 1px solid #edeef6;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  &__wrapper {
    display: flex;
  }
  &__label {
    font-family: Gilroy;
    font-size: 1rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    margin-bottom: 0;
  }
  &__more {
    opacity: 0.4;
    font-family: Gilroy;
    font-size: 1rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: right;
    color: #3a3f5c;
    flex: 1;
    margin-bottom: 0;
    cursor: pointer;
  }
}
</style>
