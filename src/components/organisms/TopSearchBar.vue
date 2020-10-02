<template>
  <div class="top-search-bar">
    <CitySelection />
    <div class="search-terms">
      <TopSearchTerm
        :label="'Flight'"
        :value="filter['flight']"
        :icon="'take-off.png'"
        :isCollapsible="true"
        :click="setToggle"
        :toggle="toggle['flight']"
        :id="'flight'"
      >
        <OptionsList
          :click="selectOption"
          :selected="filter['flight']"
          :list="list['flight']"
          :id="'flight'"
        />
      </TopSearchTerm>
      <TopSearchTerm
        :label="'Class'"
        :value="filter['service']"
        :icon="'star.png'"
        :isCollapsible="true"
        :click="setToggle"
        :toggle="toggle['service']"
        :id="'service'"
      >
        <OptionsList
          :click="selectOption"
          :selected="filter['service']"
          :list="list['service']"
          :id="'service'"
        />
      </TopSearchTerm>
      <TopSearchTerm
        :label="'Passengers'"
        :value="passengerString()"
        :icon="'user.png'"
        :isCollapsible="true"
        :click="setToggle"
        :toggle="toggle['passengers']"
        :id="'passengers'"
      >
        <PassengersList
          :click="changePassenger"
          :list="list['passengers']"
          :value="filter.passengers"
        />
      </TopSearchTerm>
    </div>
  </div>
</template>

<script>
import TopSearchTerm from "@/components/molecules/TopSearchTerm";
import OptionsList from "@/components/molecules/OptionsList";
import PassengersList from "@/components/molecules/PassengersList";
import CitySelection from "@/components/molecules/CitySelection";

export default {
  name: "TopSearchBar",
  components: {
    TopSearchTerm,
    OptionsList,
    PassengersList,
    CitySelection
  },
  data: function() {
    return {
      filter: {
        service: "Economy",
        flight: "Round Trip",
        passengers: {
          adults: 0,
          children: 0,
          infants: 0
        }
      },
      toggle: {
        service: false,
        flight: false,
        passengers: false
      },
      list: {
        service: ["Economy", "Premium Economy", "Business", "First Class"],
        flight: ["Round Trip", "One Way"],
        passengers: ["adults", "children", "infants"]
      }
    };
  },
  methods: {
    selectOption: function(value, filter) {
      this.filter[filter] = value;
      this.setToggle(filter);
    },
    setToggle: function(filter) {
      this.toggle[filter] = !this.toggle[filter];
      Object.keys(this.toggle).map(key => {
        if (key !== filter) this.toggle[key] = false;
      });
    },
    passengerString: function() {
      let str = "";
      const { adults, children, infants } = this.filter.passengers;
      if (adults > 0) {
        if (adults == 1) str += "1 adult ";
        else str += adults + " adults ";
      }
      if (children > 0) {
        if (children == 1) str += "1 child ";
        else str += children + " children ";
      }
      if (infants > 0) {
        if (infants == 1) str += "1 infant ";
        else str += infants + " infants ";
      }
      if (str === "") str = "None";
      return str;
    },
    changePassenger: function(option, count) {
      this.filter.passengers[option] += count;
    }
  }
};
</script>
<style scoped lang="scss">
.top-search-bar {
  margin-bottom: 6rem;
  display: flex;
  position: absolute;
  flex-direction: column;
}
.search-terms {
  display: flex;
}
</style>
