<template>
  <div class="page--signin">
    <div class="page--signin--web"></div>
    <div class="page--signin--mobile">
      <div class="mobile-navbar">
        <p class="mobile-navbar__welcome-message">Welcome to</p>
        <MobileNavbarLogo />
      </div>
      <MobileSignInContent />
      <img
        class="page--signin--mobile__footer-back"
        src="../assets/images/Illustrations.png"
        width="100%"
        height="100%"
      />
      <MobileFooter />
    </div>
  </div>
</template>

<script>
import MobileFooter from "@/components/organisms/MobileFooter";
import MobileNavbarLogo from "@/components/molecules/MobileNavbarLogo";
import MobileSignInContent from "@/components/organisms/MobileSignInContent";

export default {
  name: "SignIn",
  components: {
    MobileNavbarLogo,
    MobileSignInContent,
    MobileFooter
  }
};
</script>

<style lang="scss">
.page {
  &--signin {
  }
  &--signin--mobile {
    min-height: 100vh;
    background-color: #f7f9fc;

    padding-top: 60px;
    display: none;
    &__footer-back {
      margin-top: 20px;
    }
    .mobile-navbar {
      display: flex;
      flex-direction: column;
      &__welcome-message {
        font-family: NexaBold;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.21;
        letter-spacing: 4.2px;
        text-align: center;
        color: #3a3f5c;
        text-transform: uppercase;
        margin-bottom: 25px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    &--signin--web {
      display: none;
    }
    &--signin--mobile {
      display: block;
    }
  }
}
</style>
