<template>
  <div class="field">
    <label
      v-text="label"
      :class="{
        field__label: true,
        'field__label--transparent': label === '-'
      }"
      :for="labelFor"
    ></label>
    <div class="field__group">
      <slot></slot>
      <span v-if="prefix" v-text="prefix" class="field__prefix"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormField",
  props: {
    label: {
      type: String,
      required: false,
      default: "-"
    },
    prefix: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    labelFor() {
      return this.label
        .toLowerCase()
        .split(" ")
        .join("-");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

.field {
  @include xy-grid(vertical);
  @include flex-align(center, left);
  position: relative;
  flex-basis: 0;
  justify-content: start;

  &__label {
    font-size: 12px;
    color: #3a3f5c;
    opacity: 0.6;

    &--transparent {
      opacity: 0;
    }
  }

  &__group {
    position: relative;
  }

  &__prefix {
    position: absolute;
    bottom: 1rem;
    line-height: 2.4rem;
    border-top-left-radius: 13.5px;
    border-bottom-left-radius: 13.5px;
    width: 3rem;
    text-align: center;
    border-right: 0.5px solid #edeef6;
  }
}
</style>
