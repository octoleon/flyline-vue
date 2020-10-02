<template>
  <span class="badge--airline">
    <img :src="logo" alt="airline logo" />
  </span>
</template>

<script>
export default {
  name: "AirlineBadge",
  props: {
    logo: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.badge--airline {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  img {
    background-color: #f9f9f9;
    padding: 0.4rem;
    border-radius: 5rem;
  }
}
</style>
