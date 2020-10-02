<template>
  <div class="location-input-item">
    <img :src="iconUrl" width="13px" height="13px" />
    <span>{{ formatPlace(item) }}</span>
  </div>
</template>

<script>
import { formatPlace } from "@/utils/utils";

const iconMapping = {
  airport: "take-off",
  city: "pin"
};

export default {
  props: {
    item: { required: true },
    searchText: { required: true }
  },
  methods: {
    formatPlace
  },
  computed: {
    iconUrl() {
      return require(`@/assets/images/${iconMapping[this.item.type]}.png`);
    }
  },
  name: "LocationInputItem"
};
</script>

<style lang="scss" scoped>
.location-input-item {
  background-color: white;
  margin-bottom: 1rem;
  span {
    font-family: Gilroy-Regular;
    font-size: 0.7rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    margin-left: 0.5rem;
  }
}
</style>
