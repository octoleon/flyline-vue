<template>
  <Card class="flight">
    <div class="flight__header">
      <h3><IconPlane :reverse="true" /> <span>Departure</span></h3>
      <span>3h 5m</span>
    </div>
    <table class="flight__body">
      <thead>
        <tr>
          <th>Date</th>
          <th>Details</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sun, Mar 15</td>
          <td>
            <span>11:25 - 13:30</span><br />
            <span>Belgrade (BEG) - London (LTN)</span><br />
            <span>American Airlines 1082 - Airbus A312</span>
          </td>
          <td>3h 5m</td>
        </tr>
      </tbody>
    </table>

    <div class="flight__header">
      <h3><IconPlane /> <span>Return</span></h3>
      <span>7h 50m</span>
    </div>
    <table class="flight__body">
      <thead>
        <tr>
          <th>Date</th>
          <th>Details</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wed, Mar 25</td>
          <td>
            <span>14:05 - 16:30</span><br />
            <span>London (STN) - Karlsruhe (FKB)</span><br />
            <span>Turkish Airlines - Boeing 777</span><br />
            <span class="flight__layover"><IconClock /> 4h 40m layover</span>
          </td>
          <td>1h 25m</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Date</th>
          <th>Details</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wed, Mar 25</td>
          <td>
            <span>21:10 - 22:55</span><br />
            <span>Karlsruhe (FKB) - Belgrade (BEG)</span><br />
            <span>Turkish Airlines - Airbus A312</span><br />
          </td>
          <td>1h 25m</td>
        </tr>
      </tbody>
    </table>
  </Card>
</template>

<script>
import Card from "@/components/molecules/Card";
import IconPlane from "@/components/atoms/icons/IconPlane";
import IconClock from "@/components/atoms/icons/IconClock";

export default {
  name: "FlightDetail",
  props: {
    title: String
  },
  data() {
    return {};
  },
  components: {
    Card,
    IconPlane,
    IconClock
  }
};
</script>

<style scoped lang="scss">
.flight {
  margin-top: 1rem;
  background: #fbfbff;
  padding: 1rem 2rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Gilroy-Bold";
    font-size: 0.8rem;
    border-bottom: 1px solid #edeef6;
    padding-bottom: 1rem;

    h3 {
      display: inline-flex;
      font-size: 1rem;
      padding: 0;
      margin: 0;
      justify-content: space-between;
      align-items: center;
      font-family: "Gilroy-Bold";

      span:last-child {
        padding-left: 0.6rem;
      }
    }
  }

  &__body {
    margin-left: 1rem;
    margin-top: 1rem;

    th {
      color: #bbc4dc;
      font-size: 0.7rem;
    }

    th,
    td {
      font-weight: 400;
      text-align: left;
    }

    td {
      color: #3a3f5c;
      line-height: 1.5rem;
      vertical-align: top;
    }
  }

  &__layover {
    padding: 1.2rem 0;
    display: inline-block;

    & > .icon {
      padding-right: 0.5rem;
    }
  }
}
</style>
