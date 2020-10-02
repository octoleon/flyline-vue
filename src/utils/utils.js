import { legacyAirlines, lowcostAirlines } from "./airlineCodes";
import api from "./http";
import moment from "moment";

export const seatTypes = {
  M: "Economy",
  W: "Premium Economy",
  C: "Business",
  F: "First Class"
};

export const maxStopsFilterOptions = {
  0: "No Stops",
  1: "One Stop",
  2: "Two Stops"
};

export const genderOptions = {
  0: "Male",
  1: "Female"
};

export const inchesInCm = 0.393701;

export const poundsInKg = 2.20462;

export const userRoles = {
  companion: 1,
  subscriber: 0
};

export const destinationTypes = {
  round: "Round-trip",
  oneway: "One-way"
};

export const dealsTypes = {
  searchNBook: "Search & Book",
  dealAlerts: "Deal Alerts"
};

export function proceedToBooking(flight) {
  let form = document.createElement("form");
  form.style.visibility = "hidden";
  form.method = "POST";
  form.action = "/retail/";
  let input = document.createElement("input");
  input.name = "retail_info";
  input.value = JSON.stringify(flight);
  form.appendChild(input);
  let token = document.createElement("input");
  //token.name = "csrfmiddlewaretoken";
  //token.value = csrfmiddlewaretoken;
  form.appendChild(token);
  document.body.appendChild(form);
  form.submit();
}
export function getRoutesWithReturn(routes, returnValue) {
  return routes.filter(route => route.return === returnValue);
}
export function secs2hm(value) {
  const total_minutes = Math.floor(value / 60);
  const minutes = total_minutes % 60;
  const total_hours = Math.floor(total_minutes / 60);
  const hours = total_hours % 24;
  const days = Math.floor(total_hours / 24);
  const days_part = days ? `${days}d ` : "";
  const hours_part = hours ? `${hours}h ` : "";
  return `${days_part}${hours_part}${minutes}m`;
}

export function formatDate(value) {
  return moment.utc(value).format("D MMM");
}

export function formatDateTime(value) {
  return moment.utc(value).format("D MMM hh:mm A");
}

export function formatDateDeals(value) {
  return moment.utc(value).format("dddd, MMMM do ");
}

export function formatDateFull(value) {
  return moment.utc(value).format("MM/DD/YYYY");
}

export function timeInterval(route) {
  return secs2hm(route.duration);
}

export function staticUrl(path) {
  return `@/assets/${path}`;
}

export function airlineIcon(name) {
  return `${process.env.BASE_URL}images/airline/${name}`;
}

export function providerIcon(name) {
  return `${process.env.BASE_URL}images/providers/${name}`;
}

export function formatTime(value) {
  return moment.utc(value).format("hh:mm A");
}

export function isoToMins(value) {
  const v = moment.utc(value);
  return v.hour() * 60 + v.minute();
}

export function getSpecificRoute(routes, _return, last) {
  const returnValue = _return ? 1 : 0;
  const subroutes = routes.filter(r => r.return === returnValue);
  if (subroutes) {
    if (last) {
      return subroutes[subroutes.length - 1];
    } else {
      return subroutes[0];
    }
  }
}

export function getRetailUrl(bookingToken) {
  return `retail/${bookingToken}`;
}

export function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function processLocationSearch(data) {
  const cities = data.locations.filter(o => o.type === "city");
  let airports = data.locations.filter(o => o.type === "airport");
  let result = [];
  for (const city of cities) {
    result.push(city);
    const cityAirports = airports.filter(o => o.city.id === city.id);
    airports = airports.filter(o => o.city.id !== city.id);
    result.push(...cityAirports);
  }
  result.push(...airports);
  return result;
}

export function formatPlace(place) {
  if (!place) return null;
  if (place.type === "airport") {
    return `${place.name} (${place.code})`;
  }
  return `${place.name} ${
    place.subdivision
      ? place.subdivision.name
        ? place.subdivision.name
        : ""
      : ""
  } ${place.country.code}`;
}

export function placeToRequestValue(p) {
  return `${p.type}:${p.code}`;
}

