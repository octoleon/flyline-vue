<template>
  <div class="content--wrapper">
    <PricingHeader :type="'pricing'" />
    <div class="membership-cards-container">
      <MemberShipPlan />
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import PricingHeader from "@/components/molecules/Pricing/Header";
import MemberShipPlan from "@/components/molecules/Pricing/MemberShipPlan";

export default {
  name: "PricingContent",
  components: {
    PricingHeader,
    MemberShipPlan
  },
  computed: {
    ...Vuex.mapState("plans", ["plans"])
  }
};
</script>

<style lang="scss">
.content--wrapper {
  margin: auto;
}

.membership-cards-container {
  display: flex;
}
</style>
