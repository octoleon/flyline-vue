<template>
  <div class="dashboard">
    <h3 class="dashboard__title">Dashboard</h3>
    <DashboardCard :title="'Trips Taken'" :icon="'take-off.png'">
      <div class="trips-taken">
        <div class="right-border">
          <h4>3</h4>
          <p>Domestic</p>
        </div>
        <div>
          <h4>0</h4>
          <p>International</p>
        </div>
      </div>
    </DashboardCard>
    <DashboardCard :title="'Estimated Savings'" :icon="'coin.png'">
      <div class="estimated-savings">
        <div>
          <h4>$221</h4>
        </div>
        <div class="right">
          <p>Savings</p>
        </div>
      </div>
    </DashboardCard>
    <DashboardCard :title="'Popular Destinations'" :icon="'pin.png'">
      <div class="popular-destinations">
        <h5>Mumbai (BOM)</h5>
        <h5>Los Angeles (LAX)</h5>
        <h5>Antalya (AYT)</h5>
        <h5>Amsterdam (AMS)</h5>
      </div>
    </DashboardCard>
  </div>
</template>

<script>
import DashboardCard from "@/components/molecules/DashboardCard";

export default {
  name: "Dashboard",
  components: {
    DashboardCard
  }
};
</script>

<style lang="scss">
.dashboard {
  font-size: 11px;
  flex-grow: 1;

  h4 {
    font-family: Gilroy;
    font-size: 36px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.89;
    letter-spacing: normal;
    text-align: center;
    color: #3a3f5c;
    margin-bottom: 0;
  }
  p {
    opacity: 0.4;
    font-family: Gilroy;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #3a3f5c;
    margin-bottom: 0;
  }
  h5 {
    font-family: Gilroy;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    margin-bottom: 10px;
  }
  &__title {
    font-family: "Gilroy-Bold";
    font-size: 16px;
    padding-bottom: 10px;
  }
  .trips-taken {
    display: flex;
    .right-border {
      border-right: solid 1px #edeef6;
    }
    div {
      flex: 1;
      padding: 20px 0;
    }
  }
  .estimated-savings {
    display: flex;
    padding: 20px 30px;
    div {
      flex: 1;
    }
    .right {
      padding: 10px 0;
    }
    h4 {
      text-align: left;
    }
    p {
      text-align: right;
    }
  }
  .popular-destinations {
    padding: 20px 30px;
    padding-bottom: 10px;
  }
}
</style>
