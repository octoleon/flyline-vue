import * as M from "./mutation-types";
import * as actions from "./actions";
import * as getters from "./getters";
import { initialTimeFilters } from "@/store/modules/search/utils";

const mutations = {
  [M.REMOVE_SCRAPER](state, v) {
    state.scraperTaskIds = Object.fromEntries(
      Object.entries(state.scraperTaskIds).filter(o => o[0] !== v)
    );
  },
  [M.SET_SCRAPER_TASK_ID](state, v) {
    state.scraperTaskIds = { ...state.scraperTaskIds, ...v };
  },
  [M.SET_SCRAPER_RESULT](state, v) {
    state.scraperResults = { ...state.scraperResults, ...v };
  },
  [M.RESET_SCRAPERS](state) {
    state.scraperTaskIds = {};
    state.scraperResults = {};
    state.pollActive = false;
  },
  [M.SET_DEAL_ALERTS_SUBSCRIBE_SUCCESS](state, v) {
    state.dealAlertsSubscribeSuccess = v;
  },
  [M.SET_DEAL_ALERTS_SUBSCRIBE_FAILURE](state, v) {
    state.dealAlertsSubscribeFailure = v;
  },
  [M.SET_EMAIL](state, v) {
    state.form.email = v;
  },
  [M.SET_TIME_FILTERS](state, v) {
    const { destination, direction, value } = v;
    state.form.timeFilters[destination][direction] = value;
  },
  [M.RESET_TIME_FILTERS](state) {
    state.form.timeFilters = initialTimeFilters();
  },
  [M.SET_SINGLE_CARRIER](state) {
    state.form.singleCarrier = true;
  },
  [M.TOGGLE_SINGLE_CARRIER](state) {
    state.form.singleCarrier = !state.form.singleCarrier;
  },
  [M.SET_QUICK_FILTERS_DATA](state, value) {
    state.quickFiltersData = value;
  },
  [M.SET_SEARCH_RESULTS](state, results) {
    state.searchResults = results;
  },
  [M.UPDATE_PLACE_FROM](state, value) {
    state.form.placeFrom = value;
  },
  [M.UPDATE_PLACE_TO](state, value) {
    state.form.placeTo = value;
  },
  [M.CLEAR_FILTERS](state) {
    for (let a of state.form.airlines) {
      a.checked = false;
    }
    state.form.maxStops = null;
    state.form.limitIncrement = 0;
  },
  [M.SET_MAX_STOPS](state, value) {
    state.form.maxStops = value;
  },
  [M.SET_SEAT_TYPE](state, value) {
    state.form.seatType = value;
  },
  [M.SET_PRICE_RANGE](state, value) {
    state.form.priceRange = value;
  },
  [M.toggleAirline](state, index) {
    state.form.airlines[index].checked = !state.form.airlines[index].checked;
  },
  [M.SET_DESTINATION_TYPE](state, value) {
    state.form.destinationTypeId = value;
  },
  [M.SET_SEARCH_TYPE](state, value) {
    state.form.searchType = value;
  },
  [M.INCREASE_LIMIT](state, by) {
    state.form.limitIncrement += by;
  },
  [M.TOGGLE_SORT](state, value) {
    if (state.form.sort === value) {
      state.form.sort = null;
    } else {
      state.form.sort = value;
    }
  },
  [M.SET_DATES](state, payload) {
    const { start, end } = payload;
    if (start) state.form.departure_date = start.format("MM/DD/YYYY");
    if (end) state.form.return_date = end.format("MM/DD/YYYY");
    state.form.departure_date_data = start;
    state.form.return_date_data = end;
  },
  [M.UPDATE_PASSENGERS](state, payload) {
    const { index, by } = payload;
    let vals = {
      valAdults: state.form.valAdults,
      valChildren: state.form.valChildren,
      valInfants: state.form.valInfants
    };
    const propertyName = ["valAdults", "valChildren", "valInfants"][index - 1];
    vals[propertyName] += by;
    const passengers = vals.valAdults + vals.valChildren + vals.valInfants;
    if (!(passengers > 0 && passengers <= 9)) return;
    if (vals.valInfants > vals.valAdults) return;
    if (vals.valInfants > 0 && vals.valChildren > 0 && vals.valAdults === 0)
      return;
    state.form = { ...state.form, ...vals }; // Apply changes
  },
  [M.SET_SEARCH_PROGRESS](state, value) {
    state.searchProgress = value;
  },
  [M.SET_SEARCH_RESULT_INDEX](state, value) {
    state.searchResultIndex = value;
  },
  [M.SET_AIRLINES](state, value) {
    state.form.airlines = value;
  },
  [M.SET_PLANS](state, value) {
    state.plans = value;
  },
  [M.RESET_AIRLINES_FILTER](state) {
    state.form.airlinesFilter = null;
  },
  [M.TOGGLE_AIRLINES_FILTER](state, value) {
    if (state.form.airlinesFilter === value) {
      state.form.airlinesFilter = null;
    } else {
      state.form.airlinesFilter = value;
    }
  },
  [M.SET_AUTH_ERROR](state, value) {
    state.authErrorText = value;
  },
  [M.SET_SEARCH_FORM](state, data) {
    state.form = {
      ...state.form,
      placeFrom: data.place_from,
      placeTo: data.place_to,
      valAdults: data.adults,
      valChildren: data.children,
      valInfants: data.infants,
      seatType: data.seat_type,
      destinationTypeId: data.destination_type
    };
  }
};

const state = {
  authErrorText: "",
  plans: null,
  form: {
    email: "",
    airlinesFilter: null,
    limit: 10,
    limitIncrement: 0,
    sort: "price",
    priceRange: [0, 3000],
    airlines: [],
    maxStops: null,
    destinationTypeId: "round",
    searchType: "searchNBook",
    seatType: "M",
    valAdults: 1,
    valChildren: 0,
    valInfants: 0,
    departure_date: "",
    return_date: "",
    departure_date_data: null,
    return_date_data: null,
    placeFrom: null,
    placeTo: null,
    singleCarrier: false,
    timeFilters: initialTimeFilters(),
    isDeals: false
  },
  searchResults: [],
  searchProgress: false,
  searchResultIndex: null,
  showDashboardNavigation: true,
  dealAlertsSubscribeProgress: false,
  dealAlertsSubscribeSuccess: false,
  dealAlertsSubscribeFailure: false,
  scraperTaskIds: {},
  scraperResults: {}
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
