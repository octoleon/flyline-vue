<template>
  <div class="trip-locations">
    <div :class="classes">
      <div class="trip-location__city">{{ location.from }}</div>
      <div class="trip-location__datetime">
        <div>Thu, February 28</div>
        <div>05:00 AM</div>
      </div>
    </div>
    <div class="trip-location">
      <div class="trip-location__city">{{ location.to }}</div>
      <div class="trip-location__datetime">
        <div>Thu, February 28</div>
        <div>05:00 AM</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TripLocation",
  props: {
    location: {
      type: Object,
      required: true
    },
    way: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    classes() {
      return {
        "trip-location": true,
        "trip-location--oneway": this.way === 1,
        "trip-location--twoway": this.way === 2
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.trip-locations {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
}

.trip-location {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column wrap;
  position: relative;

  &__city {
    font-size: 0.9rem;
    font-family: "Gilroy-Bold", sans-serif;
  }

  &__datetime {
    font-family: "Gilroy-Medium", sans-serif;
    padding-top: 0.3rem;
    font-size: 0.6rem;
    line-height: 1.4;
    color: #a2a2a2;
  }

  &--oneway::after,
  &--twoway::after {
    content: "";
    background-image: url("~@/assets/arrow-downward.svg");
    height: 1rem;
    width: 1rem;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: -1rem;
    top: 0.3rem;
  }

  &--twoway::after {
    background-image: url("~@/assets/surface-1.svg");
  }
}
</style>
