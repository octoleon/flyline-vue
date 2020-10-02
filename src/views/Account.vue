<template>
  <div class="page--account">
    <Navbar />
    <Container :dark="true">
      <WelcomeFlyline />
      <DownloadApp />
      <TravelerInformation />
      <FrequentFlyerMiles />
      <DealAlertNotifications />
      <AdditionalUsers />
      <SubscriptionManagement />
    </Container>
    <Container>
      <Footer />
    </Container>
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar";
import Container from "@/components/molecules/Container";
import AdditionalUsers from "@/components/organisms/AdditionalUsers";
import FrequentFlyerMiles from "@/components/organisms/FrequentFlyerMiles";
import WelcomeFlyline from "@/components/organisms/WelcomeFlyline";
import DownloadApp from "@/components/organisms/DownloadApp";
import TravelerInformation from "@/components/organisms/TravelerInformation";
import DealAlertNotifications from "@/components/organisms/DealAlertNotifications";
import SubscriptionManagement from "@/components/organisms/SubscriptionManagement";
import Footer from "@/components/organisms/Footer";

export default {
  name: "Account",
  components: {
    Navbar,
    Container,
    AdditionalUsers,
    FrequentFlyerMiles,
    TravelerInformation,
    WelcomeFlyline,
    DownloadApp,
    DealAlertNotifications,
    SubscriptionManagement,
    Footer
  }
};
</script>

<style lang="scss">
.page {
  &--account {
    margin-bottom: 40px;

    .container {
      margin-top: 20px;
    }
  }
}
</style>
