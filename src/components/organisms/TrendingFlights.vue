<template>
  <div class="trendings">
    <h3 class="trendings__header">Trending on FlyLine</h3>
    <TrendingFlight
      v-for="(f, index) in randomDeals"
      :key="index"
      :flight="f"
    />
    <div
      class="trendings__more"
      @click="$emit('TrendingFlights/SeeMore-clicked')"
    >
      <span>See more</span>
      <Badge v-if="randomDeals">{{ randomDeals.length }}</Badge>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Badge from "@/components/atoms/Badge";
import TrendingFlight from "@/components/molecules/Flight/TrendingFlight";

export default {
  name: "TrendingFlights",
  components: {
    Badge,
    TrendingFlight
  },
  computed: {
    ...Vuex.mapState("deals", ["randomDeals"])
  },
  methods: {
    ...Vuex.mapActions("deals", ["fetchRandomDeals"])
  },
  created: function() {
    this.fetchRandomDeals();
  }
};
</script>

<style lang="scss">
.trendings {
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  &__more {
    font-size: 0.7rem;
    color: #00aeef;
    font-family: "Gilroy-Bold";
    cursor: pointer;

    > span:first-child {
      padding-right: 0.4rem;
    }
  }

  &__header {
    font-family: "Gilroy-Bold";
    font-size: 16px;
    padding-bottom: 10px;
  }

  .trending-flight {
    margin-bottom: 1rem;
  }
}
</style>
