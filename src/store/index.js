import Vue from "vue";
import Vuex from "vuex";
import dashboard from "./modules/dashboard";
import deals from "./modules/deals";
import plans from "./modules/plans";
import user from "./modules/user";
import search from "./modules/search";
import register from "./modules/register";

/**
 * load all store modules
 * @return {any} the store config
 */
function loadStore() {
  return {
    dashboard,
    deals,
    plans,
    user,
    search,
    register
  };
}

Vue.use(Vuex);
export default new Vuex.Store({
  modules: loadStore(),
  strict: process.env.NODE_ENV !== "production"
});
