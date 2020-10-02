import { getQuickLinksData, getStops } from "@/utils/utils";
import { legacyAirlines, lowcostAirlines } from "@/utils/airlineCodes";

export function isDealFormIncomplete(state) {
  return !(
    !!state.form.placeFrom &&
    !!state.form.placeTo &&
    !!state.form.email
  );
}
export function email(state) {
  return state.form.email;
}
export function quickFiltersData(state, getters) {
  return getQuickLinksData(getters.filteredResults);
}
export function filterableAirlines(state, getters) {
  const kind = state.form.airlinesFilter;
  let result;
  if (kind === "lowcost") {
    result = state.form.airlines.filter(o => lowcostAirlines.includes(o.code));
  } else if (kind === "legacy") {
    result = state.form.airlines.filter(o => legacyAirlines.includes(o.code));
  } else {
    result = state.form.airlines;
  }
  if (state.form.singleCarrier) {
    const singleCarrierAirlines = new Set(
      getters.allResults
        .filter(o => o.airlines.length === 1)
        .map(o => o.airlines[0])
    );
    result = result.filter(o => singleCarrierAirlines.has(o.code));
  }
  return result;
}
export function checkedAirlines(state, getters) {
  return getters.filterableAirlines.filter(o => o.checked).map(o => o.code);
}
export function airlinesFilterToApply(state, getters) {
  const kind = state.form.airlinesFilter;
  if (getters.checkedAirlines.length > 0) {
    return getters.checkedAirlines;
  }
  if (kind === "lowcost") {
    return lowcostAirlines;
  } else if (kind === "legacy") {
    return legacyAirlines;
  }
  return [];
}
export function allResults(state) {
  return [
    ...state.searchResults,
    ...Object.values(state.scraperResults).flat()
  ];
}
export function filteredResults(state, getters) {
  let result = getters.allResults;
  if (getters.airlinesFilterToApply.length > 0) {
    result = result.filter(o => {
      return o.airlines.every(a => getters.airlinesFilterToApply.includes(a));
    });
  }
  result = result.filter(o => {
    return (
      o.price >= state.form.priceRange[0] && o.price <= state.form.priceRange[1]
    );
  });
  if (state.form.maxStops !== null) {
    result = result.filter(o => {
      return getStops(o) <= state.form.maxStops;
    });
  }
  result = result.filter(o => {
    const tf = state.form.timeFilters;
    if (o.roundtrip) {
      if (
        o.local_departure_int < tf.departure.takeoff[0] ||
        o.local_departure_int > tf.departure.takeoff[1]
      )
        return false;
      if (
        o.local_arrival_int < tf.departure.landing[0] ||
        o.local_arrival_int > tf.departure.landing[1]
      )
        return false;
      if (
        o.return_departure_int < tf.return.takeoff[0] ||
        o.return_departure_int > tf.return.takeoff[1]
      )
        return false;
      return !(
        o.return_arrival_int < tf.return.landing[0] ||
        o.return_arrival_int > tf.return.landing[1]
      );
    } else {
      if (
        o.local_departure_int < tf.departure.takeoff[0] ||
        o.local_departure_int > tf.departure.takeoff[1]
      )
        return false;
      return !(
        o.return_arrival_int < tf.return.landing[0] ||
        o.return_arrival_int > tf.return.landing[1]
      );
    }
  });
  if (state.form.singleCarrier) {
    result = result.filter(o => o.airlines.length === 1);
  }
  if (state.form.sort) {
    if (state.form.sort === "price") {
      result.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price === b.price) {
          if (a.quality > b.quality) return 1;
          if (a.quality === b.quality) return 0;
          if (a.quality < b.quality) return -1;
        }
        return -1;
      });
    } else if (state.form.sort === "quality") {
      result.sort((a, b) => {
        if (a.quality > b.quality) return 1;
        if (a.quality === b.quality) {
          if (a.price > b.price) return 1;
          if (a.price === b.price) return 0;
          return -1;
        }
        return -1;
      });
    } else if (state.form.sort === "duration") {
      result.sort((a, b) => {
        const adur = Math.min(
          ...[a.duration.departure, a.duration.return].filter(o => o)
        );
        const bdur = Math.min(
          ...[b.duration.departure, b.duration.return].filter(o => o)
        );
        if (adur > bdur) return 1;
        if (adur === bdur) {
          if (a.price > b.price) return 1;
          if (a.price === b.price) return 0;
          return -1;
        }
        return -1;
      });
    }
  }
  return result;
}
export function priceLimits(state, getters) {
  const prices = getters.allResults.map(o => o.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}
export function finalResults(state, getters, rootState, rootGetters) {
  const limit = rootGetters["user/user"].anonymous
    ? 4
    : state.form.limit + state.form.limitIncrement;
  return getters.filteredResults.slice(0, limit);
}
export function cityFromTo(state) {
  if (!state.form.placeFrom || !state.form.placeTo) {
    return null;
  }
  return `${state.form.placeFrom.name} -> ${state.form.placeTo.name}`;
}
export function airlineNames(state) {
  if (!(state.form.airlines && state.form.airlines.length > 0)) return null;
  const airlines = state.form.airlines.map(o => o.name);
  const others = airlines.length - 3;
  const airlinesText = airlines.slice(0, 3).join(", ");
  if (others > 0) {
    return `${airlinesText} and ${others} more`;
  }
  return airlinesText;
}
export function flightToBook(state) {
  if (state.searchResultIndex === null) return null;
  const [provider, index] = state.searchResultIndex.split("-");
  const i = parseInt(index);
  if (provider === "kiwi") {
    return state.searchResults[i];
  } else {
    return state.scraperResults[provider][i];
  }
}
export function isDomestic(state, getters) {
  return (
    getters.flightToBook.countryFrom.code ===
    getters.flightToBook.countryTo.code
  );
}
export function returnFlights(state, getters) {
  return getters.flightToBook
    ? getters.flightToBook.route.filter(o => o.return === 1)
    : [];
}
export function departureFlights(state, getters) {
  return getters.flightToBook
    ? getters.flightToBook.route.filter(o => o.return === 0)
    : [];
}
export function singleCarrierAirlines(state, getters) {
  const singleCarrierAirlines = new Set(
    getters.allResults
      .filter(o => o.airlines.length === 1)
      .map(o => o.airlines[0])
  );
  return [...singleCarrierAirlines];
}
