<template>
  <div class="trip page--trip">
    <Navbar />
    <Container :dark="true">
      <NextTrip />
      <PastTrip />
    </Container>
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar";
import Container from "@/components/molecules/Container";
import NextTrip from "@/components/molecules/Trip/NextTrip";
import PastTrip from "@/components/molecules/Trip/PastTrip";

export default {
  name: "Trip",
  components: {
    Navbar,
    Container,
    NextTrip,
    PastTrip
  }
};
</script>

<style lang="scss">
.page--trip {
  font-family: "Gilroy-Regular", sans-serif;
}

.page--trip > .container {
  margin-top: 1.5rem;
  padding: 2.5rem 3.5rem;
  width: 1160px;
}
</style>
