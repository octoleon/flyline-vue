import * as M from "./mutation-types";
import * as actions from "./actions";

const mutations = {
  [M.SET_PLANS](state, value) {
    state.plans = value;
  }
};

const state = {
  plans: null
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
