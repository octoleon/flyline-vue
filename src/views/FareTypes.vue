<template>
  <div class="page page--faretypes">
    <Navbar />

    <Container>
      <section class="features-hiw">
        <div
          :class="{ feature: true, 'feature--reverse': i % 2 === 1 }"
          v-for="(feature, i) in features"
          :key="i"
        >
          <div
            class="feature__image"
            style="padding-top: 60px; padding-bottom: 20px;"
          >
            <img :src="feature.img" :alt="feature.heading" />
          </div>
          <div class="feature__details" style="padding-top: 60px;">
            <h3 class="feature__heading" v-text="feature.heading"></h3>
            <p class="feature__subheading" v-text="feature.subheading"></p>

            <p class="feature__description">
              {{ feature.body }}
              <a href="#" class="feature__link" v-text="feature.link_text"></a>
            </p>
          </div>
        </div>
      </section>
    </Container>

    <Container :padded="false">
      <SubFooter />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SubFooter from "@/components/molecules/FareType/SubFooter";
import Container from "@/components/molecules/Container";

export default {
  name: "HowItWorks",
  components: {
    SubFooter,
    Navbar,
    Footer,
    Container
  },
  computed: {
    timeline() {
      return [
        {
          title: "The best fares from everywhere",
          img: "/images/how-it-works/international-flights.svg",
          body:
            "Search fares from more than 250 airlines from a single place. Save all your traveler information so you can book with a click."
        },
        {
          title: "Get deals delivered",
          img: "/images/how-it-works/legacy-carriers.svg",
          body:
            "Set a few preferences and our army of internet robots will do the searching for you. We’ll alert you the second we find a great deal, which can be up to 60% off a standard fare."
        },
        {
          title: "Automatically book the best",
          img: "/images/how-it-works/major-cities.svg",
          body:
            "The best fares go fast. FlyLine can auto-book fares that meet your preferences so you won’t miss out. You’ll have 24 hours to confirm — if you don’t confirm you don’t pay."
        },
        {
          title: "Manage trips from your dedicated flightdeck (that’s us)",
          img: "/images/how-it-works/compare-the-fare.svg",
          body:
            "Use FlyLine to manage all the details of your flights, just like you would from the airlines’ sites. Select seats, make updates and cancellations, check upgrades, and more."
        },
        {
          title: "A subscription that pays for itself",
          img: "/images/how-it-works/deal-alerts.svg",
          body:
            "Everything’s included in your subscription fee, which most members earn back with just two bookings. No fare markups, no booking fees, no surprises."
        }
      ];
    },
    features() {
      return [
        {
          heading: "Direct Bookings",
          subheading: "Exclusivity that saves you money",
          img: "/images/how-it-works/illustration_one.svg",
          body:
            "FlyLine Fares are sourced directly from more than 250+ airlines with no markup. You can even earn up to 4% credit back to use for future travel."
        },
        {
          heading: "Meta Searches",
          subheading: "Transparency that saves you time",
          img: "/images/how-it-works/illustration_two.svg",
          body:
            "We include results from metasearch services like Kayak and TripAdvisor. Which means we’re kind of like a metasearch."
        },
        {
          heading: "FlyLine Exclusives",
          subheading: "Expertise that saves you from missed discounts",
          img: "/images/how-it-works/illustration_three.svg",
          body:
            "Our exclusive AutoLink fares are discounted up to 60% by combining one-way tickets on different airlines. Connection times are factored in to make sure you — and your bags — can make the flight."
        }
      ];
    }
  }
};
</script>

<style lang="scss">
.page--faretypes {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  font-family: "Gilroy-Regular", sans-serif;

  > .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 968px;
    padding: 2.5rem 3.5rem;
    margin-top: 1.5rem;
  }

  > .container {
    width: 960px;
    &--timeline {
      margin-top: 1.5rem;
    }

    &--padded {
      padding: 2.5rem;
    }
  }

  .features-hiw,
  .timeline-hiw {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .timeline-hiw {
    .timeline {
      &__title {
        margin-bottom: 1rem;
        color: #0e3178;
        font-family: "Gilroy-Medium";
        font-size: 0.8rem;
        letter-spacing: 1.5px;
        text-transform: uppercase;
      }

      &__item {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: flex-start;
        padding: 1rem 0;

        &--reverse {
          flex-flow: row-reverse wrap;

          .timeline__item {
            &__img {
              text-align: left;
            }

            &__text {
              text-align: right;
              border-top-right-radius: 0;
              border-top-left-radius: 1rem;
            }
          }
        }

        &__img,
        &__text {
          width: 40%;
        }

        &__img {
          text-align: right;
        }

        &__text {
          padding: 1.5rem;
          padding-top: 0;
          background-color: transparent;
          border-radius: 1rem;
          border-top-left-radius: 0;

          h5 {
            font-family: gilroy-bold;
            font-size: 1rem;
            font-weight: 600;
          }

          p {
            margin-bottom: 0;
            color: #7b7b7b;
            font-size: 0.8rem;
          }
        }

        &__bullet {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 3rem;
          font-size: 0.6rem;

          &::after {
            content: "";
            position: absolute;
            top: 50%;
            z-index: 1;
            width: 1px;
            height: 600%;
            background-color: #0e3178;
            opacity: 0.1;
          }

          > .icon {
            z-index: 2;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            height: 2rem;
            color: #000;
            font-weight: 600;
            background-color: #fff;
            border: 0.5px solid #dee2ee;
            border-radius: 5rem;
          }
        }
      }

      &__item:last-child {
        .timeline__item__bullet::after {
          height: 0;
        }
      }
    }
  }

  .features-hiw {
    .btn {
      width: 6.5rem;
      height: auto;
      font-size: 0.65rem;
      line-height: 2rem;
      border-radius: 30px !important;
    }

    .feature {
      display: flex;
      justify-content: center;
      align-items: center;

      &--reverse {
        flex-direction: row-reverse;
      }

      > * {
        padding: 1rem 0;
      }

      &__image {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        width: 60%;
      }

      &__details {
        display: flex;
        flex-flow: column nowrap;
        width: 40%;
      }

      &__heading {
        color: #0e3178;
        font-family: "Gilroy-Bold";
        font-size: 2.4rem;
      }

      &__subheading {
        position: relative;
        color: #333;
        font-family: "Gilroy-SemiBold";
        font-size: 1rem;

        &::after {
          content: "";
          position: absolute;
          bottom: -0.75rem;
          left: 0;
          display: inline-block;
          width: 4.5rem;
          height: 0;
          border-bottom: 1.5px solid #0e3178;
        }
      }

      &__line {
        color: #00aeef;
      }

      &__description {
        color: #040404;
        opacity: 0.5;
        font-size: 1rem;
        line-height: 2;
        margin-bottom: 0;
        font-family: "Gilroy-Medium";
      }
    }
  }
}
</style>
