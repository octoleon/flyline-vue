<template>
  <form :class="classes">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    columns: {
      type: Number,
      required: false,
      default: 1
    },
    card: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        form: true,
        "form--card": this.card,
        [`form--columns-${this.columns}`]: this.columns > 1
      };
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

.form {
  @include xy-grid();
  @include flex-align(left, center);

  &__input {
    border: solid 0.5px #edeef6 !important;
    border-radius: 13.5px !important;
    font-size: 12px !important;
    color: #3a3f5c !important;
  }

  &--columns-2 > * {
    width: calc(50% - 7.5px);

    &:nth-child(odd) {
      margin-right: 15px;
    }
  }

  &--columns-3 > * {
    width: calc(33.33% - 10px);
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  &--card .form__submit {
    margin-left: auto;
  }

  > *:last-child {
    margin: 0;
    width: 100%;
  }
}
</style>