export function locationSearch(term, locationTypes) {
  const searchLocationTypes = {
    city: ["city"],
    airport: ["airport"],
    both: ["city", "airport"]
  }[locationTypes || "both"];
  return new Promise(resolve => {
    let url = "/locations/query/";
    let searchParams = {
      term,
      locale: "en-US",
      location_types: searchLocationTypes
    };
    api
      .get(url, { params: searchParams })
      .then(response => resolve(processLocationSearch(response.data)));
  });
}

export function calculateLayovers(routes) {
  for (let i = 0; i < routes.length - 1; i++) {
    let [prev, next] = [routes[i], routes[i + 1]];
    prev.layover =
      (new Date(next.local_departure).getTime() -
        new Date(prev.local_arrival).getTime()) /
      1000;
  }
}

export function getAirlines(flights) {
  let airlines = new Set();
  for (const flight of flights) {
    for (const airline of flight.airlines) {
      airlines.add(airline);
    }
  }
  return [...airlines].sort();
}

export function getFlightAirlines(flight) {
  let airlines = new Set();
  for (const airline of flight.airlines) {
    airlines.add(airline);
  }
  return [...airlines].sort();
}

export function calculateDurationsKiwi(route) {
  const utc_departure = new Date(route.utc_departure);
  const utc_arrival = new Date(route.utc_arrival);
  const diff = utc_arrival.getTime() - utc_departure.getTime();
  return {
    ...route,
    duration: diff / 1000
  };
}

export function processFlight(sr) {
  const to_routes = sr.route.filter(r => r.return === 0);
  const return_routes = sr.route.filter(r => r.return === 1);
  calculateLayovers(to_routes);
  calculateLayovers(return_routes);
  const roundtrip = return_routes.length > 0;
  const return_departure = roundtrip ? return_routes[0].local_departure : null;
  const return_arrival = roundtrip
    ? return_routes[return_routes.length - 1].local_arrival
    : null;
  const return_departure_int = roundtrip ? isoToMins(return_departure) : null;
  const return_arrival_int = roundtrip ? isoToMins(return_arrival) : null;
  const local_departure_int = isoToMins(to_routes[0].local_departure);
  const local_arrival_int = isoToMins(
    to_routes[to_routes.length - 1].local_arrival
  );
  return {
    ...sr,
    roundtrip,
    return_departure,
    return_arrival,
    return_departure_int,
    return_arrival_int,
    local_departure_int,
    local_arrival_int
  };
}

export function formatMin(min) {
  let minVal = parseInt(min);
  let hours = Math.floor(minVal / 60);
  const minutes = minVal % 60;
  let ampm = "AM";
  if (hours === 24) {
    ampm = "AM";
    hours = 0;
  } else if (hours > 12) {
    ampm = "PM";
    hours -= 12;
  }
  const hh = hours.toString();
  const mm = minutes.toString().padStart(2, "0");
  return `${hh}:${mm} ${ampm}`;
}

export function getQuickLinksData(flights) {
  if (flights.length === 0) {
    return {
      price: null,
      duration: null,
      quality: null,
      date: null
    };
  }
  const data = flights.map(f => ({
    price: f.price,
    duration: Math.min(
      ...[f.duration.departure, f.duration.return].filter(v => {
        return typeof v === "number" && v !== 0;
      })
    ),
    quality: f.quality,
    date: new Date(f.local_departure)
  }));
  return {
    price: data.reduce((prev, curr) => (prev.price < curr.price ? prev : curr)),
    duration: data.reduce((prev, curr) =>
      prev.duration < curr.duration
        ? prev
        : prev.duration === curr.duration
        ? prev.price < curr.price
          ? prev
          : curr
        : curr
    ),
    quality: data.reduce((prev, curr) =>
      prev.quality < curr.quality ? prev : curr
    ),
    date: data.reduce((prev, curr) => (prev.date < curr.date ? prev : curr))
  };
}

export function getStops(sr) {
  const toFlights = sr.route.filter(o => !o.return);
  const returnFlights = sr.route.filter(o => o.return);
  return Math.max(toFlights.length - 1, returnFlights.length - 1);
}

