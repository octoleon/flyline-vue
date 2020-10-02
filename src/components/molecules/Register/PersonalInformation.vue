<template>
  <Form :card="true" class="personal-information">
    <Row>
      <FormField label="First Name">
        <input type="text" class="form__input" v-model="first_name" />
        <span
          class="form-error"
          :class="{ 'is-visible': formErrors.first_name }"
          >{{ formErrors.first_name }}</span
        >
      </FormField>
      <FormField label="Last Name">
        <input type="text" class="form__input" v-model="last_name" />
        <span
          class="form-error"
          :class="{ 'is-visible': formErrors.last_name }"
          >{{ formErrors.last_name }}</span
        >
      </FormField>
    </Row>
    <Row>
      <FormField label="Email">
        <input type="text" class="form__input" v-model="email" />
        <span class="form-error" :class="{ 'is-visible': formErrors.email }">{{
          formErrors.email
        }}</span>
        <span class="form-error" :class="{ 'is-visible': emailInvalid }"
          >Email invalid</span
        >
        <span
          class="form-error"
          :class="{ 'is-visible': emailVerified && emailExists }"
          >Email already exists</span
        >
      </FormField>
      <FormField label="Password">
        <input type="password" class="form__input" v-model="password" />
        <span
          class="form-error"
          :class="{ 'is-visible': formErrors.password }"
          >{{ formErrors.password }}</span
        >
      </FormField>
    </Row>
    <Row>
      <FormField label="Enter Home Airport">
        <location-input v-model="home_airport" />
        <span
          class="form-error"
          :class="{ 'is-visible': formErrors.home_airport }"
          >{{ formErrors.home_airport }}</span
        >
      </FormField>
      <FormField label="Select a Plan">
        <select class="form__input" v-model="plan">
          <option v-for="(plan, planId) in plans" :value="planId" :key="planId"
            >{{ plan.name }} (${{ plan.price.value }}/yr)</option
          >
        </select>
        <span class="form-error" :class="{ 'is-visible': formErrors.plan }">{{
          formErrors.plan
        }}</span>
      </FormField>
    </Row>
    <Row>
      <Button type="primary" @click.prevent.stop="onNextStep()"
        >Continue</Button
      >
    </Row>
    <Row>
      <span class="personal-information__promo"
        >Already Have an account?
        <router-link to="/login" class="personal-information__login-link"
          >Login</router-link
        ></span
      >
    </Row>
  </Form>
</template>

<script>
import Vuex from "vuex";
import Row from "@/components/molecules/Grid/Row";
import Button from "@/components/atoms/Button";
import Form from "@/components/molecules/Form/Form";
import FormField from "@/components/molecules/Form/FormField";
import * as M from "@/store/modules/register/mutation-types";
import LocationInput from "@/components/molecules/LocationInput";

export default {
  name: "PersonalInformation",
  components: {
    Row,
    Form,
    Button,
    FormField,
    LocationInput
  },
  computed: {
    ...Vuex.mapState("register", [
      "form",
      "formErrors",
      "emailVerified",
      "emailExists"
    ]),
    ...Vuex.mapGetters("register", ["emailInvalid", "plans"]),
    email: {
      get() {
        return this.form.email;
      },
      set(value) {
        this.setEmail(value);
      }
    },
    password: {
      get() {
        return this.form.password;
      },
      set(value) {
        this[M.SET_PASSWORD](value);
      }
    },
    first_name: {
      get() {
        return this.form.first_name;
      },
      set(value) {
        this[M.SET_FIRST_NAME](value);
      }
    },
    last_name: {
      get() {
        return this.form.last_name;
      },
      set(value) {
        this[M.SET_LAST_NAME](value);
      }
    },
    plan: {
      get() {
        return this.form.plan;
      },
      set(value) {
        this.SET_PLAN(value);
      }
    },
    home_airport: {
      get() {
        return this.form.home_airport;
      },
      set(value) {
        this[M.SET_HOME_AIRPORT](value);
      }
    }
  },
  methods: {
    ...Vuex.mapMutations("register", [
      M.SET_PASSWORD,
      M.SET_FIRST_NAME,
      M.SET_LAST_NAME,
      M.SET_PLAN,
      M.SET_HOME_AIRPORT
    ]),
    ...Vuex.mapActions("register", ["setEmail"]),
    onNextStep() {
      this.$emit("onNext");
    }
  }
};
</script>

<style lang="scss">
.personal-information {
  display: flex;
  padding: 1.5rem;
  padding-bottom: 0.3rem;

  .btn {
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 5rem !important;
  }

  &__promo {
    color: #bbc4dc;
    padding: 1.5rem 0 0;
    text-align: center;
    font-size: 0.8rem;
  }

  &__login-link {
    color: #00aeef;
    font-family: "Gilroy-Medium";
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    .row > * {
      margin: 0;
    }
    .row {
      display: block;
    }
  }
}
</style>
