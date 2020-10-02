<template>
  <span class="icon icon--takeoff">
    <span class="circle circle--small"></span>
    <span class="circle circle--medium"></span>
    <img src="@/assets/images/take-off.svg" alt="icon plane alternative" />
    <span class="circle circle--medium"></span>
    <span class="circle circle--small"></span>
  </span>
</template>

<script>
export default {
  name: "IconTakeoffAlt"
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.5);

  > * {
    margin-right: 0.25rem;
  }

  > *:last-child {
    margin-right: 0;
  }

  .circle {
    background-color: #00aeef;
    border-radius: 50%;
    display: inline-block;

    &--small {
      height: 0.2rem;
      width: 0.2rem;
      opacity: 0.2;
    }

    &--medium {
      height: 0.4rem;
      width: 0.4rem;
      opacity: 0.4;
    }
  }
}
</style>
