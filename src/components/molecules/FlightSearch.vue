<template>
  <div class="flight-search">
    <IconSearch />
    <input
      type="text"
      placeholder="Departure city or airport"
      v-model="i_departure"
      class="flight-search__departure"
    />
    <input
      type="text"
      placeholder="Arrival city or airport"
      v-model="i_arrival"
      class="flight-search__arrival"
    />
  </div>
</template>

<script>
import IconSearch from "@/components/atoms/icons/IconSearch";

export default {
  name: "FlightSearch",
  props: {
    value: {
      type: Object,
      required: false,
      default() {
        return {
          departure: "",
          arrival: ""
        };
      },
      validator(value) {
        return (
          value !== null &&
          Object.keys(value).filter(key =>
            ["departure", "arrival"].includes(key)
          ).length === 2
        );
      }
    }
  },
  data() {
    return {
      i_departure: "",
      i_arrival: ""
    };
  },
  watch: {
    i_departure(departure) {
      this.$emit("input", { departure, arrival: this.i_arrival });
    },
    i_arrival(arrival) {
      this.$emit("input", { arrival, departure: this.i_departure });
    }
  },
  components: {
    IconSearch
  }
};
</script>

<style lang="scss" scoped>
.flight-search {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;

  > * {
    margin-right: 1rem;
  }

  > *:last-child {
    margin-right: 0;
  }

  .icon {
    display: inline-flex;
    font-size: 1rem;
    background: #ffffff;
    width: 2.5rem;
    line-height: 2.5;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #edeef6;
    border-radius: 5rem;
    cursor: pointer;
  }

  &__departure,
  &__arrival {
    font-family: "Gilroy-Bold";
    width: 20rem;
    margin-bottom: 0;
    border: none;
    outline: none;
    border-radius: 0;
    padding: 0.5rem 0;
    font-size: 1.5rem;

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
      border-bottom: none;
    }
  }
}
</style>
