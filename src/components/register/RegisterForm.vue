<template>
  <Card class="card--register" title="Create your account to get started">
    <RegisterTabs :active="activeTab" @onChange="onRegisterTabChange" />

    <SlideXLeftTransition :duration="{ enter: 300, leave: 0 }">
      <PersonalInformation
        @onNext="onRegisterTabChange('payment')"
        v-show="!showPayment"
        key="personal"
      />
    </SlideXLeftTransition>
    <SlideXLeftTransition :duration="{ enter: 300, leave: 0 }">
      <PaymentInformation
        @onNext="onRegisterTabChange('personal')"
        v-show="showPayment"
        key="payment"
      />
    </SlideXLeftTransition>
  </Card>
</template>

<script>
import Card from "@/components/molecules/Card";
import RegisterTabs from "@/components/molecules/Register/RegisterTabs";
import PaymentInformation from "@/components/molecules/Register/PaymentInformation";
import PersonalInformation from "@/components/molecules/Register/PersonalInformation";
import { SlideXLeftTransition } from "vue2-transitions";

export default {
  name: "RegisterForm",
  data() {
    return {
      activeTab: "personal"
    };
  },
  computed: {
    showPayment() {
      return this.activeTab === "payment";
    }
  },
  methods: {
    onRegisterTabChange(tab) {
      if (this.activeTab === tab) return;

      this.$emit("tabSwitched");
      this.activeTab = tab;
    }
  },
  components: {
    Card,
    RegisterTabs,
    PaymentInformation,
    PersonalInformation,
    SlideXLeftTransition
  },
  mounted() {
    document.body.style.overflow = "hidden";
  },
  beforeDestroy() {
    document.body.style.overflow = "unset";
  }
};
</script>

<style lang="scss">
.card--register {
  box-shadow: 0 0 40px 0 rgba(43, 57, 94, 0.06);
  max-width: 30rem;
  padding: 1rem 0;
  overflow: visible;

  .card__title {
    padding: 0 1.5rem;
  }

  .row {
    width: 100%;
  }
}
</style>
