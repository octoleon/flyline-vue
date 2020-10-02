<template>
  <div class="stepper">
    <ul class="stepper__progress">
      <li
        v-for="(step, index) in steps"
        :key="index"
        :class="{
          stepper__step: true,
          'stepper__step--active': index === currentStep,
          'stepper__step--complete': index < currentStep
        }"
        @click="$emit('onStepUpdate', index)"
      >
        <span v-text="step"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    steps: {
      type: Array,
      required: true,
      validator: steps => Array.isArray(steps) && steps.length > 0
    },
    currentStep: {
      type: Number,
      required: false,
      default: 0,
      validator: currentStep => currentStep > -1
    }
  },
  components: {}
};
</script>

<style lang="scss">
.stepper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 100%;
  color: #d4d6e5;

  &__progress {
    counter-reset: step;
    list-style: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  &__step {
    position: relative;
    font-size: 0.7rem;
    display: inline-flex;
    flex-flow: column;
    flex-wrap: wrap;
    padding: 0 5.5rem;

    &::before {
      font-family: "FontAwesome";
      content: "\f111";
      counter-increment: step;
      height: 16px;
      width: 16px;
      line-height: 1;
      border: 2px solid rgba(12, 49, 119, 0.2);
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: white;
      font-weight: 700;
      font-size: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 8px;
      color: rgba(0, 0, 0, 0);
      transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: rgba(12, 49, 119, 0.2);
      top: 15px;
      left: -50%;
      z-index: -1;
    }

    &:first-child:after {
      content: none;
    }

    &--active {
      color: #3a3f5c;

      &::before {
        color: #00aeef;
        box-shadow: 0 0px 3px rgba(12, 49, 119, 0.2);
        border-color: #ffffff;
      }
    }

    &--complete {
      color: #3a3f5c;

      &::before {
        content: "\f058";
        color: #00aeef;
        background-color: #fff;
        font-size: 1.1rem;
        border-color: #00aeef;
        box-shadow: 0px 0px 6px rgba(12, 49, 119, 0.4);
      }
    }

    &--active,
    &--complete {
      &::after {
        background-color: #00aeef;
      }
    }
  }
}
</style>
