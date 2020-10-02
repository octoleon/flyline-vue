<template>
  <div class="mobile__navbar__logo">
    <router-link to="/">
      <img
        src="@/assets/images/FlylineSVG_Logotype@3x.png"
        alt="Flyline Logo"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MobileNavbarLogo"
};
</script>

<style lang="scss">
.mobile__navbar__logo {
  margin: 0 auto;
  img {
    width: 180px;
    height: 30px;
    object-fit: contain;
  }
}
</style>
