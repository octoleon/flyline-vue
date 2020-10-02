<template>
  <span class="icon icon--takeoff">
    <img src="@/assets/images/take-off.svg" alt="icon plane alternative" />
  </span>
</template>

<script>
export default {
  name: "IconTakeoff",
  props: {
    direction: {
      type: String,
      default: "up"
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
