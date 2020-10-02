<template>
  <div
    class="overlay__landing"
    :class="{ overlay__visible: overlayVisibility }"
  >
    <a href.prevent="#" @click="onClick" class="close__button">
      <img src="@/assets/landing/cancel.png" alt="Close Overlay" />
    </a>
    <div class="circle--1"></div>
    <div class="circle--4"></div>
    <div class="overlay__landing__content">
      <div class="circle--2xs"></div>
      <div class="circle--3xs"></div>
      <div class="circle--4xs"></div>
      <h2>Get the FlyLine app to find and book flights without turbulence</h2>
      <p>
        What’s your number? We’ll text you a link to download the app. Or get it
        directly from the
        <a href="#">App Store</a> or <a href="#">Google Play</a>.
      </p>
      <div class="landing__form">
        <input
          type="text"
          placeholder="Enter your phone number"
          v-model="phoneNumber"
        />
        <Button type="primary" @click="sendLink()">Send link</Button>
      </div>
    </div>
    <div class="overlay__landing__footer">
      <span>
        By clicking “Send link”, you agree to the
        <a href.prevent="#">Terms of Service</a>
      </span>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";

export default {
  name: "OverlayLanding",
  props: ["overlayVisibility", "onClick"],
  data() {
    return {
      phoneNumber: ""
    };
  },
  components: {
    Button
  },
  methods: {
    sendLink: function() {
      fetch("http://localhost:8000/api/send-link/" + this.phoneNumber, {}).then(
        function(response) {
          alert("success");
          return response;
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.close__button {
  position: absolute;
  right: 112px;
  top: 64px;
}
.circle--1 {
  background-image: url("~@/assets/landing/circle_two.svg");
  height: 241px;
  width: 241px;
  position: absolute;
  left: -120px;
  top: 50px;
  background-repeat: no-repeat;
}
.circle--2xs {
  width: 25px;
  height: 25px;
  opacity: 0.66;
  border: solid 3px #00b1fa;
  border-radius: 50%;
  position: absolute;
  top: -60px;
  left: 25px;
}
.circle--3xs {
  width: 26px;
  height: 26px;
  opacity: 0.4;
  border: solid 3px #00b1fa;
  border-radius: 50%;
  position: absolute;
  bottom: -60px;
  right: -44px;
}
.circle--4xs {
  width: 72px;
  height: 72px;
  opacity: 0.08;
  border: solid 3px #0e3178;
  border-radius: 50%;
  position: absolute;
  bottom: -50px;
  left: -162px;
}
.circle--4 {
  background-image: url("~@/assets/landing/circle_four.svg");
  height: 241px;
  width: 241px;
  position: absolute;
  right: -120px;
  top: 233px;
  background-repeat: no-repeat;
}
.overlay__landing {
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  pointer-events: none;
}
.overlay__visible {
  pointer-events: all;
  opacity: 1;
  z-index: 999;
}
.overlay__landing__content {
  max-width: 676px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.overlay__landing__footer {
  position: absolute;
  bottom: 0;
  width: 533px;
  height: 69px;
  font-family: "Gilroy-Regular", "Open Sans", "Helvetica Neue", Helvetica,
    Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: #707070;
}
.landing__form {
  display: flex;
  justify-content: space-between;
  width: 567px;
  margin: 0 auto;
}
input[type="text"] {
  padding: 0 16px;
  width: 335px;
  height: 50px;
  border-radius: 15px;
  border: solid 1px #c3c3c3;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: normal;
  text-align: left;
  color: #c3c3c3;
  &::placeholder {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: left;
    color: #c3c3c3;
  }
}
h2 {
  width: 601px;
  margin: 0 auto 25px;
  font-family: "Gilroy-Bold";
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.8px;
  text-align: center;
  color: #0e3178;
}
p {
  width: 100%;
  font-family: "Gilroy-Medium", sans-serif;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: center;
  color: #707070;

  margin-bottom: 40px;
}
button {
  width: 212px;
  height: 50px;
  font-family: "Gilroy-SemiBold";
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.18px !important;
  text-align: left;
  color: #ffffff;
  border-radius: 30px !important;
  background-color: #00b1fa;
}
</style>
