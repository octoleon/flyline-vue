<template>
  <div class="result-row">
    <div class="result-row__flight" v-on:click="toggleDetail">
      <div class="result-row__flight__leg" v-if="departureRoutes.length > 0">
        <div class="result-row__col-1">
          <img
            alt="Vue logo"
            src="../../../assets/images/american-airlines-new-logo-vector@3x.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="result-row__col-1">
          <Airport
            :datetime="departureRoutes[0].local_departure"
            :city="departureRoutes[0].cityFrom"
          />
        </div>
        <div class="result-row__col-1">
          <Flight
            :duration="result.duration.departure"
            :stop="departureRoutes.length - 1"
            :returned="`0`"
          />
        </div>
        <div class="result-row__col-1">
          <Airport
            :datetime="
              departureRoutes[departureRoutes.length - 1].local_arrival
            "
            :city="departureRoutes[departureRoutes.length - 1].cityTo"
          />
        </div>
      </div>
      <div class="result-row__flight__leg" v-if="arrivalRoutes.length > 0">
        <div class="result-row__col-1">
          <img
            alt="Vue logo"
            src="../../../assets/images/american-airlines-new-logo-vector@3x.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="result-row__col-1">
          <Airport
            :datetime="arrivalRoutes[0].local_departure"
            :city="arrivalRoutes[0].cityFrom"
          />
        </div>
        <div class="result-row__col-1">
          <Flight
            :duration="result.duration.return"
            :stop="arrivalRoutes.length - 1"
            :returned="`1`"
          />
        </div>
        <div class="result-row__col-1">
          <Airport
            :datetime="arrivalRoutes[arrivalRoutes.length - 1].local_arrival"
            :city="arrivalRoutes[arrivalRoutes.length - 1].cityTo"
          />
        </div>
      </div>
    </div>
    <Booking :result="result" />
  </div>
</template>

<script>
import Airport from "@/components/molecules/ResultCard/Airport";
import Flight from "@/components/molecules/ResultCard/Flight";
import Booking from "@/components/molecules/ResultCard/Booking";
import { getRoutesWithReturn } from "@/utils/utils";

export default {
  name: "ResultCard",
  components: {
    Airport,
    Flight,
    Booking
  },
  props: ["result", "toggleDetail"],
  data() {
    return {
      departureRoutes: this.getRoutesWithReturn(this.result.route, 0),
      arrivalRoutes: this.getRoutesWithReturn(this.result.route, 1)
    };
  },
  methods: {
    getRoutesWithReturn
  }
};
</script>

<style scoped lang="scss">
.img-container {
  text-align: center;
}
.result-row {
  display: flex;
}
.result-row__flight {
  display: flex;
  flex: 3;
  border-right: 1px solid #edeef6;
  padding: 18px 35px;
  flex-direction: column;
  justify-content: center;
}
.result-row__flight__leg {
  display: flex;
}
.result-row__col-1 {
  flex: 1;
  display: flex;
  justify-content: center;
}
</style>
