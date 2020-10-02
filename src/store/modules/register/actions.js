/*
    Submit register
*/
import api from "@/utils/http";
import * as M from "./mutation-types";
import _ from "lodash";

export function setPromoCode({ commit, dispatch }, value) {
  commit(M.SET_PROMO_CODE, value);
  runCheckPromo(dispatch);
}

const runCheckPromo = _.debounce(dispatch => dispatch("checkPromo"), 500);

export function checkPromo({ commit, dispatch, state }) {
  if (state.promoCheckProgress) setTimeout(() => dispatch("checkPromo"), 500);
  const promo = state.form.promo_code;
  if (promo.length === 0) {
    commit(M.SET_PROMO_INVALID, false);
    return;
  }
  commit(M.SET_PROMO_CHECK_PROGRESS, true);
  api
    .get("subscriptions/check-promo", {
      params: { promocode: promo.toUpperCase() }
    })
    .then(response => {
      commit(M.SET_DISCOUNT, response.data.discount);
      commit(M.SET_PROMO_INVALID, false);
    })
    .catch(() => {
      commit(M.SET_PROMO_INVALID, true);
    })
    .finally(() => {
      commit(M.SET_PROMO_CHECK_PROGRESS, false);
    });
}

export function checkInvite({ commit, state }) {
  commit(M.SET_INVITE_CODE_CHECK_PROGRESS, true);
  api
    .get("check-invite/", { params: { code: state.form.code } })
    .then(response => {
      commit(M.SET_INVITE, response.data);
      commit(M.SET_EMAIL, response.data.email);
      commit(M.SET_INVITE_CODE_REJECTED, false);
    })
    .catch(() => {
      commit(M.SET_INVITE_CODE_REJECTED, true);
    });
}

export function checkActivationCode({ commit, state }) {
  commit(M.SET_ACTIVATION_CODE_CHECK_PROGRESS, true);
  api
    .get("check-activation-code/", {
      params: { activation_code: state.form.activation_code }
    })
    .then(response => {
      commit(M.SET_ACTIVATION, response.data);
      const data = response.data;
      commit(M.SET_HOME_AIRPORT, data.market);
      commit(M.SET_EMAIL, data.email);
      commit(M.SET_FIRST_NAME, data.first_name);
      commit(M.SET_LAST_NAME, data.last_name);
      commit(M.SET_ZIP, data.zip);
      commit(M.SET_ACTIVATION_CODE_REJECTED, false);
    })
    .catch(() => {
      commit(M.SET_ACTIVATION_CODE_REJECTED, true);
    });
}

export function setEmail({ commit, dispatch }, value) {
  commit(M.SET_EMAIL, value);
  runVerifyEmail(dispatch);
}

const runVerifyEmail = _.debounce(dispatch => {
  dispatch("verifyEmail");
});

export function verifyEmail({ commit, getters, state }) {
  if (getters.emailInvalid) return;
  api
    .get("auth/check-user/", { params: { email: state.form.email } })
    .then(response => {
      const data = response.data;
      commit(M.SET_EMAIL_EXISTS, data.exists);
      commit(M.SET_EMAIL_VERIFIED, true);
    });
}

export async function register({ commit, dispatch, getters, state }) {
  commit(M.SET_FORM_ERRORS, {});
  commit(M.SET_SUBSCRIBE_REQUEST_ERROR_MESSAGE, null);
  let response;
  try {
    response = await api.post(getters.getPostUrl, state.form);
  } catch (reason) {
    commit(M.SET_SUBSCRIBE_REQUEST_FAILED, true);
    if (reason.response) {
      if (reason.response.data.message) {
        commit(
          M.SET_SUBSCRIBE_REQUEST_ERROR_MESSAGE,
          reason.response.data.message
        );
      }
      if (reason.response.data.errors) {
        const fe = reason.response.data.errors;
        commit(
          M.SET_FORM_ERRORS,
          Object.fromEntries(
            Object.entries(fe).map(([fname, value]) => {
              return [fname, value.map(e => e.message).join(" ")];
            })
          )
        );
      }
    }
    throw reason;
  }
  const data = response.data;
  if (data.success) {
    await dispatch(
      "user/authenticate",
      {
        email: state.form.email,
        password: state.form.password,
        name: "dashboard-ui-account"
      },
      { root: true }
    );
  }
}
