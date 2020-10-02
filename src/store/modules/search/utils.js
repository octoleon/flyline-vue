export function initialTimeFilters() {
  return {
    departure: {
      takeoff: [0, 24 * 60],
      landing: [0, 24 * 60]
    },
    return: {
      takeoff: [0, 24 * 60],
      landing: [0, 24 * 60]
    }
  };
}

export const scrapers = ["tripadvisor", "kayak", "skyscanner"];
