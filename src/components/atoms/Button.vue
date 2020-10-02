<template>
  <button
    type="button"
    :class="{
      'btn--primary': primary,
      btn: true,
      'btn--link': link,
      'btn--outline': outline,
      [`btn--${type}`]: type.length > 0
    }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: ""
    },
    outline: {
      type: Boolean,
      required: false,
      default: false
    },
    link: Boolean
  }
};
</script>

<style lang="scss">
.btn {
  display: inline-flex;
  width: 90px;
  height: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 13.5px !important;
  border: solid 0.5px #edeef6;
  background-color: #ffffff;
  font-size: 0.7rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  color: #3a3f5c;
  font-family: "Gilroy-Medium";
  cursor: pointer;

  &--link {
    border: none;
    width: unset;
    justify-content: start;
    align-items: flex-start;
    color: #00aeef;
  }

  &--outline {
    background-color: transparent;
  }

  &--primary:not(&--link) {
    color: #fff;
    background-color: #00aeef;
    border-color: #00aeef;
    box-shadow: 0 2.5px 10px 0 rgba(0, 163, 218, 0.2);

    &[type="submit"] {
      background-color: #00aeef;
    }
  }

  &--success:not(&--link) {
    color: #fff;
    background-color: #40ce53;
    box-shadow: 0 2.5px 10px 0 rgba(0, 163, 218, 0.2);

    &[type="submit"] {
      background-color: #40ce53;
    }
  }
}
</style>
