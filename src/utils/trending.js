export const trending = [
  {
    from: {
      type: "city",
      code: "DFW",
      name: "Dallas",
      subdivision: { name: "Texas" },
      country: { code: "US" }
    },
    to: {
      type: "city",
      code: "NYC",
      name: "New York",
      subdivision: { name: "New York" },
      country: { code: "US" }
    }
  },
  {
    from: {
      type: "city",
      code: "NYC",
      name: "New York",
      subdivision: { name: "New York" },
      country: { code: "US" }
    },
    to: {
      type: "city",
      code: "SFO",
      name: "San Francisco",
      subdivision: { name: "California" },
      country: { code: "US" }
    }
  },
  {
    from: {
      type: "city",
      code: "MIA",
      name: "Miami",
      subdivision: { name: "Florida" },
      country: { code: "US" }
    },
    to: {
      type: "city",
      code: "LAX",
      name: "Los Angeles",
      subdivision: { name: "California" },
      country: { code: "US" }
    }
  },
  {
    from: {
      type: "city",
      code: "NYC",
      name: "New York",
      subdivision: { name: "New York" },
      country: { code: "US" }
    },
    to: {
      type: "city",
      code: "BCN",
      name: "Barcelona",
      subdivision: { name: null },
      country: { code: "ES" }
    }
  },
  {
    from: {
      type: "city",
      code: "LAX",
      name: "Los Angeles",
      subdivision: { name: "California" },
      country: { code: "US" }
    },
    to: {
      type: "city",
      code: "HKG",
      name: "Hong Kong",
      subdivision: { name: null },
      country: { code: "CN" }
    }
  },
  {
    from: {
      type: "city",
      code: "SEA",
      name: "Seattle",
      subdivision: { name: "Washington" },
      country: { code: "US" }
    },
    to: {
      type: "city",
      code: "CHI",
      name: "Chicago",
      subdivision: { name: "Illinois" },
      country: { code: "US" }
    }
  },
  {
    from: {
      type: "city",
      code: "WAS",
      name: "Washington, D.C.",
      subdivision: { name: "District of Columbia" },
      country: { code: "US" }
    },
    to: {
      type: "city",
      code: "LAX",
      name: "Los Angeles",
      subdivision: { name: "California" },
      country: { code: "US" }
    }
  },
  {
    from: {
      type: "city",
      code: "NYC",
      name: "New York",
      subdivision: { name: "New York" },
      country: { code: "US" }
    },
    to: {
      type: "city",
      code: "LON",
      name: "London",
      subdivision: { name: null },
      country: { code: "GB" }
    }
  },
  {
    from: {
      type: "city",
      code: "NYC",
      name: "New York",
      subdivision: { name: "New York" },
      country: { code: "US" }
    },
    to: {
      type: "city",
      code: "SJU",
      name: "San Juan",
      subdivision: { name: null },
      country: { code: "US" }
    }
  }
];

export const durationLabels = {
  nonstop: "Non Stop",
  multi: "Multiple Stops"
};

export const recentDeals = [
  {
    from: {
      type: "airport",
      code: "DFW",
      name: "Dallas/Fort Worth International",
      city: "Dallas"
    },
    to: { type: "airport", code: "LGA", name: "LaGuardia", city: "New York" },
    duration: {
      nonstop: "3h 20m",
      multi: "6h+"
    },
    savings: 26,
    average: 180,
    airlines: ["AA", "B6", "WN", "NK", "UA"]
  },
  {
    from: {
      type: "airport",
      code: "IAD",
      name: "Washington Dulles International",
      city: "Washington"
    },
    to: {
      type: "airport",
      code: "CDG",
      name: "Charles de Gaulle Airport",
      city: "Paris"
    },
    duration: {
      nonstop: "7h 20m",
      multi: "14h+"
    },
    savings: 211,
    average: 1200,
    airlines: ["AA", "B6", "WN", "NK", "UA", "AF", "DI"]
  },
  {
    from: {
      type: "airport",
      code: "LAX",
      name: "Los Angeles International",
      city: "Los Angeles"
    },
    to: {
      type: "airport",
      code: "HKG",
      name: "Hong Kong International",
      city: "Hong Kong"
    },
    duration: {
      nonstop: "12h+",
      multi: "1d+"
    },
    savings: 150,
    average: 1134,
    airlines: ["AA", "CX", "D7", "9C", "DL", "UA"]
  },
  {
    from: {
      type: "airport",
      code: "DEN",
      name: "Denver International",
      city: "Denver"
    },
    to: {
      type: "airport",
      code: "ORD",
      name: "O Hare International",
      city: "Chicago"
    },
    duration: {
      nonstop: "2h 9m",
      multi: "5h+"
    },
    savings: 43,
    average: 256,
    airlines: ["AA", "SY", "WN", "F9"]
  }
];
