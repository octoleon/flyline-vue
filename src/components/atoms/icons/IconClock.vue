<template>
  <span class="icon icon--clock"></span>
</template>

<script>
export default {
  name: "IconClock"
};
</script>

<style lang="scss">
.icon {
  display: inline-block;
  color: #bbc4dc;

  &--clock::before {
    font-family: "FontAwesome";
    content: "\f017";
  }
}
</style>
