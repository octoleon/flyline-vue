<template>
  <div class="page page--how-it-works">
    <Navbar />

    <Container :dark="false" class="container--timeline">
      <section class="timeline-hiw">
        <div
          :class="{
            timeline__item: true,
            'timeline__item--reverse': i % 2 === 1
          }"
          v-for="(item, i) in timeline"
          :key="i"
        >
          <!-- <span class="timeline__item__bullet">
            <span class="icon" v-text="i + 1 < 10 ? `0${i + 1}` : i + 1"></span>
          </span> -->

          <div class="timeline__item__content">
            <div class="timeline__item__img">
              <img :src="item.img" alt="Timeline image" />
            </div>

            <div class="timeline__item__text">
              <h5 v-text="item.title"></h5>
              <p v-text="item.body"></p>
            </div>
          </div>

          <div class="timeline__item__separate">
            <div class="timeline__item__line" v-show="!item.next && item.line">
              <img :src="item.line" alt="Timeline Line" />

              <div
                class="timeline__item__number"
                :class="['timeline__item__number--' + (i + 1)]"
              >
                <img :src="item.number" alt="Timeline Number" />
              </div>
            </div>

            <div class="timeline__item__line" v-show="item.next">
              <img :src="item.line" alt="Timeline Line" />

              <div
                class="timeline__item__number"
                :class="['timeline__item__number--' + (i + 1)]"
              >
                <img :src="item.number" alt="Timeline Number" />
              </div>

              <div
                class="timeline__item__number"
                :class="['timeline__item__number--' + (i + 2)]"
              >
                <img :src="item.next" alt="Timeline Number" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>

    <SubFooter
      titleOne="Learn More"
      titleTwo="Get Started"
      linkOne="How it works"
      linkTwo="Pricing"
    ></SubFooter>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Container from "@/components/molecules/Container";
import SubFooter from "@/components/molecules/HowItWorks/SubFooter";

export default {
  name: "HowItWorks",
  components: {
    Navbar,
    Footer,
    Container,
    SubFooter
  },
  computed: {
    timeline() {
      return [
        {
          title: "Meta Search",
          img: "/images/how-it-works/meta_fare.svg",
          line: "/images/how-it-works/line-one.svg",
          number: "/images/how-it-works/one.svg",
          body:
            "Simultaneously search sites like TripAdvisor, Kayak, Google Flights and many more so you know you always get the best deal."
        },
        {
          title: "Auto-Linking",
          img: "/images/how-it-works/auto_linking.svg",
          line: "/images/how-it-works/line-two.svg",
          number: "/images/how-it-works/two.svg",
          body:
            "We seamlessly combine one-way flights to create unique routes that cost up to 60% less. These flights can't be found anywhere else on the net."
        },
        {
          title: "FlyLine Fares",
          img: "/images/how-it-works/flyline_fares.svg",
          line: "/images/how-it-works/line-three.svg",
          number: "/images/how-it-works/three.svg",
          body:
            "Directly book with all the major carriers from one location with no markups. Travel with confidence knowing your reservation is safe."
        },
        {
          title: "Manage trips from your dedicated flightdeck",
          img: "/images/how-it-works/manage_trips.svg",
          line: "/images/how-it-works/line-four.svg",
          number: "/images/how-it-works/five.svg",
          next: "/images/how-it-works/four.svg",
          body:
            "Use FlyLine to manage all the details of your flights, just like you would from the airlines’ sites."
        },
        {
          title: "Autopilot",
          img: "/images/how-it-works/auto_pilot.svg",
          body:
            "Automate searching and booking with your own robo travel agent so you never miss a fare."
        }
      ];
    }
  }
};
</script>

<style lang="scss">
.page--how-it-works {
  font-family: "Gilroy-Regular", sans-serif;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  > .hero {
    margin-top: 3.5rem;
    padding: 2.5rem 3.5rem;
    width: 960px;
    box-shadow: 20px 40px 70px 0 rgba(0, 0, 0, 0.16);
  }

  > .container {
    width: 960px;
    &--timeline {
      margin-top: 4rem;
    }

    &--padded {
      padding: 2.5rem;
    }
  }

  .timeline-hiw {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
  }

  .timeline-hiw {
    .timeline {
      &__title {
        font-size: 1.8rem;
        font-family: "Gilroy-Medium";
        letter-spacing: 1.5px;
        color: #0e3178;
        margin-bottom: 3.5rem;
      }

      &__item {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-flow: row wrap;
        padding: 0.5rem 0;

        &--reverse {
          .timeline__item {
            &__content {
              flex-flow: row-reverse wrap;
            }
            &__img {
              text-align: right;
            }
          }
        }

        &__content {
          display: flex;
          align-items: center;
          flex-flow: row wrap;
        }

        &__img {
          width: 35%;
          text-align: left;
        }
        &__text {
          width: 50%;
          margin-left: 3%;
        }

        &__text {
          background-color: transparent;
          padding: 0 1.5rem;
          border-radius: 1rem;
          border-top-left-radius: 0;

          h5 {
            color: #0e3178;
            font-family: gilroy-bold;
            font-size: 1.8rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
          }

          p {
            color: #040404;
            opacity: 0.5;
            font-size: 1rem;
            line-height: 2;
            margin-bottom: 0;
            font-family: "Gilroy-Medium";
          }
        }

        &__line {
          padding-top: 1rem;
          width: 88%;
          margin-left: 12%;
          position: relative;
        }

        &__number {
          position: absolute;
          left: -16px;
          top: 50%;
          transform: translateY(-50%);

          &--2 {
            top: 65%;
            right: -16px;
            left: unset;
          }
          &--3 {
            top: 38%;
          }
          &--4 {
            top: 53%;
          }
          &--5 {
            right: -16px;
            left: unset;
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
}
</style>
