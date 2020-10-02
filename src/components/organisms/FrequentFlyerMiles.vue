<template>
  <Card title="Frequent flyer miles" class="frequent-flyer-miles">
    <Form :card="true">
      <Row>
        <Row :vertical="true">
          <FormField label="American airlines">
            <input
              type="text"
              v-model="american_airlines"
              class="form__input"
            />
          </FormField>
          <FormField label="Delta airlines">
            <input type="text" v-model="delta_airlines" class="form__input" />
          </FormField>
          <FormField label="United airlines">
            <input type="text" v-model="united_airlines" class="form__input" />
          </FormField>
          <FormField label="Southwest airlines">
            <input
              type="text"
              v-model="southwest_airlines"
              class="form__input"
            />
          </FormField>
        </Row>
        <Row :vertical="true">
          <FormField label="Sun Country airlines">
            <input
              type="text"
              v-model="sun_country_airlines"
              class="form__input"
            />
          </FormField>
          <FormField label="jetBlue">
            <input type="text" v-model="jetBlue" class="form__input" />
          </FormField>
          <FormField label="Spirit">
            <input type="text" v-model="spirit_airlines" class="form__input" />
          </FormField>
          <FormField label="Hawaiian airlines">
            <input
              type="text"
              v-model="hawaiian_airlines"
              class="form__input"
            />
          </FormField>
        </Row>
      </Row>
      <Row>
        <FormField>
          <Button
            :primary="true"
            @click="saveFrequentFlyer"
            class="form__submit"
          >
            Saved
          </Button>
        </FormField>
      </Row>
    </Form>
  </Card>
</template>

<script>
import Card from "@/components/molecules/Card";
import Button from "@/components/atoms/Button";
import Row from "@/components/molecules/Grid/Row";
import Form from "@/components/molecules/Form/Form";
import FormField from "@/components/molecules/Form/FormField";
import Vuex from "vuex";
import { genderOptions } from "@/utils/utils";
import * as M from "@/store/modules/user/mutation-types";

const fieldNames = [
  "american_airlines",
  "united_airlines",
  "southwest_airlines",
  "sun_country_airlines",
  "frontier_airlines",
  "delta_airlines",
  "alaska_airlines",
  "jetBlue",
  "spirit_airlines",
  "allegiant_air",
  "hawaiian_airlines"
];
const getters = {
  ...Vuex.mapState("user", ["user"]),
  genderOptions: () => genderOptions
};
for (const fieldName of fieldNames) {
  getters[fieldName] = {
    get() {
      return this.frequentFlyer[fieldName];
    },
    set(value) {
      this[M.SET_FREQUENT_FLYER]({ ...this.frequentFlyer, [fieldName]: value });
    }
  };
}

export default {
  name: "FrequentFlyerMiles",
  components: {
    Row,
    Card,
    Form,
    Button,
    FormField
  },
  methods: {
    ...Vuex.mapMutations("user", [M.SET_FREQUENT_FLYER]),
    ...Vuex.mapActions("user", ["saveFrequentFlyer"])
  },
  computed: {
    ...Vuex.mapState("user", ["frequentFlyer"]),
    ...getters
  }
};
</script>

<style lang="scss">
.frequent-flyer-miles {
  width: calc(50% - 7.5px);
}
</style>
