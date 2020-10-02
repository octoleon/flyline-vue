<template>
  <div>
    <div class="page page page--referral page--landing--web">
      <Navbar />

      <div class="full-width">
        <Container
          :padded="false"
          class="landing__section landing__section--header"
        >
          <div class="circle--1"></div>
          <div class="circle--2"></div>
          <div class="circle--3"></div>
          <section class="grid-x">
            <div class="cell small-8 small-offset-2">
              <h1 class="gilroy-semibold">FlyLine Booking Credit</h1>
              <span class="gilroy-bold">Referral Program</span>
              <p class="gilroy-medium">
                Score the best airfare plus seamlessly manage your flights<br />
                all from a single location.
              </p>
            </div>
          </section>
        </Container>
      </div>

      <div class="full-width landing__wrapper landing__wrapper--headeer">
        <Container :padded="false">
          <div class="circle--1"></div>
          <section class="grid-x section" style="width: 100%;">
            <div class="cell small-4 content">
              <div style="width: 100%">
                <div class="image image-1"></div>
                <p class="title">Easy Breezy</p>
                <p>
                  Lorem ipsum dolor sitamet consectetur adipiscing elit, sir
                </p>
              </div>
            </div>

            <div class="cell small-4 content">
              <div style="width: 100%">
                <div class="image image-2"></div>
                <p class="title">Catch your breath</p>
                <p>
                  Take a deep breath, lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>

            <div class="cell small-4 content">
              <div style="width: 100%">
                <div class="image image-3"></div>
                <p class="title">Expandable savings</p>
                <p>It's great to lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </section>
        </Container>
      </div>

      <div class="full-width landing__wrapper landing__wrapper--block">
        <Container :padded="false">
          <div class="circle--1"></div>
          <SubFooter />
        </Container>
      </div>

      <div class="full-width landing__wrapper landing__wrapper--1">
        <div class="landing__section landing__section--1">
          <Container :padded="false">
            <section class="grid-x">
              <div class="cell small-6"></div>
              <div class="cell small-6" style="position: relative">
                <div class="circle--1"></div>
                <h2>Refer a Friend</h2>
                <h4>Exclusivity that saves you money</h4>
                <div class="divider"></div>
                <p>
                  You’ll never pay booking fees or markups for flights <br />
                  — everything's covered in your membership. Most members earn
                  back the cost with just two bookings.
                </p>
                <Button type="primary">How it works</Button>
              </div>
            </section>
          </Container>
        </div>
      </div>

      <div class="full-width landing__wrapper landing__wrapper--2">
        <div class="landing__section landing__section--2">
          <Container :padded="false">
            <section class="grid-x">
              <div class="cell small-6">
                <h2>Become an affiliate</h2>
                <h4>Exclusivity that saves you money</h4>
                <div class="divider"></div>
                <p>
                  You’ll never pay booking fees or markups for flights <br />
                  — everything's covered in your membership. Most members earn
                  back the cost with just two bookings.
                </p>
                <Button type="primary">How it works</Button>
              </div>
              <div class="cell small-6"></div>
            </section>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Container from "@/components/molecules/Container";
import SubFooter from "@/components/molecules/Referral/SubFooter";

export default {
  name: "Referral",
  components: {
    Navbar,
    Footer,
    Button,
    Container,
    SubFooter
  },
  data() {
    let construction = process.env.VUE_APP_CONSTRUCTION
      ? process.env.VUE_APP_CONSTRUCTION.toLowerCase()
      : "false";
    let constructionVisibility = ["true", "1", "on"].includes(construction);
    return {
      overlayVisibility: false,
      constructionVisibility
    };
  },
  methods: {
    closeOverlay() {
      this.toggleOverlay();
    },
    toggleOverlay() {
      this.overlayVisibility = !this.overlayVisibility;
      if (this.overlayVisibility) {
        document.querySelector("body").classList.add("hide-scroll");
      } else {
        document.querySelector("body").classList.remove("hide-scroll");
      }
    },
    goTo(page) {
      this.$router.push({ name: page });
    }
  }
};
</script>
<style lang="scss">
.page {
  &--landing--mobile {
    min-height: 100vh;
    background-color: #f7f9fc;

    padding-top: 60px;
    display: none;

    .mobile-navbar {
      display: flex;
    }
  }

  @media only screen and (max-width: 600px) {
    &--landing--web {
      display: none !important;
    }
    &--landing--mobile {
      display: block !important;
    }
  }
}
</style>
