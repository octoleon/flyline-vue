import * as actions from "./actions";
import * as getters from "./getters";
import state from "./state";
import mutations from "./mutations";

const register = {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
};

export default register;
