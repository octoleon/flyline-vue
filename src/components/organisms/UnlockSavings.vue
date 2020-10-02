<template>
  <div class="unlock-savings">
    <h3 class="unlock-savings__title">Unlock the savings</h3>
    <Card>
      <div class="saving-feature">
        <div class="saving-feature__icon">
          <span>
            <img src="@/assets/images/ticket.svg" alt="ticket icon" />
          </span>
        </div>
        <div class="saving-feature__detail">
          <h4>Book confidently</h4>
          <p>
            We display prices from all the booking sites so you know you're
            getting the bst price
          </p>
        </div>
      </div>

      <div class="saving-feature">
        <div class="saving-feature__icon">
          <span>
            <img src="@/assets/images/wallet.svg" alt="wallet icon" />
          </span>
        </div>
        <div class="saving-feature__detail">
          <h4>Save hundreds</h4>
          <p>
            Our exclusive FlyLine fares, these are private discounted flights
            you can't find anywhere
          </p>
        </div>
      </div>

      <span class="saving-feature__more">Learn more</span>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/molecules/Card";

export default {
  name: "UnlockSavings",
  components: {
    Card
  }
};
</script>

<style lang="scss">
.unlock-savings {
  font-size: 11px;
  flex-grow: 1;

  .card {
    padding: 2rem;
  }

  &__title {
    font-family: "Gilroy-Bold";
    font-size: 16px;
    padding-bottom: 10px;
  }

  .saving-feature {
    display: flex;
    padding-bottom: 1rem;

    &:last-child {
      padding-bottom: 0;
    }

    &__more {
      font-size: 0.7rem;
      color: #00aeef;
      font-family: "Gilroy-Bold";
      cursor: pointer;
    }

    &__icon {
      width: 12rem;

      span {
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
      }

      img {
        background: rgba(0, 174, 239, 0.2);
        padding: 1rem 0.8rem;
      }
    }

    &__detail {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      h4 {
        font-family: "Gilroy-Bold";
        font-size: 0.9rem;
        margin: 0;
      }

      p {
        font-weight: 500;
        font-size: 0.75rem;
        opacity: 0.4;
        margin: 0;
        line-height: 1.25;
      }
    }
  }
}
</style>
