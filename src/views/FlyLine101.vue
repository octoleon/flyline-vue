<template>
  <div class="page page--flyline101">
    <Navbar />

    <Hero>
      <div slot="title" class="hero__title">Here’s how we save you.</div>
      <div slot="description" class="hero__description">
        We mash together one-way flights from different carriers to get the
        cheapest options available. 80% of the time, this process alone gets you
        the best deal on the internet. We’re so good at it that we even call
        ourselves FlyLine! (Virtual Interlining just doesn’t have the same ring
        to it)
      </div>
    </Hero>

    <Container :dark="true">
      <div class="timeline timeline--alt">
        <div
          :class="{
            timeline__item: true,
            'timeline__item--reverse': i % 2 === 1
          }"
          v-for="(item, i) in timeline"
          :key="i"
        >
          <div
            class="timeline__item__number"
            v-text="i + 1 < 10 ? `0${i + 1}` : i + 1"
          ></div>
          <span class="timeline__item__bullet"><IconCircle /></span>
          <div class="timeline__item__text">
            <h5 v-text="item.title"></h5>
            <p v-text="item.body"></p>
          </div>
        </div>
      </div>
    </Container>

    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/molecules/Hero";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Container from "@/components/molecules/Container";
import IconCircle from "@/components/atoms/icons/IconCircle";

export default {
  name: "Trip",
  components: {
    Hero,
    Navbar,
    Footer,
    Container,
    IconCircle
  },
  computed: {
    timeline() {
      return [
        {
          title: "International Flights",
          body:
            "This is where the FlyLine really shines. Tons of miles don’t have to equal tons of zeroes; they can mean tons of savings! International flights are where the best deals on FlyLine are found."
        },
        {
          title: "Legacy Carriers",
          body:
            "Unlike low-cost carriers (Spirit, Frontier, etc.), which have already discounted their service down to a wholesale level, normal legacy carriers have markups that shoot their prices up. We bypass them."
        },
        {
          title: "Major Cities",
          body:
            "Denver has tons of flights and tons of empty seats. Aspen, not so much. Major cities mean major savings. Plus, they typically have large airports which also have larger flights."
        },
        {
          title: "Compare the Fare",
          body:
            "Unlike low-cost carriers (Spirit, Frontier, etc.), which have already discounted their service down to a wholesale level, normal legacy carriers have markups that shoot their prices up. We bypass them."
        },
        {
          title: "Deal Alerts",
          body:
            "You should never miss a deal. Opt-in to customized eal alerts and whenever your target destinations have can’t-miss prices, we’ll let you know! If you follow these best practices, FlyLine will jet you to savings."
        }
      ];
    }
  }
};
</script>

<style lang="scss">
.page--flyline101 {
  font-family: "Gilroy-Regular", sans-serif;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  > .hero {
    margin-top: 1.5rem;
    padding: 2.5rem 3.5rem;
    width: 960px;
  }

  > .container {
    margin-top: 1.5rem;

    &--padded {
      padding: 2.5rem;
      margin-bottom: 3rem;
    }
  }

  .timeline {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;

    &__item {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-flow: row wrap;
      padding: 1rem 0;

      &--reverse {
        flex-flow: row-reverse wrap;

        .timeline__item {
          &__number {
            text-align: left;
          }

          &__text {
            text-align: right;
            border-top-left-radius: 1rem;
            border-top-right-radius: 0;
          }
        }
      }

      &__number,
      &__text {
        width: 40%;
      }

      &__number {
        text-align: right;
        color: #0e3178;
        font-size: 5rem;
        opacity: 0.1;
        font-weight: 600;
        line-height: 1.2;
      }

      &__text {
        background-color: #ffffff;
        padding: 1.5rem;
        border-radius: 1rem;
        border-top-left-radius: 0;

        h5 {
          font-size: 0.9rem;
          font-weight: 600;
        }

        p {
          color: #7b7b7b;
          font-size: 0.8rem;
          margin-bottom: 0;
        }
      }

      &__bullet {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 3rem;
        position: relative;

        &::after {
          position: absolute;
          content: "";
          top: 50%;
          height: 300%;
          width: 1px;
          background-color: #0e3178;
          z-index: 1;
          opacity: 0.1;
        }

        > .icon {
          display: inline-flex;
          border-radius: 5rem;
          width: 2rem;
          height: 2rem;
          border: 0.5px solid #dee2ee;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          z-index: 2;
        }

        > .icon::before {
          color: #0e3178;
          font-size: 0.4rem;
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
</style>
