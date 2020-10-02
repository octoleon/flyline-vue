<template>
  <div
    :class="{
      'step-navigator': true,
      'step-navigator--checkout': showCheckout
    }"
  >
    <Button @click="$emit('onClick', -1)">Back</Button>
    <Button type="success" @click="$emit('onClick', 1)">
      <span v-if="!showCheckout">Continue</span>
      <slot name="checkout-text" v-if="showCheckout"></slot>
    </Button>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";

export default {
  name: "StepNavigator",
  props: {
    showCheckout: Boolean
  },
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.step-navigator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .btn {
    will-change: width;
    width: 8rem;
    height: 2.5rem;
    border-radius: 5rem !important;
    transition: all 300ma cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &--checkout {
    .btn:last-child {
      width: 100%;
      margin-left: 1rem;
    }
  }
}
</style>
