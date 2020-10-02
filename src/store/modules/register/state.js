import { Mode } from "./utils";

const state = {
  emailExists: false,
  emailVerified: false,
  requestSent: false,
  form: {
    home_airport: null,
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    promo_code: "",
    zip: "",
    card_number: "",
    expiry: "",
    cvc: "",
    plan: "basic",
    code: null,
    activation_code: null
  },
  formErrors: {},
  activation: null,
  activationCodeCheckProgress: false,
  activationCodeRejected: false,
  invite: null,
  inviteCodeCheckProgress: false,
  inviteCodeRejected: false,
  discount: null,
  promoCheckProgress: false,
  promoInvalid: false,
  subscribeRequestFailed: false,
  subscribeRequestErrorMessage: null,
  mode: Mode.SIGNUP
};

export default state;
