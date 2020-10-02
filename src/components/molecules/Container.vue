<template>
  <div
    :class="{
      container: true,
      'container--dark': dark,
      'container--padded': padded
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    dark: Boolean,
    padded: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

.container {
  @include xy-grid();

  margin: 0 auto;
  width: 960px;
  border-radius: 24px;

  &--padded {
    width: 100%;
    padding: 15px;
  }

  &--dark {
    background-color: #f8f8fc;
  }
}
</style>