export function getSearchParams(form, limit = 0) {
  let formData = {};
  formData["fly_from"] = placeToRequestValue(form.placeFrom);
  formData["fly_to"] = placeToRequestValue(form.placeTo);
  const dateFrom = form.departure_date_data.format("DD/MM/YYYY");
  formData["date_from"] = dateFrom;
  formData["date_to"] = dateFrom;
  formData["type"] = form.destinationTypeId;
  if (form.destinationTypeId === "round") {
    const dateTo = form.return_date_data.format("DD/MM/YYYY");
    formData["return_from"] = dateTo;
    formData["return_to"] = dateTo;
  }
  formData["adults"] = form.valAdults;
  formData["infants"] = form.valInfants;
  formData["children"] = form.valChildren;
  formData["selected_cabins"] = form.seatType;
  formData["curr"] = "USD";
  if (limit) {
    formData["limit"] = form.limit;
  }
  return formData;
}

export function getSearchURL(form) {
  let formData = new FormData();
  formData.append("fly_from", placeToRequestValue(form.placeFrom));
  formData.append("fly_to", placeToRequestValue(form.placeTo));
  const dateFrom = form.departure_date_data.format("DD/MM/YYYY");
  formData.append("date_from", dateFrom);
  formData.append("date_to", dateFrom);
  formData.append("type", form.destinationTypeId);
  if (form.destinationTypeId === "round") {
    const dateTo = form.return_date_data.format("DD/MM/YYYY");
    formData.append("return_from", dateTo);
    formData.append("return_to", dateTo);
  }
  formData.append("adults", form.valAdults);
  formData.append("infants", form.valInfants);
  formData.append("children", form.valChildren);
  formData.append("selected_cabins", form.seatType);
  if (form.priceRange !== [0, 3000]) {
    const [price_from, price_to] = form.priceRange;
    formData.append("price_from", price_from);
    formData.append("price_to", price_to);
  }
  let selectedAirlines = form.airlines.filter(a => a.checked).map(a => a.code);
  let airlineFilter = form.airlinesFilter
    ? new Set(
        { legacy: legacyAirlines, lowcost: lowcostAirlines }[
          form.airlinesFilter
        ]
      )
    : new Set([]);
  if (airlineFilter.size > 0) {
    if (selectedAirlines.length > 0) {
      selectedAirlines = selectedAirlines.filter(o => airlineFilter.has(o));
    } else {
      selectedAirlines = [...airlineFilter];
    }
  }
  if (selectedAirlines.length !== 0) {
    formData.append("select_airlines", selectedAirlines.join(","));
  }
  if (form.maxStops !== null) {
    formData.append("max_stopovers", form.maxStops);
  }
  if (form.sort !== null) {
    formData.append("sort", form.sort);
  }
  //formData.append("limit", form.limit + form.limitIncrement);
  formData.append("curr", "USD");
  let url = new URL("/api/search", window.location);
  url.search = new URLSearchParams(formData);
  return url;
}

export function pick(a) {
  if (a.length === 0) return null;
  return a[Math.floor(Math.random() * a.length)];
}

export function stripAirlines(name) {
  return name
    .split(" ")
    .filter(o => o.toLowerCase() !== "airlines")
    .join(" ");
}

/**
 * Manually remove boostrap modal overlay
 */
export function removeBModalOverlay() {
  document.body.classList.remove("modal-open");
  document.querySelector(".modal-backdrop").remove();
}

/**
 * Handles user info to localstorage
 */

export function getAgeCategory(p, singular = false) {
  const birthDate = new Date(p.year, p.month, p.day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age < 3) {
    return singular ? "infant" : "infants";
  }
  if (age < 13) {
    return singular ? "child" : "children";
  }
  return singular ? "adult" : "adults";
}

export function validateCardNumber(number) {
  let regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(number)) return false;
  return luhnCheck(number);
}

function luhnCheck(val) {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    let intVal = parseInt(val.substr(i, 1));
    if (i % 2 === 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 === 0;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}
