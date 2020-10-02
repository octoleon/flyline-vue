<template>
  <span :class="classes"></span>
</template>

<script>
export default {
  name: "IconChevron",
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
        [`icon--chevron-${this.direction}`]: true
      };
    }
  }
};
</script>

<style lang="scss">
.icon {
  display: inline-block;

  &--chevron-up,
  &--chevron-down {
    color: #3055bc;
  }

  &::before {
    font-family: "FontAwesome";
  }

  &--chevron-up::before {
    content: "\f077";
  }

  &--chevron-down::before {
    content: "\f078";
  }
}
</style>
