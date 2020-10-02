<template>
  <div class="flights">
    <h3 class="flights__header">Flight details</h3>
    <Card>
      <table border="0">
        <tbody>
          <tr class="flight">
            <td><IconPlane :reverse="true" /></td>
            <td class="flight__date">Sun, Mar 15 2020</td>
            <td>BEG 11:25</td>
            <td><span class="flight__duration">3h 5m</span></td>
            <td>LTN 13:30</td>
            <td rowspan="2">
              <span
                :class="{
                  'flight__more-info': true,
                  'flight__more-info--open': openDetails
                }"
                @click="toggleViewDetails"
                >View Details</span
              >
            </td>
          </tr>
          <tr>
            <td><IconPlane /></td>
            <td class="flight__date">Wed, Mar 25 2020</td>
            <td>LTN 14:05</td>
            <td><span class="flight__duration">7h 50m</span></td>
            <td>BEG 22:55</td>
          </tr>
        </tbody>
      </table>

      <TransitionExpand>
        <div v-if="openDetails">
          <FlightDetail />
        </div>
      </TransitionExpand>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/molecules/Card";
import FlightDetail from "@/components/molecules/FlightDetail";
import IconPlane from "@/components/atoms/icons/IconPlane";
import TransitionExpand from "@/components/molecules/Transitions/TransitionExpand";

export default {
  name: "Flights",
  props: {
    title: String
  },
  data() {
    return {
      openDetails: false
    };
  },
  components: {
    Card,
    IconPlane,
    FlightDetail,
    TransitionExpand
  },
  methods: {
    toggleViewDetails() {
      this.openDetails = !this.openDetails;
      this.$emit("toggleDetails", this.openDetails);
    }
  }
};
</script>

<style lang="scss">
.flights {
  font-size: 0.6rem;
  width: 100%;
  margin-right: 15px;

  &__header {
    font-family: "Gilroy-Bold";
    font-size: 1rem;
    padding-bottom: 10px;
  }
}

.flight {
  &__duration {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #d4d6e5;
    font-size: 0.5rem;

    &::before {
      margin-right: 10px;
    }

    &::after {
      margin-left: 10px;
    }

    &::before,
    &::after {
      content: "";
      height: 1px;
      width: 20px;
      border-bottom: 1px dashed #edeef6;
    }
  }

  &__more-info {
    color: #bbc4dc;
    font-size: 0.5rem;
    cursor: pointer;

    &::after {
      font-family: "FontAwesome";
      content: "\f0d7";
      padding-left: 5px;
    }

    &--open::after {
      content: "\f0d8";
    }
  }
}
</style>
