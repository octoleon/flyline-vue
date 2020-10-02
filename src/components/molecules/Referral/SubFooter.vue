<template>
  <div
    style="margin-top: 100px; margin-bottom: 100px;"
    class="hero hero--footer"
  >
    <div class="hero__header">
      <h4 class="hero__subtitle">
        Don’t miss out on the savings
      </h4>
      <h3 class="hero__title">
        Download the FlyLine app
      </h3>
    </div>
    <div class="hero__links">
      <Button type="primary" @click="goTo('Pricing')">Learn More</Button>
      <Button type="primary" @click="goTo('How it works')">Get Started</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";

export default {
  name: "SubFooter",
  components: {
    Button
  },
  methods: {
    goTo(page) {
      this.$router.push({ name: page });
    }
  }
};
</script>

<style scoped lang="scss">
.hero {
  &--footer {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    background-color: #0e3178;
    border-radius: 1rem;
    padding: 48px;
    flex-grow: 1;
    box-shadow: 5px 5px 50px 0 rgba(14, 49, 120, 0.3);

    .hero {
      &__title {
        font-size: 1.5rem;
        font-family: "Gilroy-Bold", sans-serif;
        font-weight: 400;
        margin: 0;
        padding-bottom: 0;
      }

      &__subtitle {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        font-family: "Gilroy-Light", sans-serif;
        margin: 0;
        padding-bottom: 0.5rem;
        color: #ffffff;
      }

      &__links {
        display: flex;
        justify-content: center;
        align-items: center;

        > .btn {
          width: auto;
          height: auto;
          font-size: 1rem;
          box-shadow: none;
          padding: 1.2rem 1.4rem;
          border-radius: 2rem !important;
          min-width: 11rem;

          &--outline {
            color: #ffffff;
            border-color: #ffffff;
            opacity: 0.5;
          }

          &:first-child {
            margin-right: 1rem;
          }
        }
      }
    }
  }
}
</style>
