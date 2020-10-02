<template>
  <Card title="Traveler information" class="traveller-information">
    <Form :card="true">
      <Row>
        <Row :vertical="true">
          <FormField label="First Name">
            <input
              type="text"
              name="first_name"
              v-model="first_name"
              class="form__input"
            />
          </FormField>

          <FormField label="Date of Birth">
            <input
              type="date"
              name="date-of-birth"
              v-model="dob"
              class="form__input"
            />
          </FormField>

          <FormField label="Home Airport">
            <location-input v-model="market" />
          </FormField>

          <FormField label="Passport Number">
            <input
              type="text"
              name="passport-number"
              v-model="passport_number"
              class="form__input"
            />
          </FormField>
        </Row>

        <Row :vertical="true">
          <FormField label="Last Name">
            <input
              type="text"
              name="last-name"
              v-model="last_name"
              class="form__input"
            />
          </FormField>

          <FormField label="Gender">
            <select name="gender" v-model="gender" class="form__input">
              <option
                v-for="(val, label) in genderOptions"
                :key="`gender-${val}`"
                >{{ label }}</option
              >
            </select>
          </FormField>

          <FormField label="Phone Number">
            <input
              type="text"
              name="phone-number"
              v-model="phone_number"
              class="form__input"
            />
          </FormField>

          <FormField label="Known Traveler Number">
            <input
              type="text"
              name="known-traveler-number"
              class="form__input"
              v-model="tsa_precheck_number"
            />
          </FormField>
        </Row>
      </Row>

      <Row>
        <FormField>
          <Button :primary="true" @click="saveAccount" class="form__submit"
            >Save</Button
          >
        </FormField>
      </Row>
    </Form>
  </Card>
</template>

<script>
import Vuex from "vuex";
import Card from "@/components/molecules/Card";
import Button from "@/components/atoms/Button";
import Row from "@/components/molecules/Grid/Row";
import Form from "@/components/molecules/Form/Form";
import FormField from "@/components/molecules/Form/FormField";

import * as M from "@/store/modules/user/mutation-types";
import { genderOptions } from "@/utils/utils";
import LocationInput from "@/components/molecules/LocationInput";

const fieldNames = [
  "first_name",
  "last_name",
  "dob",
  "market",
  "passport_number",
  "gender",
  "phone_number",
  "tsa_precheck_number"
];
const getters = {
  ...Vuex.mapState("user", ["user"]),
  genderOptions: () => genderOptions
};
for (const fieldName of fieldNames) {
  getters[fieldName] = {
    get() {
      return this.user[fieldName];
    },
    set(value) {
      this[M.SET_USER]({ ...this.user, [fieldName]: value });
    }
  };
}

export default {
  name: "TravelerInformation",
  components: {
    LocationInput,
    Row,
    Card,
    Form,
    Button,
    FormField
  },
  methods: {
    ...Vuex.mapMutations("user", [M.SET_USER]),
    ...Vuex.mapActions("user", ["saveAccount"])
  },
  computed: getters
};
</script>

<style>
.traveller-information {
  margin-right: 15px;
  width: calc(50% - 7.5px);
}
</style>
