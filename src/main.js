import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Autocomplete from "v-autocomplete";
import "v-autocomplete/dist/v-autocomplete.css";
import ToggleButton from "vue-js-toggle-button";
import HistogramSlider from "vue-histogram-slider";
import "vue-histogram-slider/dist/histogram-slider.css";
import "./styles/app.scss";

Vue.config.productionTip = false;
Vue.component(HistogramSlider.name, HistogramSlider);
Vue.use(ToggleButton);
Vue.use(Autocomplete);
Vue.use(require("vue-moment"));
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    Promise.all([
      this.$store.dispatch("user/initializeUser"),
      this.$store.dispatch("plans/initializePlans"),
      this.$store.dispatch("deals/fetchRandomDeals"),
      this.$store.dispatch("deals/fetchFeedDeals")
    ]).then(() => {
      let params = {
        app_id: "mkmh7651"
      };
      if (!this.$store.state.user.user.anonymous) {
        params.email = this.$store.state.user.user.email;
      }
      window.Intercom("boot", params);
    });
  }
}).$mount("#app");
