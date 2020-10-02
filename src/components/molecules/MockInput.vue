<template>
  <div class="mock-input">
    <span class="mock-input__icon">
      <slot name="icon" />
    </span>
    <div class="mock-input__info">
      <span v-text="label" class="mock-input__label"></span>
      <span v-text="text" class="mock-input__text"></span>
    </div>
    <IconSort v-if="dropdown" />
  </div>
</template>

<script>
import IconSort from "@/components/atoms/icons/IconSort";

export default {
  name: "MockInput",
  props: {
    dropdown: Boolean,
    label: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  components: {
    IconSort
  }
};
</script>

<style lang="scss">
.mock-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 0.5px solid #edeef6;
  border-radius: 5rem;
  background-color: #fefeff;
  line-height: 1;
  position: relative;
  cursor: pointer;

  > * {
    padding: 0 0.5rem;
  }

  &__info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-right: 3rem;
  }

  &__label {
    font-size: 0.7rem;
    color: rgba(58, 63, 92, 0.4);
  }

  &__text {
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.3rem 0 0 0;
  }

  > .icon {
    position: relative;
    top: -3px;
  }
}
</style>
