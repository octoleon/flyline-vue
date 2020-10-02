<template>
  <Form :card="true" class="payment-information">
    <Callout
      type="default"
      text="We will send you an email reminder 3 days before your trial ends"
    />
    <Row>
      <FormField label="Promo Code" :required="true">
        <input type="text" class="form__input" v-model="promo_code" />
        <span
          class="form-error"
          :class="{ 'is-visible': formErrors.promo_code }"
          >{{ formErrors.promo_code }}</span
        >
        <span class="form-error" :class="{ 'is-visible': promoInvalid }"
          >Promocode invalid</span
        >
      </FormField>
      <FormField label="Billing zip">
        <input type="text" class="form__input" v-model="zip" />
        <span class="form-error" :class="{ 'is-visible': formErrors.zip }">{{
          formErrors.zip
        }}</span>
      </FormField>
    </Row>
    <Row class="mobile">
      <Row>
        <FormField label="Credit card number" :required="true">
          <input type="text" class="form__input" v-model="card_number" />
          <span
            class="form-error"
            :class="{ 'is-visible': formErrors.card_number }"
            >{{ formErrors.card_number }}</span
          >
        </FormField>
      </Row>
      <Row>
        <FormField label="Exp. date">
          <input type="text" class="form__input" v-model="expiry" />
          <span
            class="form-error"
            :class="{ 'is-visible': formErrors.expiry }"
            >{{ formErrors.expiry }}</span
          >
        </FormField>
        <FormField label="CCV">
          <input type="text" class="form__input" v-model="cvc" />
          <span class="form-error" :class="{ 'is-visible': formErrors.cvc }">{{
            formErrors.cvc
          }}</span>
        </FormField>
      </Row>
    </Row>
    <Row>
      <Button type="primary" @click.prevent.stop="onRegister()"
        >Continue</Button
      >
    </Row>
    <span
      class="form-error form-error-main"
      :class="{
        'is-visible': subscriberRequestErrorMessage
      }"
      >{{ subscriberRequestErrorMessage }}</span
    >
  </Form>
</template>

<script>
import Vuex from "vuex";
import Button from "@/components/atoms/Button";
import Row from "@/components/molecules/Grid/Row";
import Callout from "@/components/molecules/Callout";
import Form from "@/components/molecules/Form/Form";
import FormField from "@/components/molecules/Form/FormField";
import * as M from "@/store/modules/register/mutation-types";

export default {
  name: "PaymentInformation",
  components: {
    Row,
    Form,
    Button,
    Callout,
    FormField
  },
  computed: {
    ...Vuex.mapState("register", [
      "form",
      "formErrors",
      "subscriberRequestErrorMessage",
      "promoInvalid"
    ]),
    promo_code: {
      get() {
        return this.form.promo_code;
      },
      set(value) {
        this.setPromoCode(value);
      }
    },
    zip: {
      get() {
        return this.form.zip;
      },
      set(value) {
        this[M.SET_ZIP](value);
      }
    },
    card_number: {
      get() {
        return this.form.card_number;
      },
      set(value) {
        this[M.SET_CARD_NUMBER](value);
      }
    },
    cvc: {
      get() {
        return this.form.cvc;
      },
      set(value) {
        this[M.SET_CVC](value);
      }
    },
    expiry: {
      get() {
        return this.form.expiry;
      },
      set(value) {
        this[M.SET_EXPIRY](value);
      }
    }
  },
  methods: {
    ...Vuex.mapMutations("register", [
      M.SET_PROMO_CODE,
      M.SET_ZIP,
      M.SET_CARD_NUMBER,
      M.SET_CVC,
      M.SET_EXPIRY
    ]),
    ...Vuex.mapActions("register", ["register", "setPromoCode"]),
    onRegister() {
      this.register().then(() => {
        this.$router.push({ name: "Account" });
      });
    }
  }
};
</script>

<style lang="scss">
.payment-information {
  display: flex;
  padding: 1.5rem;
  padding-bottom: 0.3rem;

  .btn {
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 5rem !important;
  }

  .row {
    flex-wrap: nowrap;
  }

  .form-error-main {
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    .mobile.row {
      display: block;
    }
  }
}
</style>
