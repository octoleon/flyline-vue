import { urls } from "./utils";

export function getPostUrl(state) {
  return urls[state.mode];
}

export function emailInvalid(state) {
  return state.form.email.length > 0 && !state.form.email.includes("@");
}

export function plans(state, getters, rootState) {
  const plans = rootState.plans.plans;
  const discount = state.discount;
  if (!discount) return plans;
  const entries = Object.entries(plans).map(([key, value]) => [
    key,
    {
      ...value,
      price: {
        period: value.price.period,
        value: (value.price.value * (100 - discount.percentage)) / 100
      }
    }
  ]);
  return Object.fromEntries(entries);
}
