import { filterAirlines } from "@/store/modules/deals/utils";

export function airlineFilters(state) {
  return filterAirlines.map(e => [e, state.selectedAirlines.has(e)]);
}
