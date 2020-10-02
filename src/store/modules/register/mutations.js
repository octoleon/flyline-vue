import * as M from "./mutation-types";

const mutations = {
  [M.SET_HOME_AIRPORT](state, value) {
    state.form.home_airport = value;
  },
  [M.SET_EMAIL](state, value) {
    state.form.email = value;
  },
  [M.SET_PASSWORD](state, value) {
    state.form.password = value;
  },
  [M.SET_FIRST_NAME](state, value) {
    state.form.first_name = value;
  },
  [M.SET_LAST_NAME](state, value) {
    state.form.last_name = value;
  },
  [M.SET_PLAN](state, value) {
    state.form.plan = value;
  },
  [M.SET_PROMO_CODE](state, value) {
    state.form.promo_code = value;
  },
  [M.SET_ZIP](state, value) {
    state.form.zip = value;
  },
  [M.SET_CARD_NUMBER](state, value) {
    state.form.card_number = value;
  },
  [M.SET_EXPIRY](state, value) {
    state.form.expiry = value;
  },
  [M.SET_CVC](state, value) {
    state.form.cvc = value;
  },
  [M.SET_PROMO_INVALID](state, value) {
    state.promoInvalid = value;
  },
  [M.SET_PROMO_CHECK_PROGRESS](state, value) {
    state.promoCheckProgress = value;
  },
  [M.SET_DISCOUNT](state, value) {
    state.discount = value;
  },
  [M.SET_INVITE_CODE_CHECK_PROGRESS](state, value) {
    state.inviteCodeCheckProgress = value;
  },
  [M.SET_INVITE](state, value) {
    state.invite = value;
  },
  [M.SET_INVITE_CODE_REJECTED](state, value) {
    state.inviteCodeRejected = value;
  },
  [M.SET_ACTIVATION_CODE_CHECK_PROGRESS](state, value) {
    state.activationCodeCheckProgress = value;
  },
  [M.SET_ACTIVATION](state, value) {
    state.activation = value;
  },
  [M.SET_ACTIVATION_CODE_REJECTED](state, value) {
    state.activationCodeRejected = value;
  },
  [M.SET_EMAIL_EXISTS](state, value) {
    state.emailExists = value;
  },
  [M.SET_EMAIL_VERIFIED](state, value) {
    state.emailVerified = value;
  },
  [M.SET_FORM_ERRORS](state, value) {
    state.formErrors = value;
  },
  [M.SET_SUBSCRIBE_REQUEST_ERROR_MESSAGE](state, value) {
    state.subscriberRequestErrorMessage = value;
  },
  [M.SET_SUBSCRIBE_REQUEST_FAILED](state, value) {
    state.subscribeRequestFailed = value;
  },
  [M.SET_MODE](state, value) {
    state.mode = value;
  }
};

export default mutations;
