<template>
  <section class="next-trip">
    <div class="next-trip__header">
      <h3 class="next-trip__header__title">
        Your next trip is in <span class="color-primary">5 days</span>
      </h3>
      <div class="next-trip__header__control">
        <router-link to="/trip"><IconGrid /></router-link>
        <router-link to="/trip"><IconPreference /></router-link>
        <router-link to="/trip"><IconSearch /></router-link>
      </div>
    </div>
    <div class="next-trip__list">
      <div class="grid-x blogs">
        <div class="large-7 cell">
          <NextTripCard
            v-bind:image="require('@/assets/pexels-photo-2568906.png')"
            v-bind:cities="{
              from: 'Dallas',
              to: 'New York'
            }"
            status="Confirmed"
          />
        </div>
        <div class="large-5 cell">
          <TripSettingCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconGrid from "@/components/atoms/icons/IconGrid";
import NextTripCard from "@/components/trip/nextTripCard";
import IconSearch from "@/components/atoms/icons/IconSearch";
import TripSettingCard from "@/components/trip/tripSettingCard";
import IconPreference from "@/components/atoms/icons/IconPreference";

export default {
  name: "NextTrip",
  components: {
    IconGrid,
    IconSearch,
    NextTripCard,
    IconPreference,
    TripSettingCard
  }
};
</script>

<style lang="scss">
.next-trip__header__title {
  margin: 0 0 0.6rem 0;
  font-weight: 600;
  font-size: 1.7rem;
  color: black;
}

.next-trip__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.next-trip__header__control {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: inline-flex;

    .icon {
      color: #000000;
    }
  }
}
.next-trip__header__control > a {
  padding: 0 10px;
}
</style>
