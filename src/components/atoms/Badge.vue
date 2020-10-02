<template>
  <span
    :class="{
      badge: true,
      'badge--padded': padded,
      'badge--round': round,
      [`badge--${type}`]: type.length > 0
    }"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      required: false,
      default: "primary"
    },
    padded: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.badge {
  text-align: center;
  border-radius: 3rem;

  &--round {
    border-radius: 50%;
  }

  &--padded {
    padding: 0.1rem 0.3rem;
  }

  &--primary:not(&--link) {
    color: #00aeef;
    background-color: rgba(0, 174, 239, 0.2);
  }
}
</style>
