<template>
  <div class="trip-status">
    <div class="status-group">
      <Badge :round="false" :class="`trip__status--${status.toLowerCase()}`">{{
        status
      }}</Badge>
      <Badge :round="false" class="trip-status__time">
        <IconClock /> <span>4h 32m</span>
      </Badge>
      <Badge :round="false" class="trip-status__date">
        <span>Thu 28/03 - Mon 04/04</span>
      </Badge>
      <Badge :round="false" class="trip-status__passangers">
        <IconPeople /> <span>1</span>
      </Badge>
    </div>
    <span class="trip-status__price">751.00</span>
  </div>
</template>

<script>
import Badge from "@/components/atoms/Badge";
import IconClock from "@/components/atoms/icons/IconClock";
import IconPeople from "@/components/atoms/icons/IconPeople";

export default {
  name: "TripStatus",
  props: {
    status: String
  },
  components: {
    Badge,
    IconClock,
    IconPeople
  }
};
</script>

<style lang="scss">
.trip-status {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .status-group {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > * {
      font-family: "Gilroy-Medium", sans-serif;
      margin-right: 0.5rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }

  .badge {
    font-size: 0.6rem;
    color: #00abf5;
    padding: 0 0.6rem;
    height: 1.8rem;

    > .icon {
      padding-right: 0.3rem;
      font-size: 1rem;
      color: #00abf5;
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;

      img {
        height: 0.7rem;
      }
    }

    &.trip__status--confirmed {
      background-color: #34ad70;
      color: #ffffff;
    }

    &.trip-status--traveled {
      background-color: #a5ffd6;
      color: #21af6f;
    }

    &.trip-status--canceled {
      background-color: #fff4b0;
      color: #af9921;
    }
  }

  &__price {
    font-family: "Gilroy-SemiBold", sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    position: relative;
    letter-spacing: 0.6px;

    &::before {
      content: "$";
      position: absolute;
      top: 0rem;
      left: -0.7rem;
      font-size: 1rem;
      color: #a2a2a2;
    }
  }
}
</style>
