import api from "@/utils/http";
import * as M from "./mutation-types";

export function toggleLocationFilter({ commit, dispatch, state }, value) {
  if (state.locationFilter === value) {
    commit(M.SET_LOCATION_FILTER, null);
  } else {
    commit(M.SET_LOCATION_FILTER, value);
  }
  dispatch("fetchFeedDeals");
}

export function toggleAirline({ commit, dispatch }, value) {
  commit(M.TOGGLE_AIRLINE, value);
  dispatch("fetchFeedDeals");
}

export function reset({ commit }) {
  commit("RESET_DEALS");
}

export function fetchRandomDeals({ commit }) {
  api
    .get("/deals/")
    .then(response => {
      commit(M.SET_RANDOM_DEALS, response.data.results);
      commit(M.SET_RANDOM_DEALS_RETRIEVE_ERROR, false);
    })
    .catch(() => {
      commit(M.SET_RANDOM_DEALS_RETRIEVE_ERROR, true);
    });
}

export function fetchFeedDeals({ commit, state }) {
  let params = { size: 40 };
  if (state.locationFilter) {
    params.kind = state.locationFilter;
  }
  if (state.selectedAirlines.size > 0) {
    params.airlines = [...state.selectedAirlines].join(",");
  }
  api
    .get("/deals/", {
      params
    })
    .then(response => {
      commit(M.SET_FEED_DEALS, response.data.results);
      commit(M.SET_FEED_DEALS_RETRIEVE_ERROR, false);
    })
    .catch(() => {
      commit(M.SET_FEED_DEALS_RETRIEVE_ERROR, true);
    });
}

export function fetchUserDeals({ commit }, user) {
  if (user.anonymous) return;
  api
    .get("/deals/", {
      params: {
        city_from: `${user.market.type}:${user.market.code}`
      }
    })
    .then(response => {
      commit(M.SET_USER_DEALS, response.data.results);
      commit(M.SET_USER_DEALS_RETRIEVE_ERROR, false);
    })
    .catch(() => {
      commit(M.SET_USER_DEALS_RETRIEVE_ERROR, true);
    });
}
