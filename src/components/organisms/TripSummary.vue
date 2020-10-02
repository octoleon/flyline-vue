<template>
  <div class="trip-summary">
    <h3 class="trip-summary__title">Trip summary</h3>

    <Card class="deal">
      <div class="deal__header">
        <div class="deal__title">
          <span>Don't miss this deal!</span>
          <span class="deal__time-remaining">17m 32sec</span>
        </div>
        <div class="deal__clock">
          <div>
            <img src="@/assets/images/timer.svg" alt="Clock Icon" />
          </div>
        </div>
      </div>

      <table border="0" class="deal__summary">
        <tbody>
          <tr>
            <td>1 Passenger</td>
            <td>$121.99</td>
          </tr>
          <tr>
            <td>Baggage</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Automatic flight chech-in</td>
            <td>FREE</td>
          </tr>
          <tr class="deal__coupon-input">
            <td colspan="2">
              <input type="text" placeholder="Promocode" />
              <button class="btn">Apply</button>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$121.99</td>
          </tr>
          <tr class="deal__coupon">
            <td>Coupon applied</td>
            <td>-$12</td>
          </tr>
        </tbody>
      </table>

      <table border="0" class="deal__total">
        <tbody>
          <tr>
            <td>Total</td>
            <td>$121.99</td>
          </tr>
        </tbody>
      </table>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/molecules/Card";

export default {
  name: "FlightDetails",
  props: {
    title: String
  },
  components: {
    Card
  }
};
</script>

<style lang="scss">
.trip-summary {
  font-size: 11px;
  max-width: calc(27% - 7.5px);
  flex-grow: 1;

  &__title {
    font-family: "Gilroy-Bold";
    font-size: 16px;
    padding-bottom: 10px;
  }
}

.deal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;

  & > * {
    margin: 18px 15px;
    width: 100%;
  }

  &__header {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    border-bottom: 1px solid #edeef6;
  }

  &__title {
    width: 65%;
    display: flex;
    flex-direction: column;
  }

  &__time-remaining {
    color: #fe8930;
    font-size: 20px;
    font-family: "Gilroy-SemiBold";
  }

  &__clock {
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: center;

    div {
      background-color: rgba(254, 137, 48, 0.1);
      padding: 7px 8px;
      border-radius: 50%;
    }
  }

  &__summary {
    border-spacing: 0 0.5rem;
    margin-bottom: 0;

    tr > td:first-child {
      color: #bbc4dc;
    }

    tr > td:nth-child(even) {
      text-align: right;
      font-weight: 700;
    }
  }

  &__coupon-input {
    td {
      position: relative;
    }

    input {
      height: 2rem;
      border-radius: 25px !important;
      border-color: #edeef6;
      font-size: 12px;
      vertical-align: middle;
      display: inline-block;
      margin: 1rem 0;
      padding-left: 1rem;
      padding-right: 4rem;
    }

    .btn {
      position: absolute;
      border: none;
      background: transparent;
      color: #00aeef;
      right: 1px;
      top: 1.05rem;
      font-size: 12px;
      width: auto;
      padding: 0 1rem;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1);

      &:hover {
        background-color: rgba(0, 175, 245, 0.2);
      }
    }
  }

  &__coupon {
    td:last-child {
      color: #fe3030;
    }

    td {
      margin-bottom: 0.5rem;
    }
  }

  &__total {
    border-top: 1px solid #edeef6;
    padding: 1rem 0 0.5rem 0;

    td:first-child {
      font-size: 0.8rem;
      color: #3a3f5c !important;
    }

    td:last-child {
      font-size: 1.5rem;
      color: #40ce53;
      text-align: right;
    }
  }
}
</style>
