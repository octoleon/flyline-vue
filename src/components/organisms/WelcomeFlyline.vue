<template>
  <Card title="Welcome To FlyLine!" class="welcome-flyline">
    <p
      style="width: 380px; font-size: .9rem; font-family: Gilroy-Medium; color: #BBC4DC;"
    >
      You’re ready for takeoff. Start searching for your next trip, or turn on
      alerts and auto-booking and we’ll do the work for you.
    </p>

    <Row>
      <div>
        <ul class="social__icons">
          <li style="width: 26px;">
            <router-link to="/notifications"><IconInstragram /></router-link>
          </li>
          <li style="width: 26px;">
            <router-link to="/notifications"><IconTwitter /></router-link>
          </li>
          <li style="width: 26px;">
            <router-link to="/notifications"><IconFacebook /></router-link>
          </li>
          <li style="width: 26px;">
            <router-link to="/notifications"><IconMedium /></router-link>
          </li>
        </ul>
      </div>
    </Row>
  </Card>
</template>

<script>
import Card from "@/components/molecules/Card";
import Row from "@/components/molecules/Grid/Row";
import IconInstragram from "@/components/atoms/icons/IconInstragram";
import IconTwitter from "@/components/atoms/icons/IconTwitter";
import IconFacebook from "@/components/atoms/icons/IconFacebook";
import IconMedium from "@/components/atoms/icons/IconMedium";

export default {
  name: "WelcomeFlyline",
  components: {
    Row,
    Card,
    IconInstragram,
    IconFacebook,
    IconTwitter,
    IconMedium
  }
};
</script>

<style lang="scss">
.welcome-flyline {
  margin-right: 15px;
  width: calc(50% - 7.5px);
  box-shadow: 0 0 5px 0 rgba(43, 57, 94, 0.06);
}
.social__icons {
  list-style: none;
  display: inline-flex;
  margin: 0;
  padding: 0;
  height: 32px;
  padding-top: 4px;
  background: #e3f8fe;
  border-radius: 20px;
  padding-left: 5px;
  padding-right: 5px;
  li {
    padding: 0 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-family: "Gilroy-Bold";
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #0e3178;
  }
}
</style>
