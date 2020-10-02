<template>
  <span class="icon icon--circle"></span>
</template>

<script>
export default {
  name: "IconCircle"
};
</script>

<style lang="scss">
.icon {
  display: inline-block;

  &--circle::before {
    font-family: "FontAwesome";
    content: "\f111";
  }
}
</style>
