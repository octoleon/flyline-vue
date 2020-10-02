<template>
  <div class="carryon">
    <h3 class="carryon__header">Carry-on <small>(Select one option)</small></h3>

    <div class="carryon__group">
      <CarryonCard
        v-for="(types, i) in carryons"
        :key="i"
        :types="types"
        :selected="i === selectedCarryon"
        @click="selectedCarryon = i"
      />
    </div>
  </div>
</template>

<script>
import CarryonCard from "@/components/molecules/CarryonCard";

export default {
  name: "Carryon",
  data() {
    return {
      selectedCarryon: 1,
      carryons: [
        [{ title: "Personal item", caption: `15.7"x7.9"x9.8", 19.84 lbs` }],
        [
          { title: "Personal item", caption: `15.7"x7.9"x9.8", 19.84 lbs` },
          { title: "Cabin bag", caption: `21.7"x7.9"x15.7", 22.05 lbs` }
        ],
        [{ title: "Cabin bag", caption: `21.7"x7.9"x15.7", 22.05 lbs` }]
      ]
    };
  },
  components: {
    CarryonCard
  }
};
</script>

<style lang="scss">
.carryon {
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
