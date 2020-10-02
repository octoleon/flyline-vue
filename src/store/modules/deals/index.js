import * as actions from "./actions";
import * as getters from "./getters";
import * as M from "./mutation-types";

const mutations = {
  [M.SELECT_AIRLINE](state, value) {
    state.selectedAirlines.add(value);
  },
  [M.DESELECT_AIRLINE](state, value) {
    state.selectedAirlines.delete(value);
  },
  [M.TOGGLE_AIRLINE](state, airline) {
    if (state.selectedAirlines.has(airline)) {
      state.selectedAirlines.delete(airline);
    } else {
      state.selectedAirlines.add(airline);
    }
  },
  [M.SET_LOCATION_FILTER](state, value) {
    state.locationFilter = value;
  },
  [M.RESET_FILTERS](state) {
    state.selectedAirlines = new Set();
    state.locationFilter = null;
  },
  [M.SET_RANDOM_DEALS](state, value) {
    state.randomDeals = value;
  },
  [M.SET_USER_DEALS](state, value) {
    state.userDeals = value;
  },
  [M.SET_RANDOM_DEALS_RETRIEVE_ERROR](state, value) {
    state.randomDealsRetrieveError = value;
  },
  [M.SET_USER_DEALS_RETRIEVE_ERROR](state, value) {
    state.userDealsRetrieveError = value;
  },
  [M.SET_FEED_DEALS](state, value) {
    state.feedDeals = value;
  },
  [M.SET_FEED_DEALS_RETRIEVE_ERROR](state, value) {
    state.feedDealsRetrieveError = value;
  },
  [M.RESET_DEALS](state) {
    state.userDealsRetrieveError = false;
    state.userDeals = null;
  }
};

const state = {
  randomDeals: null,
  userDeals: null,
  feedDeals: null,
  randomDealsRetrieveError: false,
  userDealsRetrieveError: false,
  feedDealsRetrieveError: false,
  selectedAirlines: new Set(),
  locationFilter: null
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
