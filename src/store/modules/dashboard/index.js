import * as actions from "./actions";
import * as getters from "./getters";
import * as M from "./mutation-types";

const mutations = {
  [M.TOGGLE_SIDEBAR](state) {
    state.toggleSidebar = !state.toggleSidebar;
  },
  [M.SHOW_DASHBOARD_NAV](state) {
    state.showDashboardNavigation = true;
  },
  [M.HIDE_DASHBOARD_NAV](state) {
    state.showDashboardNavigation = false;
  }
};

const state = {
  toggleSidebar: false,
  showDashboardNavigation: true
};

export default {
  namespace: true,
  mutations,
  actions,
  getters,
  state
};
