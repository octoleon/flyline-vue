<template>
  <div class="mobile__home__content">
    <h1
      class="mobile__home__content__title"
      style="margin-top: 60px;margin-bottom: 40px;"
    >
      Ready to put your travel planning on autopilot?
    </h1>
    <p class="mobile__home__content__description">
      Score the best airfare plus seamlessly manage your flights. Answer a few
      questions to request early access.
    </p>
    <div class="mobile__home__content__applink">
      <a href="/typeform" class="btn--primary btn btn-send google-play-btn">
        <img
          src="/images/icons/playstore.svg"
          alt="google"
          class="google-icon"
        />
        <span>
          Download on the
          <h6>Google Play</h6>
        </span>
      </a>
      <a href="/typeform" class="btn--primary btn btn-send">
        <img src="/images/icons/apple.svg" alt="apple" class="apple-icon" />
        <span>
          Get on the
          <h6>App Store</h6>
        </span>
      </a>
    </div>
    <p class="mobile__home__content__login">
      Questions? Send us an email to hello@flyline.io and we'll get back to you.
    </p>
  </div>
</template>

<script>
// import AppLink from "@/components/molecules/AppLink";

export default {
  name: "MobileHomeContent",
  components: {
    // AppLink
  }
};
</script>

<style lang="scss">
.mobile__home__content {
  padding: 0 30px;
  &__title {
    font-family: Gilroy-Bold;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: center;
    color: #0e3178;
    margin-top: 30px;
    padding: 0 20px;
  }
  &__description {
    font-family: Gilroy-Medium;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #8e969f;
    margin-top: 20px;
  }
  &__applink {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #e7e9f0;
    &__wrapper {
      flex: 1;
      &--right {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  &__login {
    font-family: Gilroy-Medium;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: normal;
    text-align: center;
    color: #8e969f;
    margin-top: 20px;
    .highlight {
      color: #00aeef;
    }
  }

  .mobile__home__content__applink {
    display: flex;
    justify-content: center;
    .btn-send {
      width: fit-content;
      padding: 22px 8px;
      font-size: 13px;
      border-radius: 26px !important;
      width: 100%;
      margin-right: 5px;
    }
    .google-icon {
      width: 20px;
      margin-right: 5px;
    }
    .apple-icon {
      margin-left: -15px;
      margin-right: 10px;
    }
    span {
      margin-top: 7px;
    }
  }
}
</style>
