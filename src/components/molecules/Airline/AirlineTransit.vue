<template>
  <div
    :class="{
      airline: true,
      'airline--bordered': border,
      'airline--grow': grow
    }"
  >
    <AirlineBadge :logo="'/airlines/american-airlines.svg'" />
    <div class="airline__info">
      <h3 class="airline__name">
        <span v-for="(f, index) in airline" :key="index">{{ f + " " }}</span>
      </h3>
      <span
        class="airline__transit"
        v-text="`${airline.length} Transit${airline.length > 1 ? 's' : ''}`"
      ></span>
    </div>
    <div class="airline__duration" v-if="showDuration">
      <IconClock /><span v-text="'4h 32m'"></span>
    </div>
  </div>
</template>

<script>
import IconClock from "@/components/atoms/icons/IconClock";
import AirlineBadge from "@/components/molecules/Flight/AirlineBadge";

export default {
  name: "AirlineTransit",
  props: {
    airline: {
      required: true,
      type: Array
    },
    showDuration: {
      type: Boolean,
      default: true
    },
    border: Boolean,
    grow: Boolean
  },
  components: {
    AirlineBadge,
    IconClock
  }
};
</script>

<style lang="scss" scoped>
.airline {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem 1rem;
  line-height: 1;

  &--bordered {
    border-bottom: 1px solid #edeef6;
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding-left: 0.4rem;
  }

  &__name {
    font-size: 0.5rem;
    font-family: "Gilroy-Bold";
    margin: 0;
    text-transform: uppercase;
  }

  &__transit {
    opacity: 0.4;
    font-family: "Gilroy-Bold";
    font-size: 0.5rem;
    padding-top: 0.2rem;
  }

  &__duration {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 174, 239, 0.1);
    padding: 0.25rem 0.3rem;
    border-radius: 4px;
    color: #00aeef;
    font-family: "Gilroy-Bold";
    font-size: 0.55rem;
    margin-left: auto;

    .icon {
      color: #00aeef !important;
      font-size: 0.8rem;
      padding-right: 0.5rem;
    }
  }

  &--grow {
    flex-grow: 1;
  }
}
</style>
