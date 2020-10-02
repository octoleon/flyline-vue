import * as M from "./mutation-types";

/**
 * Toggle Sidebar
 */
export function toggleSidebar({ commit }) {
  commit(M.TOGGLE_SIDEBAR);
}
