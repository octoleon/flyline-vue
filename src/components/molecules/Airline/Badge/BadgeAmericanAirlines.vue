<template>
  <span class="badge badge--american-airlines">
    <img
      src="@/assets/images/american-airlines.svg"
      alt="american airline logo"
    />
  </span>
</template>

<script>
export default {
  name: "BadgeAmericanAirlines"
};
</script>

<style lang="scss" scoped>
.badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  img {
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 5rem;
  }
}
</style>
