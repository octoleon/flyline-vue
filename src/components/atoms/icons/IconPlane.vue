<template>
  <span :class="classes"></span>
</template>

<script>
export default {
  name: "IconPlane",
  props: {
    reverse: Boolean
  },
  computed: {
    classes() {
      return {
        icon: true,
        "icon--plane": true,
        "icon--reverse": this.reverse
      };
    }
  }
};
</script>

<style lang="scss">
.icon {
  display: inline-block;

  &--plane {
    color: #3055bc;
  }

  &::before {
    font-family: "FontAwesome";
  }

  &--plane {
    &::before {
      content: "\f072";
    }
  }

  &--plane {
    transform: rotate(45deg);
  }

  &--plane:not(&--reverse) {
    transform: rotate(-135deg);
  }
}
</style>
