<template>
  <span class="icon icon--search"></span>
</template>

<script>
export default {
  name: "IconSearch"
};
</script>

<style lang="scss">
.icon {
  display: inline-block;
  color: #bbc4dc;

  &--search::before {
    font-family: "FontAwesome";
    content: "\f002";
  }
}
</style>
