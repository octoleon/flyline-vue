<template>
  <div>
    <div class="membership-card-wrapper">
      <div class="plan-card radius-left bg-blue">
        <img :src="bgImg" alt="" />
        <ul class="plan-card__list">
          <li>
            <a href="#">Access to All Fare Types</a>
          </li>
          <li>
            <a href="#">Save Traveler Information</a>
          </li>
          <li>
            <a href="#">Free Automatic Check-In</a>
          </li>
          <li>
            <a href="#">No Booking Fees</a>
          </li>
          <li>
            <a href="#">Multiple Auto-PIlot Alerts </a>
          </li>
          <li>
            <a href="#">No Auto-Pilot Fees</a>
          </li>
          <li>
            <a href="#">Additional Companion</a>
          </li>
        </ul>
      </div>
      <div class="plan-card radius-none">
        <p class="basic-subtitle">FlyLine Basic</p>
        <p class="basic-title">Free</p>
        <div class="plan-card-button">
          <Button class="basic-btn">Get Started</Button>
        </div>
        <hr />
        <ul class="plan-card__checklist">
          <li>
            <img :src="checkImg" alt="" />
          </li>
          <li>
            <img :src="checkImg" alt="" />
          </li>
          <li>
            <img :src="checkImg" alt="" />
          </li>
          <li>
            <img :src="checkImg" alt="" />
          </li>
          <li>
            <img :src="closeImg" alt="" />
          </li>
          <li>
            <img :src="closeImg" alt="" />
          </li>
          <li>
            <img :src="closeImg" alt="" />
          </li>
        </ul>
      </div>
      <div class="plan-card radius-right">
        <div class="membership-card__title">
          FlyLine Premium
        </div>
        <div class="membership-card">
          <p class="premium-title">$8.99<span>/mo</span></p>
          <p class="premium-subtitle">Billed annually, $96/yr</p>
          <div class="plan-card-button">
            <Button class="premium-btn">Get Started</Button>
          </div>
          <hr />
          <ul class="plan-card__checklist">
            <li>
              <img :src="checkImg" alt="" />
            </li>
            <li>
              <img :src="checkImg" alt="" />
            </li>
            <li>
              <img :src="checkImg" alt="" />
            </li>
            <li>
              <img :src="checkImg" alt="" />
            </li>
            <li>
              <img :src="checkImg" alt="" />
            </li>
            <li>
              <img :src="checkImg" alt="" />
            </li>
            <li>
              <img :src="checkImg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="membership-card-notify">
      <div class="notify-head">
        <span class="notify-title">Booking Fees?</span>
        <span class="notify-mark-free">Free User</span>
      </div>
      <p class="notify-content">
        Guest or FlyLine Free users pay a small booking fee of $5 they book a
        FlyLine Fare and $10 if it’s a FlyLine Exclusive. Premium users avoid
        paying booking fees on FlyLine
      </p>
    </div>
    <div class="membership-card-notify">
      <div class="notify-head">
        <span class="notify-title">Fees Related to Auto-Pilot</span>
        <span class="notify-mark-free">Free User</span>
      </div>
      <p class="notify-content">
        Guest or FlyLine Free users pay a small booking fee of $5 they book a
        FlyLine Fare and $10 if it’s a FlyLine Exclusive. Premium users avoid
        paying booking fees on FlyLine
      </p>
    </div>
    <div class="membership-card-notify">
      <div class="notify-head">
        <span class="notify-title">Additional Companions</span>
        <span class="notify-mark-premium">Premium User</span>
      </div>
      <p class="notify-content">
        Guest or FlyLine Free users pay a small booking fee of $5 they book a
        FlyLine Fare and $10 if it’s a FlyLine Exclusive. Premium users avoid
        paying booking fees on FlyLine
      </p>
    </div>
    <p class="bottom-title">
      More questions? Click <a href="">HERE</a> to look at our Frequently Asked
      Questions
    </p>
  </div>
</template>

