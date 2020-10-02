<template>
  <div class="flight-card">
    <div
      class="flight-card__banner"
      :style="{ 'background-image': `url('/places/city-1.jfif')` }"
    ></div>
    <div class="flight-card__info">
      <div class="airport">
        <h3 class="airport__name">
          {{ `${flight.city_from_name} (${flight.fly_from})` }}
        </h3>
        <span class="airport__date">{{
          flight.departure_date | moment("ddd, MMM DD")
        }}</span>
        <span class="airport__time">05:00 AM</span>
      </div>
      <IconTakeoffAlt />
      <div class="airport">
        <h3 class="airport__name">
          {{ `${flight.city_to_name} (${flight.fly_to})` }}
        </h3>
        <span class="airport__date">{{
          flight.return_date | moment("ddd, MMM DD")
        }}</span>
        <span class="airport__time">05:00 AM</span>
      </div>
    </div>
    <div class="airline">
      <AirlineBadge :logo="'/airlines/american-airlines.svg'" />
      <div class="airline__info">
        <h3 class="airline__name">
          <span v-for="(f, index) in flight.airlines" :key="index">{{
            f + " "
          }}</span>
        </h3>
        <span
          class="airline__transit"
          v-text="
            `${flight.airlines.length} Transit${
              flight.airlines.length > 1 ? 's' : ''
            }`
          "
        ></span>
      </div>
      <div class="airline__duration">
        <IconClock /><span v-text="'4h 32m'"></span>
      </div>
    </div>
    <div class="fare">
      <div class="fare__desc">
        <span class="fare__value" v-text="flight.fare"></span>
        <span class="fare__deal">This deal is a FlyLine Fare</span>
      </div>
      <Button type="primary">Choose</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";
import IconClock from "@/components/atoms/icons/IconClock";
import IconTakeoffAlt from "@/components/atoms/icons/IconTakeoffAlt";
import AirlineBadge from "@/components/molecules/Flight/AirlineBadge";

export default {
  name: "FlightCard",
  props: {
    flight: Object
  },
  components: {
    Button,
    IconClock,
    AirlineBadge,
    IconTakeoffAlt
  }
};
</script>

<style lang="scss" scoped>
.flight-card {
  display: flex;
  flex-flow: column nowrap;
  background-color: #ffffff;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.flight-card__banner {
  height: 9rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.flight-card__info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;

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
    font-size: 0.85rem;
    font-family: "Gilroy-Bold";
  }

  &__date,
  &__time {
    opacity: 0.4;
    font-size: 0.7rem;
  }
}

.airline {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem 1rem;
  line-height: 1;
  border-bottom: 1px solid #edeef6;

  &__info {
    display: flex;
    flex-direction: column;
    padding-left: 0.7rem;
  }

  &__name {
    font-size: 0.6rem;
    font-family: "Gilroy-Bold";
    margin: 0;
    text-transform: uppercase;
  }

  &__transit {
    opacity: 0.4;
    font-family: "Gilroy-Bold";
    font-size: 0.6rem;
    padding-top: 0.2rem;
  }

  &__duration {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 174, 239, 0.1);
    padding: 0.3rem 0.4rem;
    border-radius: 7px;
    color: #00aeef;
    font-family: "Gilroy-Bold";
    font-size: 0.6rem;
    margin-left: auto;

    .icon {
      color: #00aeef !important;
      font-size: 1rem;
      padding-right: 0.5rem;
    }
  }
}

.fare {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;

  &__desc {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  &__value {
    font-size: 1.2rem;
    font-family: "Gilroy-Bold";
    padding-bottom: 0.3rem;
  }

  &__deal {
    opacity: 0.4;
    font-size: 0.6rem;
    text-indent: 0.4rem;
  }

  .btn {
    height: auto;
    border-radius: 6rem !important;
    width: auto;
    padding: 0.4rem 1.25rem;
    font-weight: 500;
  }
}
</style>
