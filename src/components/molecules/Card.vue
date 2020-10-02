<template>
  <div :class="{ card: true, 'card--full-width': fullWidth }">
    <h3 class="card__title" v-if="title" v-text="title"></h3>
    <slot class="card__body"></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    fullWidth: Boolean
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

.card {
  @include xy-grid(vertical, false);
  @include card-container(
    white,
    #3a3f5c,
    15px,
    solid 0.5px #edeef6,
    13.5px,
    0 0 20px 0 rgba(43, 57, 94, 0.06)
  );

  padding: 18px 15px;

  &--full-width {
    flex-grow: 1;
    min-width: 100%;
  }

  &__title {
    font-family: "Gilroy-Bold";
    font-size: 1rem;
  }
}
</style>
