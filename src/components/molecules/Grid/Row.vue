<template>
  <div :class="{ row: true, 'row--y': vertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    vertical: Boolean
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

.row {
  @include xy-grid();
  @include flex-align(space-between, left);
  flex-grow: 1;

  & > * {
    margin-right: 15px;
    flex-grow: 1;

    &:last-child {
      margin-right: 0;
    }
  }

  &--y {
    flex-flow: column wrap;

    & > * {
      margin-right: 0;
    }
  }
}
</style>
