<template>
  <span :class="classes"></span>
</template>

<script>
export default {
  name: "IconSort",
  props: {
    direction: {
      type: String,
      default: "up"
    }
  },
  computed: {
    classes() {
      return {
        icon: true,
        [`icon--sort-${this.direction}`]: true
      };
    }
  }
};
</script>

<style lang="scss">
.icon {
  display: inline-block;

  &--sort-up,
  &--sort-down {
    color: #3055bc;
  }

  &::before {
    font-family: "FontAwesome";
  }

  &--sort-up::before {
    content: "\f0dd";
  }

  &--sort-down::before {
    content: "\f078";
  }
}
</style>
