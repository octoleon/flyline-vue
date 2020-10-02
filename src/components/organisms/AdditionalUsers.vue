<template>
  <Card title="Additional users" class="additional-users">
    <table v-if="companions.length > 0">
      <thead>
        <tr>
          <th>Email</th>
          <th>Invited</th>
          <th>Status</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="companion in companions" :key="companion.email">
          <td>{{ companion.email }}</td>
          <td>{{ formatDateTime(companion.invited) }}</td>
          <td>{{ getStatusText(companion.status) }}</td>
          <td>
            <button
              v-if="companion.status !== 'active'"
              type="button"
              class="button button--red"
              @click="deleteCompanion(companion)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Form :card="true">
      <Row>
        <FormField label="Email address">
          <input type="text" v-model="email" class="form__input" />
        </FormField>
      </Row>

      <Row>
        <FormField>
          <Button @click="inviteCompanion" class="form__submit">Saved</Button>
        </FormField>
        <span v-if="inviteCompanionError" class="account__form__errors">{{
          errorMessage[inviteCompanionError]
        }}</span>
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
import { formatDateTime } from "@/utils/utils";
import * as M from "@/store/modules/user/mutation-types";

const statusText = new Map([
  [0, "Created"],
  [1, "Email sent"],
  [2, "Active"]
]);

const errorDescription = {
  "limit-exceeded": "Companion limit has exceeded",
  "non-subscriber": "You are not subscriber so you can't invite",
  "existing-user": "The user is already registered"
};

export default {
  name: "AdditionalUsers",
  components: {
    Row,
    Card,
    Form,
    Button,
    FormField
  },
  methods: {
    ...Vuex.mapMutations("user", [M.SET_COMPANION_FORM_EMAIL]),
    ...Vuex.mapActions("user", ["inviteCompanion", "deleteCompanion"]),
    formatDateTime,
    getStatusText(status) {
      return statusText.get(status);
    }
  },
  computed: {
    ...Vuex.mapState("user", [
      "companions",
      "companionForm",
      "inviteCompanionError"
    ]),
    errorDescription: () => errorDescription,
    email: {
      get() {
        return this.companionForm.email;
      },
      set(value) {
        this[M.SET_COMPANION_FORM_EMAIL](value);
      }
    }
  }
};
</script>

<style lang="scss">
.additional-users {
  width: calc(50% - 7.5px);
}
</style>
