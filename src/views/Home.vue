<template>
  <div class="page--home">
    <div class="page--home--web">
      <Navbar />
      <Container :padded="false" class="container--hero">
        <Tagline>Save Time & Money with FlyLine</Tagline>
        <FlightSearch v-model="flight" />
        <FlightSearchFilter />
      </Container>

      <Container :dark="true">
        <BestDeals :deals="flights"></BestDeals>
        <div class="flight-aside">
          <Dashboard />
          <UnlockSavings />
          <TrendingFlights :flights="flights" />
        </div>
      </Container>

      <Footer />
    </div>
    <div class="page--home--mobile">
      <div class="mobile-navbar">
        <MobileNavbarLogo />
      </div>
      <MobileHomeContent />
      <img
        src="../assets/images/Illustrations_two.png"
        width="100%"
        height="100%"
      />
      <MobileFooter />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar";
import Tagline from "@/components/molecules/Tagline";
import Container from "@/components/molecules/Container";
import FlightSearch from "@/components/molecules/FlightSearch";
import FlightSearchFilter from "@/components/molecules/FlightSearchFilter";
import TrendingFlights from "@/components/organisms/TrendingFlights";
import UnlockSavings from "@/components/organisms/UnlockSavings";
import Dashboard from "@/components/organisms/Dashboard";

import BestDeals from "@/components/organisms/BestDeals";
import Footer from "@/components/organisms/Footer";
import MobileFooter from "@/components/organisms/MobileFooter";
import MobileNavbarLogo from "@/components/molecules/MobileNavbarLogo";
import MobileHomeContent from "@/components/organisms/MobileHomeContent";

export default {
  name: "Home",
  data() {
    return {
      flight: {
        departure: "",
        arrival: ""
      },
      flights: [
        {
          departure: {
            airport: "London (LGA)",
            date: "Sat, Mar 31",
            time: "05:00 AM"
          },
          arrival: {
            airport: "Mexico (MEX)",
            date: "Mon, Apr 2",
            time: "08:00 AM"
          },
          airline: {
            name: "American Airlines",
            transits: 2,
            duration: "4h 32m",
            logo: "/airlines/american-airlines.svg"
          },
          banner: "/places/city-1.jfif",
          thumb: "/places/city-s-1.png",
          fare: "$751.00"
        },
        {
          departure: {
            airport: "London (LGA)",
            date: "Sat, Mar 31",
            time: "05:00 AM"
          },
          arrival: {
            airport: "Mexico (MEX)",
            date: "Mon, Apr 2",
            time: "08:00 AM"
          },
          airline: {
            name: "American Airlines",
            transits: 2,
            duration: "4h 32m",
            logo: "/airlines/american-airlines.svg"
          },
          banner: "/places/city-2.png",
          thumb: "/places/city-s-2.png",
          fare: "$751.00"
        },
        {
          departure: {
            airport: "London (LGA)",
            date: "Sat, Mar 31",
            time: "05:00 AM"
          },
          arrival: {
            airport: "Mexico (MEX)",
            date: "Mon, Apr 2",
            time: "08:00 AM"
          },
          airline: {
            name: "American Airlines",
            transits: 2,
            duration: "4h 32m",
            logo: "/airlines/american-airlines.svg"
          },
          banner: "/places/city-4.jfif",
          thumb: "/places/city-s-3.png",
          fare: "$751.00"
        },
        {
          departure: {
            airport: "London (LGA)",
            date: "Sat, Mar 31",
            time: "05:00 AM"
          },
          arrival: {
            airport: "Mexico (MEX)",
            date: "Mon, Apr 2",
            time: "08:00 AM"
          },
          airline: {
            name: "American Airlines",
            transits: 2,
            duration: "4h 32m",
            logo: "/airlines/american-airlines.svg"
          },
          banner: "/places/london-1.jfif",
          thumb: "/places/city-s-4.png",
          fare: "$751.00"
        }
      ]
    };
  },
  components: {
    Dashboard,
    Navbar,
    Tagline,
    Footer,
    BestDeals,
    Container,
    FlightSearch,
    UnlockSavings,
    TrendingFlights,
    FlightSearchFilter,
    MobileNavbarLogo,
    MobileHomeContent,
    MobileFooter
  }
};
</script>

<style lang="scss">
.page {
  &--home {
    .container.container--dark {
      padding: 2rem;
      margin-bottom: 3.5rem;
    }

    .flight__search {
      height: auto;
      border-radius: 6rem !important;
      width: auto;
      padding: 0 2.9rem;
      font-weight: 500;
    }

    .container--hero {
      padding-bottom: 2rem;
    }

    .flight-aside {
      width: 35%;
    }
  }
  &--home--mobile {
    min-height: 100vh;
    background-color: #f7f9fc;

    padding-top: 60px;
    display: none;
    .mobile-navbar {
      display: flex;
    }
  }
  @media only screen and (max-width: 600px) {
    &--home--web {
      display: none;
    }
    &--home--mobile {
      display: block;
    }
  }
}
</style>
