<template>
  <div class="flight">
    <p class="flight__content">{{ secs2hm(duration) }}</p>
    <img alt="flight icon" :src="getIcon" width="120" height="20" />
    <p class="flight__content">
      {{ stop === 0 ? "Direct" : stop === 1 ? "1 stop" : `${stop} stops` }}
    </p>
  </div>
</template>

<script>
import { secs2hm } from "@/utils/utils";
export default {
  name: "Airport",
  props: ["duration", "stop", "returned"],
  computed: {
    getIcon() {
      return this.returned === "0"
        ? require("../../../assets/images/departure.png")
        : require("../../../assets/images/return.png");
    }
  },
  methods: {
    secs2hm
  }
};
</script>

<style scoped lang="scss">
p {
  margin-bottom: 0;
}
.flight__content {
  opacity: 0.6;
  font-family: Gilroy;
  font-size: 0.7rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: normal;
  text-align: center;
  color: #bbc4dc;
}
</style>
