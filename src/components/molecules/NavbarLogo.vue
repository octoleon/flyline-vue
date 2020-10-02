<template>
  <div class="navbar__logo">
    <router-link to="/">
      <img src="@/assets/images/FlylineSVG_Logotype.svg" alt="Flyline Logo" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavbarLogo"
};
</script>

<style lang="scss">
.navbar__logo {
  padding-right: 40px;

  img {
    width: 130px !important;
    height: 22px !important;
    object-fit: contain;
  }
}
</style>
