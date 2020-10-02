<template>
  <div class="trip-card trip-card--past">
    <div class="trip-card__header">
      <img :src="image" />
    </div>
    <div class="trip-card__body">
      <section class="section">
        <TripLocation :location="cities" :way="2" />
        <AirlineTransit :airline="airline" :grow="true" :showDuration="false" />
      </section>

      <TripStatus :status="status" />
    </div>
  </div>
</template>

<script>
import TripStatus from "@/components/molecules/Trip/TripStatus";
import TripLocation from "@/components/molecules/Trip/TripLocation";
import AirlineTransit from "@/components/molecules/Airline/AirlineTransit";

export default {
  name: "PastTripCard",
  props: {
    image: String,
    cities: Object,
    status: String
  },
  data() {
    return {
      airline: {
        name: "American Airlines",
        transits: 2,
        duration: "4h 32m",
        logo: "/airlines/american-airlines.svg"
      }
    };
  },
  components: {
    TripStatus,
    TripLocation,
    AirlineTransit
  }
};
</script>

<style lang="scss" scoped>
.trip-card {
  .airline {
    flex-grow: 1;
    padding: 0 0 0 2rem;

    .badge--airline img {
      padding: 0.8rem !important;
    }

    &__name,
    &__transit {
      font-size: 0.6rem;
    }

    &__transit {
      font-family: "Gilroy-Medium", sans-serif;
      color: #a2a2a2;
      opacity: 1;
    }
  }
}
</style>
