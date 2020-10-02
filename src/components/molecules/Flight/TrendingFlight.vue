<template>
  <div class="trending-flight">
    <div
      class="trending-flight__thumb"
      :style="{ 'background-image': `url('/places/city-s-1.png')` }"
    ></div>
    <div style="display: flex; flex-flow: column wrap; width: 100%;">
      <div class="trending-flight__info">
        <div class="airport">
          <h3 class="airport__name">
            {{ `${flight.city_from_name} (${flight.fly_from})` }}
          </h3>
          <span class="airport__date">{{
            flight.departure_date | moment("ddd, MMM DD")
          }}</span>
        </div>
        <IconTakeoffAlt />
        <div class="airport">
          <h3 class="airport__name">
            {{ `${flight.city_to_name} (${flight.fly_to})` }}
          </h3>
          <span class="airport__date">{{
            flight.return_date | moment("ddd, MMM DD")
          }}</span>
        </div>
      </div>
      <AirlineTransit :airline="flight.airlines" />
    </div>
  </div>
</template>

<script>
import IconTakeoffAlt from "@/components/atoms/icons/IconTakeoffAlt";
import AirlineTransit from "@/components/molecules/Airline/AirlineTransit";

export default {
  name: "TrendingFlight",
  props: {
    flight: Object
  },
  components: {
    IconTakeoffAlt,
    AirlineTransit
  }
};
</script>

<style lang="scss" scoped>
.trending-flight {
  display: flex;
  flex-flow: row nowrap;
  background-color: #ffffff;
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
}

.trending-flight__thumb {
  height: auto;
  width: 9rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.trending-flight__info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1rem 0.5rem;

  > .icon {
    padding-top: 0.5rem;
  }
}

.airline,
.airport {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.airport {
  flex-direction: column;

  &__name {
    font-size: 0.65rem;
    font-family: "Gilroy-Bold";
    margin-bottom: 0;
  }

  &__date {
    opacity: 0.4;
    font-size: 0.55rem;
  }
}
</style>
