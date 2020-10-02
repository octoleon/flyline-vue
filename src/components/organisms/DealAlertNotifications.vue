<template>
  <Card title="Deal alert notifications" class="deal-alert-notifications">
    <Form :card="true">
      <Row>
        <FormField label="Destination">
          <input type="text" v-model="destination" class="form__input" />
        </FormField>

        <FormField label="Max Price">
          <input type="text" v-model="max_price" class="form__input" />
        </FormField>

        <FormField label="Select option">
          <select class="form__input" v-model="airlines">
            <option value=""></option>
          </select>
        </FormField>
      </Row>

      <Row>
        <FormField>
          <Button :link="true" @click="addDealWatch"
            >+ Add another alarm</Button
          >
        </FormField>
        <FormField>
          <Button type="submit" class="form__submit">Saved</Button>
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

const fieldNames = ["airlines", "destination", "max_price"];
const getters = {};
for (const fieldName of fieldNames) {
  getters[fieldName] = {
    get() {
      return this.dealWatchForm[fieldName];
    },
    set(value) {
      this[M.SET_DEAL_WATCH_FORM]({
        ...this.dealWatchForm,
        [fieldName]: value
      });
    }
  };
}

export default {
  name: "DealAlertNotifications",
  components: {
    Row,
    Card,
    Form,
    Button,
    FormField
  },
  methods: {
    ...Vuex.mapMutations("user", [M.SET_DEAL_WATCH_FORM]),
    ...Vuex.mapActions("user", ["addDealWatch", "deleteDealWatch"])
  },
  computed: {
    ...Vuex.mapState("user", ["dealWatchForm"]),
    ...getters
  }
};
</script>

<style>
.deal-alert-notifications {
  margin-right: 15px;
  width: calc(50% - 7.5px);
}
</style>
