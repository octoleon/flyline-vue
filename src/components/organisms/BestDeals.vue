<template>
  <div class="bestdeals">
    <h3 class="bestdeals__header">FlyLine best deals</h3>

    <div class="filter">
      <div class="filter__item">
        <span class="filter__name">Origin city</span> <IconSort />
      </div>
      <div class="filter__item">
        <span class="filter__name">Airlines</span> <IconSort />
      </div>
      <div class="filter__item">
        <span class="filter__name">Price</span> <IconSort />
      </div>
      <div class="filter__item filter__item--right">
        <span class="filter__prefix">Sort:</span>
        <span class="filter__name">Cheapest first</span> <IconSort />
      </div>
    </div>

    <div class="bestdeals__result">
      <FlightCard
        v-for="(flight, index) in feedDeals"
        :key="index"
        :flight="flight"
      />
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import IconSort from "@/components/atoms/icons/IconSort";
import FlightCard from "@/components/molecules/Flight/FlightCard";

export default {
  name: "BestDeals",
  props: {
    deals: Array
  },
  components: {
    IconSort,
    FlightCard
  },
  computed: {
    ...Vuex.mapState("deals", ["feedDeals"])
  },
  methods: {
    ...Vuex.mapActions("deals", ["fetchFeedDeals"])
  },
  created: function() {
    this.fetchFeedDeals();
  }
};
</script>

<style lang="scss">
.bestdeals {
  font-size: 11px;
  width: calc(65% - 2rem);
  margin-right: 2rem;
  margin-bottom: 1rem;

  &__header {
    font-family: "Gilroy-Bold";
    font-size: 16px;
    padding-bottom: 10px;

    small {
      color: #d4d6e5;
      font-family: "Gilroy-Regular";
      font-size: 0.6rem;
      padding-left: 0.5rem;
    }
  }

  &__result {
    display: flex;
    padding-top: 1.5rem;
    flex-wrap: wrap;

    & > * {
      max-width: calc((100% / 2) - (2rem / 2));
      flex-grow: 1;
    }

    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .filter {
    display: flex;
    font-family: "Gilroy-Bold";
    position: relative;
    border-bottom: 1px solid #edeef6;
    padding-bottom: 1.5rem;

    &__item {
      margin-right: 1rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &--right {
        margin-left: auto;
      }

      > .icon {
        position: relative;
        bottom: 2px;
      }
    }

    &__prefix {
      padding-right: 0.4rem;
      opacity: 0.4;
    }

    &__name {
      padding-right: 0.4rem;
    }
  }
}
</style>
