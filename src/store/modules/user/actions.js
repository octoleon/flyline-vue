import api from "@/utils/http";
import { processTrips, userStorage } from "@/store/modules/user/utils";
import * as M from "./mutation-types";

export function fetchCompanions({ commit }) {
  api.get("/companion/").then(response => {
    commit(M.SET_COMPANIONS, response.data);
  });
}

export function inviteCompanion({ commit, state }) {
  api
    .post("/companion/", state.companionForm)
    .then(response => {
      commit(M.SET_COMPANIONS, [...state.companions, response.data]);
      commit(M.SET_INVITE_COMPANION_ERROR, null);
    })
    .catch(e => {
      commit(M.SET_INVITE_COMPANION_ERROR, e.response.data.error.code);
    });
}

export function deleteCompanion({ commit, state }, id) {
  api.delete(`/companion/${id}/`).then(() => {
    commit(
      "SET_COMPANIONS",
      state.companions.filter(o => o.id !== id)
    );
  });
}

export function saveFrequentFlyer({ commit, state }) {
  api.patch("/users/me/frequentflyer/", state.frequentFlyer).then(response => {
    commit(M.SET_FREQUENT_FLYER, response.data);
  });
}

export function saveAccount({ commit, state }) {
  api.patch("/users/me/", state.user).then(response => {
    commit(M.SET_USER, { ...state.user, ...response.data });
  });
}

export function clearStatus({ commit }) {
  commit(M.CLEAR_STATUS);
}

export function fetchFrequentFlyer({ commit }) {
  api.get("/users/me/frequentflyer/").then(response => {
    commit(M.SET_FREQUENT_FLYER, response.data);
  });
}

export function fetchDealWatches({ commit }) {
  api.get("/deal-watch/").then(response => {
    commit(M.SET_DEAL_WATCHES, response.data);
  });
}

export function addDealWatch({ commit, state }) {
  api.post("/deal-watch/", state.dealWatchForm).then(response => {
    commit(M.SET_DEAL_WATCHES, [...state.dealWatches, response.data]);
  });
}

export function deleteDealWatch({ commit, state }, id) {
  api.delete(`/deal-watch/${id}/`).then(() => {
    commit(
      M.SET_DEAL_WATCHES,
      state.dealWatches.filter(o => o.id !== id)
    );
  });
}

export function initializeUser({ commit, dispatch }) {
  if (localStorage.getItem("authToken") === null) {
    return;
  }
  return api
    .get("/users/me/")
    .then(response => {
      const user = Object.assign({}, { anonymous: false }, response.data);
      commit(M.SET_USER, user);
      dispatch("fetchFrequentFlyer");
      dispatch("fetchDealWatches");
      dispatch("fetchCompanions");
      dispatch("fetchTrips");
    })
    .catch(err => {
      if (err.response.status === 401) {
        userStorage.dropSession();
        commit(M.SET_USER, { anonymous: true });
        dispatch("deals/reset", null, { root: true });
      }
    });
}

export function cancelPlan({ dispatch }) {
  api.post("subscriptions/cancel-subscription/").then(() => {
    dispatch("initializeUser");
  });
}

export function logOut({ commit }) {
  api.post("/auth/logout/").then(() => {
    localStorage.removeItem("authToken");
    commit(M.SET_USER, { anonymous: true });
    window.Intercom("shutdown");
  });
}

export async function authenticate({ commit, dispatch }, params) {
  const { email, password } = params;
  commit(M.setAuthError, null);
  let response;
  try {
    response = await api.post(
      "/auth/login/",
      {},
      {
        headers: {
          Authorization: "Basic " + btoa(`${email}:${password}`)
        }
      }
    );
  } catch (error) {
    if (error.response.status === 401) {
      commit(M.setAuthError, "Incorrect Email or Password");
    } else {
      commit(M.setAuthError, "Something went wrong");
    }
    throw error;
  }
  userStorage.setSession(response.data.token, response.data.expiry);
  await dispatch("initializeUser");
  window.Intercom("shutdown");
}

export function fetchTrips({ commit }) {
  api.get("/bookings/?kind=upcoming").then(response => {
    commit(M.SET_UPCOMING_TRIPS, processTrips(response.data));
  });
  api.get("/bookings/?kind=past").then(response => {
    commit(M.SET_PAST_TRIPS, processTrips(response.data));
  });
}
