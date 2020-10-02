<template>
  <section class="past-trip">
    <div class="past-trip__header">
      <h3 class="past-trip__header__title">Past trips</h3>
    </div>
    <div class="past-trip__list">
      <div class="grid-x blogs">
        <div class="large-6 cell">
          <past-trip-card
            :image="require('@/assets/orange-temple-161251.png')"
            :cities="{
              from: 'New York',
              to: 'Tokyo'
            }"
            :status="'Traveled'"
          />
        </div>
        <div class="large-6 cell">
          <past-trip-card
            :image="require('@/assets/the-roman-forum-2225440.png')"
            :cities="{
              from: 'New York',
              to: 'Rome'
            }"
            :status="'Canceled'"
          />
        </div>
      </div>
    </div>

    <div class="past-trips__more">
      <Button
        ><span style="padding-right: 0.5rem;">Load more</span><IconSort
      /></Button>
    </div>
  </section>
</template>

<script>
import Button from "@/components/atoms/Button";
import IconSort from "@/components/atoms/icons/IconSort";
import PastTripCard from "@/components/trip/pastTripCard";

export default {
  name: "PastTrip",
  components: {
    Button,
    IconSort,
    PastTripCard
  }
};
</script>

<style lang="scss">
.past-trip__header {
  margin-bottom: 1.5rem 0;
}
.past-trip__header__title {
  margin: 2rem 0;
  font-weight: 600;
  font-size: 1.7rem;
  color: black;
}

.past-trips__more {
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;

  .btn {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.5rem;
    width: 9rem;
    height: auto;
    border-radius: 10rem !important;
    color: #808080;
  }

  .icon {
    height: 1rem;
  }
}
</style>
