<template>
  <div>
    <div class="page page--how-it-works page page--landing page--landing--web">
      <Navbar :toggleOverlay="toggleOverlay" />
      <OverlayLanding
        :overlayVisibility="overlayVisibility"
        :onClick="closeOverlay"
      />
      <div class="full-width landing__wrapper landing__wrapper--1">
        <div class="top--line"></div>
        <div class="landing__section landing__section--1">
          <Container :padded="false">
            <section class="grid-x" style="margin-bottom: 80px;">
              <div class="cell small-6" style="padding-bottom: 80px;">
                <h1 style="width: 500px;" class="gilroy-semibold">
                  Travel planning
                  <div class="circle--1"></div>
                  <span class="gilroy-bold">
                    on autopilot
                    <div class="circle--2"></div>
                    <div class="circle--3"></div>
                  </span>
                </h1>
                <p class="gilroy-medium" style="width: 400px;">
                  Easily score the perfect flight with a powerful search,
                  exclusive fares and automated booking
                </p>
                <a href="javascript:void(0);">
                  <Button type="primary" @click="toggleOverlay()">
                    <div class="btn-send-content">
                      Send App to Your Phone
                      <img src="/images/icons/apple.svg" />
                      +
                      <img src="/images/icons/playstore.svg" />
                    </div>
                  </Button>
                </a>
              </div>
              <div class="cell small-6"></div>
            </section>
          </Container>
        </div>
      </div>

      <div class="full-width landing__wrapper landing__wrapper--2">
        <div class="top--line"></div>
        <div class="landing__section landing__section--2">
          <Container :padded="false">
            <section class="grid-x">
              <div
                style="height: 400px; width: 480px;"
                class="cell small-6"
              ></div>
              <div class="cell small-6" style="padding-bottom: 0px;">
                <h2 style="margin-left: 100px;">
                  Avoid the hassles of trip planning
                  <div class="circle--1"></div>
                </h2>
                <p style="margin-left: 100px;">
                  FlyLine is a single, easy-to-use place to search, book, and
                  manage flights. Search fares from all over the internet, or
                  turn on alerts and auto-booking to take the work out of
                  planning travel. Manage all your flights right in FlyLine,
                  from booking to seat selection.
                </p>
                <Button
                  type="primary"
                  style="margin-left: 100px;"
                  @click="goTo('How it works')"
                  >How it works</Button
                >
              </div>
            </section>
          </Container>
        </div>
      </div>

      <div
        style="padding-bottom: 0px;"
        class="landing__section landing__section--3"
      >
        <Container :padded="false">
          <section class="grid-x">
            <div class="cell small-7">
              <h2 style="width: 360px; margin-top: 80px;">
                <div class="circle--1"></div>
                Save up to 60% on airfare
                <div class="circle--2"></div>
              </h2>
              <p class="gilroy-medium" style="width: 420px;">
                FlyLine lets you search the best fares from all over the
                internet: direct bookings from 250+ airlines, metasearch
                services, and exclusive low fares we make by combining segments
                on different airlines. Select fares offer cashback to use on
                future travel.
              </p>
              <Button type="primary" @click="goTo('FareTypes')"
                >Savings Explained</Button
              >
            </div>
            <div
              class="cell small-5"
              style="margin-bottom: 160px; height: 400px;"
            ></div>
          </section>
        </Container>
      </div>
      <!--
      <div class="full-width landing__wrapper landing__wrapper--4">
        <div class="top--line"></div>
        <div class="landing__section landing__section--4">
          <Container :padded="false">
            <section class="grid-x">
              <div class="cell small-6"></div>
              <div class="cell small-6" style="height: 400px;">
                <h2>
                  A subscription that pays for itself

                  <div class="circle--1"></div>
                </h2>
                <p>
                  You’ll never pay booking fees or markups for flights —
                  everything's covered in your membership. Most members earn
                  back the cost with just two bookings.
                </p>
                <Button type="primary">FlyLine Premium</Button>
              </div>
            </section>
          </Container>
        </div>
      </div>
      -->
      <Container :padded="false">
        <SubFooter
          titleOne="Learn More"
          titleTwo="Get Started"
          linkOne="How it works"
          linkTwo="/typeform"
        ></SubFooter>
      </Container>
      <Footer />
    </div>
    <div class="page--landing--mobile">
      <div class="mobile-navbar">
        <MobileNavbarLogo />
      </div>
      <MobileHomeContent />
      <!-- style="border: 5px solid red;" -->
      <img
        class="img-to-bottom"
        src="../assets/images/Illustrations_two.svg"
        width="100%"
        height="100%"
      />
      <!-- <MobileFooter /> -->
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Container from "@/components/molecules/Container";
import SubFooter from "@/components/molecules/HowItWorks/SubFooter";

// import MobileFooter from "@/components/organisms/MobileFooter";
import MobileNavbarLogo from "@/components/molecules/MobileNavbarLogo";
import MobileHomeContent from "@/components/organisms/MobileHomeContent";
import OverlayLanding from "@/components/landing/overlayLanding";

export default {
  name: "Landing",
  components: {
    Navbar,
    Footer,
    Button,
    Container,
    SubFooter,
    MobileNavbarLogo,
    MobileHomeContent,
    OverlayLanding
    // MobileFooter
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
    position: relative;
    padding-top: 60px;
    display: none;
    .mobile-navbar {
      display: flex;
    }
    .img-to-bottom {
      margin-bottom: 0 !important;
      position: absolute;
      bottom: 0px;
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
