<template>
  <div class="hiw-content">
    <SubHeader />
    <div class="hiw-content__timelines">
      <h2 class="hiw-content__timelines__title">How it works</h2>
      <Timeline
        :url="'flights.png'"
        :title="'International Flights'"
        :description="
          'This is where the FlyLine really shines. Tons of miles don’t have to equal tons of zeroes; they can mean tons of savings! International flights are where the best deals on FlyLine are found.'
        "
        :number="'01'"
        :order="'right'"
      />
      <Timeline
        :url="'carriers.png'"
        :title="'Legacy Carriers'"
        :description="
          'Unlike low-cost carriers (Spirit, Frontier, etc.), which have already discounted their service down to a wholesale level, normal legacy carriers have markups that shoot their prices up. We bypass them.'
        "
        :number="'02'"
        :order="'left'"
      />
      <Timeline
        :url="'cities.png'"
        :title="'Major Cities'"
        :description="
          'Denver has tons of flights and tons of empty seats. Aspen, not so much. Major cities mean major savings. Plus, they typically have large airports which also have larger flights.'
        "
        :number="'03'"
        :order="'right'"
      />
      <Timeline
        :url="'fare.png'"
        :title="'Compare the Fare'"
        :description="
          'Unlike low-cost carriers (Spirit, Frontier, etc.), which have already discounted their service down to a wholesale level, normal legacy carriers have markups that shoot their prices up. We bypass them.'
        "
        :number="'04'"
        :order="'left'"
      />
      <Timeline
        :url="'alert.png'"
        :title="'Deal Alerts'"
        :description="
          'You should never miss a deal. Opt-in to customized eal alerts and whenever your target destinations have can’t-miss prices, we’ll let you know! If you follow these best practices, FlyLine will jet you to savings.'
        "
        :number="'05'"
        :order="'right'"
        :end="'end'"
      />
    </div>
    <div class="hiw-content__features">
      <Feature
        :url="'flyline-fares.png'"
        :title="'FlyLine Fares'"
        :description="'Exclusivity that saves you money'"
        :content="
          'A typical member will save 20%-60% with out exclusive FlyLine Fare.'
        "
        :highlightedText="'This is a $250 annual value.'"
        :order="'right'"
      />
      <Feature
        :url="'flyline-search.png'"
        :title="'FlyLine Search'"
        :description="'Transparency that saves you time'"
        :content="
          'A typical member will avoid 4+ additonal sites when searching with our one and done meta search.'
        "
        :highlightedText="'This is a 10 hour annual value'"
        :order="'left'"
      />
      <Feature
        :url="'flyline-deals.jpg'"
        :title="'FlyLine Deals'"
        :description="'Expertise that saves you from missed discounts'"
        :content="
          'A typical member will save up to 90% on mistake fares and fares drops without lifting a finger.'
        "
        :highlightedText="'This is a $500 annual value'"
        :order="'right'"
      />
    </div>
    <SubFooter />
  </div>
</template>

<script>
import SubHeader from "@/components/molecules/HowItWorks/SubHeader";
import Timeline from "@/components/molecules/HowItWorks/Timeline";
import Feature from "@/components/molecules/HowItWorks/Feature";

import SubFooter from "@/components/molecules/HowItWorks/SubFooter";

export default {
  name: "HowItWorksContent",
  components: {
    SubHeader,
    Timeline,
    Feature,
    SubFooter
  }
};
</script>
<style scoped lang="scss">
.hiw-content {
}
.hiw-content__timelines {
  margin-top: 30px;
  padding-top: 80px;
  border-radius: 30px;
  background-color: #f7f7fb;
}
.hiw-content__timelines__title {
  //-webkit-filter: blur(10px);
  //filter: blur(10px);
  font-family: Lato;
  font-size: 16px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 3.2px;
  text-align: center;
  color: #0e3178;
  text-transform: uppercase;
  margin-bottom: 40px;
}
</style>
