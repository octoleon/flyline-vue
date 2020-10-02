<template>
  <footer class="mobile-footer">
    <p class="mobile-footer__content">
      <span class="company">FlyLine</span>
      -
      <span class="link">Terms of Use</span>
      |
      <span class="link">Privacy Policy</span>
    </p>
  </footer>
</template>

<script>
export default {
  name: "MobileFooter"
};
</script>

<style lang="scss">
.mobile-footer {
  margin: 0 auto;
  &__content {
    font-family: Gilroy-Bold;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.33;
    letter-spacing: normal;
    text-align: center;
    color: #00aeef;
    .company {
      color: #0e3178;
    }
    .link {
      color: #8e969f;
    }
    margin: 0;
  }
}
</style>
