<template>
  <div :class="{ header: true, 'pricing-header': type === 'pricing' }">
    <div class="title">Pick your plan</div>
    <div class="description">
      Choose a plan based on how — and how often — you travel. membership
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingHeader",
  props: {
    type: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.pricing-header {
  text-align: center;
  margin: auto;
  font-family: Gilroy-Regular;
  letter-spacing: normal;
  text-align: center;
  .title {
    height: 57px;
    font-size: 48px;
    font-family: gilroy-bold;
    color: #0e3178;
    margin-bottom: 28px;
    line-height: 1.19;
  }
  .description {
    height: 88px;
    font-size: 16px;
    font-family: gilroy-medium;
    color: #7b7b7b;
  }
}
</style>
