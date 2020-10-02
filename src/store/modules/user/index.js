import * as M from "./mutation-types";
import * as actions from "./actions";
import * as getters from "./getters";

const mutations = {
  [M.SET_COMPANIONS](state, value) {
    state.companions = value;
  },
  [M.SET_INVITE_COMPANION_ERROR](state, value) {
    state.inviteCompanionError = value;
  },
  [M.SET_DEAL_WATCHES](state, value) {
    state.dealWatches = value;
  },
  [M.SET_USER](state, user) {
    state.user = user;
  },
  [M.SET_FREQUENT_FLYER](state, value) {
    state.frequentFlyer = value;
  },
  [M.setAuthError](state, value) {
    state.authErrorText = value;
  },
  [M.CLEAR_STATUS](state) {
    state.authErrorText = "";
  },
  [M.SET_UPCOMING_TRIPS](state, value) {
    state.upcomingTrips = value;
  },
  [M.SET_PAST_TRIPS](state, value) {
    state.pastTrips = value;
  },
  [M.SET_COMPANION_FORM_EMAIL](state, value) {
    state.companionForm.email = value;
  },
  [M.SET_DEAL_WATCH_FORM](state, value) {
    state.dealWatchForm = value;
  }
};

const state = {
  authErrorText: null,
  user: { anonymous: true },
  frequentFlyer: {},
  dealWatches: [],
  dealWatchForm: {
    destination: null,
    max_price: 0,
    airlines: []
  },
  companions: [],
  companionForm: {
    email: ""
  },
  inviteCompanionError: null,
  upcomingTrips: [],
  pastTrips: []
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
