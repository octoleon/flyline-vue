<template>
  <div class="page--pricing">
    <Navbar />
    <Container class="mb-0">
      <PricingContent />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Container from "@/components/molecules/Container";
import PricingContent from "@/components/organisms/Pricing";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

export default {
  name: "Account",
  components: {
    Navbar,
    Container,
    PricingContent,
    Footer
  }
};
</script>

<style lang="scss">
.page--pricing {
  margin-bottom: 80px;
  // max-width: 1440px;
  // padding: 0px 120px;
  margin: auto;
  .container {
    padding: 60px 0px;
    margin-bottom: 80px;
  }
  .mb-0 {
    margin-bottom: 0 !important;
  }
}
</style>
