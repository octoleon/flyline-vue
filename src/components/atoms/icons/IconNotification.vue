<template>
  <span class="icon--notification"></span>
</template>

<script>
export default {
  name: "IconNotification"
};
</script>

<style lang="scss">
.icon--notification {
  display: inline-flex;
  justify-content: center;
  align-self: center;
  width: 1rem;
  height: 1rem;
  background-image: url("~@/assets/images/bell.svg");
}
</style>
