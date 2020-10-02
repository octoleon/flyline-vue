<template>
  <Card
    title="Subscription management"
    :fullWidth="true"
    class="subscription-management"
  >
    <Row class="subscriptions">
      <SubscriptionCard
        title="Basic"
        :features="basic.features"
        :price="basic.cost"
      />

      <SubscriptionCard
        title="Premium"
        :features="premium.features"
        :price="premium.cost"
        :current="true"
      />
    </Row>
  </Card>
</template>

<script>
import Card from "@/components/molecules/Card";
import Row from "@/components/molecules/Grid/Row";
import SubscriptionCard from "@/components/molecules/SubscriptionCard";

export default {
  name: "SubscriptionManagement",
  data() {
    return {
      basic: {
        cost: {
          value: 49.99,
          coverage: "Per year"
        },
        features: [
          "Flight search and book",
          "Auto check-in",
          "Max of 6 bookings",
          "Access to FlyLine portal",
          "Deal alerts"
        ]
      },
      premium: {
        cost: {
          value: 79.99,
          coverage: "Per year"
        },
        features: [
          "Flight search and book",
          "Auto check-in",
          "Max of 6 bookings",
          "Access to FlyLine portal",
          "Deal alerts",
          "Companion account"
        ]
      }
    };
  },
  components: {
    Row,
    Card,
    SubscriptionCard
  }
};
</script>

<style lang="scss">
.subscription-management {
  width: 100%;
}
.subscriptions {
  padding: 15px 0;
}
</style>
