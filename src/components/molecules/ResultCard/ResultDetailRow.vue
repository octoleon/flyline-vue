<template>
  <div class="result-detail-row">
    <div class="result-detail-row__header">
      <img alt="flight icon" :src="getIcon" width="20" height="20" />
      <span class="result-detail-row__header__title">
        {{ returned === "0" ? "Departure" : "Return" }}
      </span>
      <span class="result-detail-row__header__duration">
        {{
          returned === "0"
            ? secs2hm(duration.departure)
            : secs2hm(duration.return)
        }}
      </span>
    </div>
    <div v-for="route in routes" v-bind:key="route.id">
      <div class="result-detail-row__content">
        <div class="result-detail-row__content__col-1">
          <p class="result-detail-row__content__header">
            Date
          </p>
          <p class="result-detail-row__content__paragraph">
            {{ route.local_departure | moment("ddd, MMM DD") }}
          </p>
        </div>
        <div class="result-detail-row__content__col-3">
          <p class="result-detail-row__content__header">
            Details
          </p>
          <p class="result-detail-row__content__paragraph">
            {{ route.local_departure | moment("HH:MM") }} -
            {{ route.local_arrival | moment("HH:MM") }}
          </p>
          <p class="result-detail-row__content__paragraph">
            {{
              `${route.cityFrom} (${route.cityCodeFrom}) - ${route.cityTo} (${route.cityCodeTo})`
            }}
          </p>
          <p class="result-detail-row__content__paragraph">
            {{ `${route.airline} ${route.flight_no} - Airbus A312` }}
          </p>
        </div>
        <div class="result-detail-row__content__col-1">
          <p class="result-detail-row__content__header">
            Duration
          </p>
          <p class="result-detail-row__content__paragraph">
            {{ secs2hm(route.duration) }}
          </p>
        </div>
      </div>
      <div class="result-detail-row__content" v-if="route.layover">
        <div class="result-detail-row__content__col-1"></div>
        <div class="result-detail-row__content__col-3">
          <img
            alt="Vue logo"
            src="../../../assets/images/clock.svg"
            width="16"
            height="16"
          />
          <span class="result-detail-row__content__header">
            {{ secs2hm(route.layover) }} layover
          </span>
        </div>
        <div class="result-detail-row__content__col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { secs2hm } from "@/utils/utils";

export default {
  name: "ResultDetailRow",
  props: ["routes", "returned", "duration"],
  computed: {
    getIcon() {
      return this.returned === "0"
        ? require("../../../assets/images/departure-icon.png")
        : require("../../../assets/images/return-icon.png");
    }
  },
  methods: {
    secs2hm
  }
};
</script>

<style scoped lang="scss">
.result-detail-row {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
}
.result-detail-row__header__title {
  font-family: Gilroy;
  font-size: 1.2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  color: #3a3f5c;
  margin-left: 10px;
}
.result-detail-row__header {
  width: 100%;
  position: relative;
  padding-bottom: 20px;
  border-bottom: 1px solid #edeef6;
}
.result-detail-row__header__duration {
  font-family: Gilroy;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #3a3f5c;
  position: absolute;
  right: 0;
}
.result-detail-row__content {
  display: flex;
  flex-direction: row;
  padding-top: 25px;
  padding-left: 30px;
}
.result-detail-row__content__col-1 {
  flex: 1;
}
.result-detail-row__content__col-3 {
  flex: 3;
}
.result-detail-row__content__header {
  opacity: 0.4;
  font-family: Gilroy;
  font-size: 0.7rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #bbc4dc;
  margin-bottom: 0;
  margin-bottom: 5px;
}
.result-detail-row__content__paragraph {
  font-family: Gilroy;
  font-size: 0.8rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #3a3f5c;
  margin-bottom: 0;
}
</style>
