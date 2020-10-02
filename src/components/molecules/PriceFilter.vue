<template>
  <div class="price-filter">
    <vue-range-slider
      v-model="value"
      :min="min"
      :max="max"
      :enable-cross="enableCross"
      formatter="${value}"
      merge-formatter="${value1} ~ ${value2}"
    ></vue-range-slider>
  </div>
</template>

<script>
import VueRangeSlider from "vue-range-component";
export default {
  name: "PriceFilter",
  components: {
    VueRangeSlider
  },
  data() {
    return {
      value: [250, 2000],
      prettify: function(ts) {
        return "$ " + ts;
      }
    };
  },
  created() {
    this.min = 0;
    this.max = 3000;
    this.enableCross = false;
  }
};
</script>

<style scoped lang="scss">
#vue-histogram-slider-wrapper {
  margin: 60px auto !important;
  margin-bottom: 20px !important;
}
.vue-range-slider {
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>
