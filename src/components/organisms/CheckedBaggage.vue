<template>
  <div class="baggage">
    <h3 class="baggage__header">
      Checked baggage <small>(Select one option)</small>
    </h3>

    <div class="baggage__group">
      <BaggageCard
        :count="0"
        title="No checked baggage"
        :selected="selectedBaggage === 0"
        @click="selectedBaggage = 0"
      />
      <BaggageCard
        :count="1"
        title="1 checked bag"
        caption='46.9"x31.9"x46.9", 44.09 lbs'
        price="$116.87"
        :selected="selectedBaggage === 1"
        @click="selectedBaggage = 1"
      />
      <BaggageCard
        :count="2"
        title="2 checked bags"
        caption='46.9"x31.9"x46.9", 44.09 lbs'
        price="$233.72"
        :selected="selectedBaggage === 2"
        @click="selectedBaggage = 2"
      />
    </div>
  </div>
</template>

<script>
import BaggageCard from "@/components/molecules/BaggageCard";

export default {
  name: "CheckedBaggage",
  data() {
    return {
      selectedBaggage: 1
    };
  },
  components: {
    BaggageCard
  }
};
</script>

<style lang="scss">
.baggage {
  font-size: 11px;
  width: 100%;
  margin-right: 15px;
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

  &__group {
    display: flex;

    & > *:not(:last-child) {
      max-width: calc((100% / 3) - (2rem / 3));
      margin-right: 1rem;
    }
  }
}
</style>
