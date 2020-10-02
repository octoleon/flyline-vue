import moment from "moment";
import api from "@/utils/http";
import {
  calculateDurationsKiwi,
  getAirlines,
  getSearchParams,
  processFlight,
  sleep
} from "@/utils/utils";
import { airlineCodes } from "@/utils/airlineCodes";
import { scrapers } from "@/store/modules/search/utils";
import * as M from "./mutation-types";

export function setDealAlertsSubscribeSuccess({ commit }, value) {
  commit(M.SET_DEAL_ALERTS_SUBSCRIBE_SUCCESS, value);
}

export function setDealAlertsSubscribeFailure({ commit }, value) {
  commit(M.SET_DEAL_ALERTS_SUBSCRIBE_FAILURE, value);
}

export function setEmail({ commit }, value) {
  commit(M.SET_EMAIL, value);
}

export function toggleSingleCarrier({ commit }) {
  commit(M.TOGGLE_SINGLE_CARRIER);
}

export function setSingleCarrier({ commit }, value) {
  commit(M.SET_SINGLE_CARRIER, value);
}

export function setTimeFilters({ commit }, value) {
  commit(M.SET_TIME_FILTERS, value);
}

export function setFormAndSearch({ commit, dispatch }, data) {
  commit(M.SET_SEARCH_FORM, data);
  const departureDate = moment(data.departure_date);
  const returnDate = data.return_date ? moment(data.return_date) : null;
  commit(M.SET_DATES, { start: departureDate, end: returnDate });
  dispatch("search", { clearFilters: true, saveSearch: false });
}

export function applyAirlinesFilter({ commit }, kind) {
  commit(M.TOGGLE_AIRLINES_FILTER, kind);
}

export function loadMore({ commit }) {
  commit(M.INCREASE_LIMIT, 10);
}

export function sortResultsBy({ commit }, sort) {
  commit(M.TOGGLE_SORT, sort);
}

export function clearFiltersAndUpdate({ commit, getters }) {
  commit(M.CLEAR_FILTERS);
  commit(M.SET_PRICE_RANGE, [getters.priceLimits.min, getters.priceLimits.max]);
  commit(M.RESET_AIRLINES_FILTER);
  commit(M.RESET_TIME_FILTERS);
}

export function anonymousDealAlertsSubscribe({ commit, state }) {
  const { placeFrom, placeTo, email } = state.form;
  api
    .post("deal-alert-subscribe/", {
      source: placeFrom,
      destination: placeTo,
      email: email
    })
    .then(() => {
      commit(M.SET_DEAL_ALERTS_SUBSCRIBE_SUCCESS, true);
    })
    .catch(() => {
      commit(M.SET_DEAL_ALERTS_SUBSCRIBE_FAILURE, true);
    });
}

export function search(
  { commit, getters, dispatch, rootState, state },
  payload
) {
  const { saveSearch } = payload;
  commit(M.SET_SEARCH_RESULT_INDEX, null);
  commit(M.SET_SEARCH_PROGRESS, true);
  commit(M.RESET_SCRAPERS);
  api
    .get("search/", { params: getSearchParams(state.form) })
    .then(response => {
      const data = response.data;
      let parent = { ...data };
      delete parent.data;
      data.data = data.data.map(processFlight);
      data.data = data.data.map(sr => {
        return {
          ...sr,
          route: sr.route.map(calculateDurationsKiwi)
        };
      });
      data.data = data.data.map((o, i) => {
        o.parent = parent;
        o.provider = "flyline";
        o.srIndex = `kiwi-${i}`;
        Object.freeze(o);
        return o;
      });
      const airlines = getAirlines(data.data);
      commit(
        "setAirlines",
        airlines.map((a, i) => ({
          code: a,
          name: airlineCodes[a] || a,
          checked: false,
          aIndex: i
        }))
      );
      commit(M.SET_SEARCH_RESULTS, data.data);
      commit(M.SET_PRICE_RANGE, [
        getters.priceLimits.min,
        getters.priceLimits.max
      ]);
    })
    .finally(() => {
      commit(M.SET_SEARCH_PROGRESS, false);
    });
  if (!rootState.user.anonymous && state.form.return_date_data) {
    dispatch("requestScrapers", {
      fly_from: state.form.placeFrom.code,
      fly_to: state.form.placeTo.code,
      start_date: state.form.departure_date_data.format("YYYY-MM-DD"),
      return_date: state.form.return_date_data.format("YYYY-MM-DD")
    });
  }
  if (saveSearch) {
    dispatch("saveSearchHistory");
  }
}

export function requestScrapers({ commit, dispatch }, request) {
  let promises = [sleep(1000)];
  for (const kind of scrapers) {
    const p = api
      .post("/request-scraper/", {
        kind: kind,
        ...request
      })
      .then(response => {
        commit(M.SET_SCRAPER_TASK_ID, {
          [kind]: response.data.id
        });
      });
    promises.push(p);
  }
  Promise.allSettled(promises).then(() => {
    dispatch("pollScrapers");
  });
}

export function pollScrapers({ commit, dispatch, getters, state }) {
  if (Object.entries(state.scraperTaskIds).length === 0) return;
  let promises = [sleep(2000)];
  for (const [scraper, taskId] of Object.entries(state.scraperTaskIds)) {
    if (state.scraperResults[scraper]) continue;
    const p = api
      .get("/check-scraper-result/", { params: { id: taskId } })
      .then(response => {
        const data = response.data.map(processFlight).map((o, i) => {
          o.srIndex = `${scraper}-${i}`;
          o.provider = scraper;
          Object.freeze(o);
          return o;
        });
        commit(M.SET_SCRAPER_RESULT, { [scraper]: data });
        commit(M.REMOVE_SCRAPER, scraper);
        commit(M.SET_PRICE_RANGE, [
          getters.priceLimits.min,
          getters.priceLimits.max
        ]);
      })
      .catch(error => {
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.status === "not-ready"
        )
          return;
        commit(M.REMOVE_SCRAPER, scraper);
      });
    promises.push(p);
  }
  Promise.allSettled(promises).then(() => {
    dispatch("pollScrapers");
  });
}

export function saveSearchHistory({ state }) {
  api.post("/search-history/", {
    place_from: state.form.placeFrom,
    place_to: state.form.placeTo,
    departure_date: state.form.departure_date_data.toJSON().slice(0, 10),
    return_date: state.form.return_date_data
      ? state.form.return_date_data.toJSON().slice(0, 10)
      : null,
    adults: state.form.valAdults,
    children: state.form.valChildren,
    infants: state.form.valInfants,
    seat_type: state.form.seatType,
    destination_type: state.form.destinationTypeId
  });
}
