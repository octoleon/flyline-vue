<template>
  <div class="page--booking">
    <Navbar :user="user" />
    <Container>
      <Back />
      <Stepper
        :steps="steps"
        @onStepUpdate="onStepUpdate"
        :currentStep="currentStep"
      />
      <div style="padding: 20px 0; min-width: 100%">
        <Callout text="Price confirmed. Enjoy your flight!" type="primary" />
        <Callout
          text="Free cancellation within the next 24 hours!"
          type="success"
        />
      </div>

      <div class="steps">
        <Flights v-if="currentStep === 0" />
        <PrimaryPassenger v-if="currentStep === 1" />
        <CheckedBaggage v-if="currentStep === 1" />
        <Carryon v-if="currentStep === 1" />
        <PaymentMethod v-if="currentStep === 2" />

        <StepNavigator @onClick="updateStep" :showCheckout="currentStep === 2">
          <span slot="checkout-text">Book flight for $121.99</span>
        </StepNavigator>
      </div>
      <TripSummary />
    </Container>
  </div>
</template>

<script>
import Back from "@/components/molecules/Back";
import Navbar from "@/components/organisms/Navbar";
import Callout from "@/components/molecules/Callout";
import Stepper from "@/components/molecules/Stepper";
import Flights from "@/components/organisms/Flights";
import Carryon from "@/components/organisms/CarryOn";
import Container from "@/components/molecules/Container";
import TripSummary from "@/components/organisms/TripSummary";
import PaymentMethod from "@/components/organisms/PaymentMethod";
import StepNavigator from "@/components/molecules/StepNavigator";
import CheckedBaggage from "@/components/organisms/CheckedBaggage";
import PrimaryPassenger from "@/components/organisms/PrimaryPassenger";

export default {
  name: "ConfirmBooking",
  data() {
    return {
      steps: ["Flight details", "Traveler details", "Payment method"],
      currentStep: 0
    };
  },
  computed: {
    user() {
      return {
        name: "Bojan Viner",
        img: "https://link-to-the-profile.pic"
      };
    }
  },
  components: {
    Back,
    Navbar,
    Stepper,
    Callout,
    Flights,
    Carryon,
    Container,
    TripSummary,
    StepNavigator,
    PaymentMethod,
    CheckedBaggage,
    PrimaryPassenger
  },
  methods: {
    onStepUpdate(step) {
      this.currentStep = step;
    },
    updateStep(incrBy) {
      const nextStep = this.currentStep + incrBy;

      if (nextStep < this.steps.length && nextStep > -1) {
        this.currentStep = nextStep;
      }
    }
  }
};
</script>

<style lang="scss">
.page {
  &--booking {
    margin-bottom: 40px;

    .container {
      margin-top: 20px;
    }

    .steps {
      min-width: calc(73% - 7.5px);
      max-width: calc(73% - 7.5px);
      margin-right: 15px;
    }
  }
}
</style>
