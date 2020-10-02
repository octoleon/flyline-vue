<template>
  <div class="filter-toggle">
    <div class="filter-toggle-button__wrapper">
      <p class="filter-toggle-button__label">No Stops</p>
      <toggle-button
        :color="{ checked: '#00aeef', unchecked: '#d4d6e5' }"
        switch-color="#edeef6"
        :labels="false"
      />
    </div>
    <div class="filter-toggle-button__wrapper">
      <p class="filter-toggle-button__label">One Stop</p>
      <toggle-button
        :color="{ checked: '#00aeef', unchecked: '#d4d6e5' }"
        switch-color="#edeef6"
        :labels="false"
        :value="true"
      />
    </div>
    <div class="filter-toggle-button__wrapper">
      <p class="filter-toggle-button__label">Two Stops</p>
      <toggle-button
        :color="{ checked: '#00aeef', unchecked: '#d4d6e5' }"
        switch-color="#edeef6"
        :labels="false"
      />
    </div>
  </div>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";

export default {
  name: "PriceFilter",
  components: {
    ToggleButton
  }
};
</script>

<style scoped lang="scss">
.filter-toggle-button {
  &__wrapper {
    display: flex;
    margin-top: 30px;
  }
  &__label {
    opacity: 0.6;
    font-family: Gilroy;
    font-size: 0.7rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    flex: 1;
    margin-bottom: 0;
  }
}
</style>