<script>
import checkImg from "@/assets/images/check.png";
import closeImg from "@/assets/images/close.png";
import bgImg from "@/assets/images/left-card-img.png";
import Vue from "vue";
import Button from "@/components/atoms/Button";
Vue.use(Button);

export default {
  name: "MemberShipPlan",
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      checkImg: checkImg,
      closeImg: closeImg,
      bgImg: bgImg
    };
  },
  computed: {}
};
</script>

<style lang="scss">
.membership-card-notify {
  display: inline-block;
  margin: 0 20px 30px 20px;
  width: 892px;
  height: 184px;
  border-radius: 30px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.09);
  background-color: #ffffff;
  .notify-head {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 25px 47px;
  }
  .notify-mark-free {
    padding: 10px 20px;
    margin-left: 20px;
    border-radius: 30px;
    background-color: #dff7ff;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.44;
    letter-spacing: 0.23px;
    text-align: center;
    color: #00aeef;
  }
  .notify-mark-premium {
    padding: 10px 20px;
    margin-left: 20px;
    border-radius: 30px;
    background-color: #0e3178;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.44;
    letter-spacing: 0.23px;
    text-align: center;
    color: #ffffff;
  }
  .notify-title {
    height: 35px;
    font-size: 26px;
    font-weight: bold;
    line-height: 1.42;
    letter-spacing: 0.37px;
    color: #0e3178;
  }
  .notify-content {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.67;
    text-align: left;
    color: #7b7b7b;
    margin: 0 47px;
  }
}
.bottom-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  color: #7b7b7b;
  margin-top: 80px;
  a {
    font-weight: bold;
    color: #00aeef;
  }
}
.plan-card {
  display: inline-block;
  width: 33.33% !important;
  box-shadow: 10px 20px 38px 0 rgba(111, 130, 167, 0.2);
  background-color: #ffffff;
  padding: 25px;
  text-align: left;
  .plan-card__list {
    list-style-type: none;
    margin: 0 0 0 30px;
    padding: 8px 25px 25px 25px;
    li {
      padding: 24px 0;
      a {
        color: white;
        font-weight: bold;
      }
    }
  }
  .plan-card__checklist {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      text-align: center;
      padding: 0;
      img {
        width: 73px;
      }
    }
  }
  .basic-subtitle {
    opacity: 0.8;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.33;
    text-align: center;
    color: #0e3178;
    margin-bottom: 72px;
  }
  .basic-title {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.45;
    text-align: center;
    color: #44cf57;
    margin-bottom: 60px;
  }
  .premium-title {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.45;
    text-align: center;
    color: #44cf57;
    margin: 10px 0;
    span {
      font-size: 18px;
      line-height: 40px;
      color: #7b7b7b;
    }
  }
  .premium-subtitle {
    font-size: 18px;
    font-weight: 600;
    line-height: 3.22;
    text-align: center;
    color: #7b7b7b;
  }
  hr {
    margin: 28px 0px;
    background-color: #d8d8d8;
  }

  .premium-btn {
    height: 44px;
    width: 100%;
    border-radius: 30px;
    background-color: #0e3178;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.44;
    letter-spacing: 0.23px;
    text-align: center;
    color: #ffffff;
  }
}
.basic-btn {
  height: 44px;
  width: 100%;
  border-radius: 30px;
  background-color: #dff7ff;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.44;
  letter-spacing: 0.23px;
  text-align: center;
  color: #00aeef;
}
.membership-card-wrapper {
  margin: 0 20px 76px 20px;
  width: 892px;
  border-radius: 30px;
  .membership-card__title {
    height: 30px;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.33;
    color: #ffffff;
    margin: 20px 0;
    text-align: center;
  }
  .membership-card {
    margin: 20px 0px 0px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 30px;
    border-bottom-left-radius: 0;
    padding: 25px;
  }
  .radius-left {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 0;
    img {
      margin-top: 30px;
      height: 307px;
    }
  }
  .radius-right {
    background-color: #0e3178;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 0;
  }
  .radius-none {
    border-radius: unset;
  }
  .bg-blue {
    background-color: #0e3178;
    color: white;
  }
}
</style>
