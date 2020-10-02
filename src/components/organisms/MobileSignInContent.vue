<template>
  <div class="mobile__signin__content">
    <p class="mobile__signin__content__description">
      For the best FlyLine experience, use our desktop web app or download our
      iOS or Android Mobile app.
    </p>
    <div class="mobile__signin__content__applink">
      <div class="mobile__signin__content__applink__wrapper">
        <AppLink
          :image="'playstore.png'"
          :source="'Google Play'"
          :comment="'Download on the'"
        />
      </div>
      <div
        class="mobile__signin__content__applink__wrapper mobile__signin__content__applink__wrapper--right"
      >
        <AppLink
          :image="'apple.png'"
          :source="'App Store'"
          :comment="'Get on the'"
        />
      </div>
    </div>
    <MobileHomeButton :type="'blue'" :label="'Memberships Explained'" />
    <MobileHomeButton :type="'white'" :label="'FlyLine 101'" />
  </div>
</template>

<script>
import AppLink from "@/components/molecules/AppLink";
import MobileHomeButton from "@/components/molecules/MobileHomeButton";

export default {
  name: "MobileSignInContent",
  components: {
    AppLink,
    MobileHomeButton
  }
};
</script>

<style lang="scss">
.mobile__signin__content {
  padding: 0 30px;
  &__description {
    font-family: AvenirNext;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #8e969f;
    margin-top: 20px;
    margin-bottom: 0;
  }
  &__applink {
    display: flex;
    padding: 60px 0;
    margin-bottom: 40px;
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
    font-family: AvenirNext;
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
}
</style>
