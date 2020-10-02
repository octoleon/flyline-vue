<template>
  <Card class="start-form">
    <Form :card="true">
      <Row>
        <FormField label="Email">
          <input type="text" class="form__input" v-model="email" />
        </FormField>
      </Row>
      <Row>
        <FormField label="Password">
          <input type="password" class="form__input" v-model="password" />
        </FormField>
      </Row>
      <Row>
        <Button
          :primary="true"
          type="button"
          class="form__submit"
          @click="login"
          >Continue</Button
        >
      </Row>
    </Form>
    <span>{{ authErrorText }}</span>
  </Card>
</template>

<script>
import Vuex from "vuex";
import Card from "@/components/molecules/Card";
import Button from "@/components/atoms/Button";
import Row from "@/components/molecules/Grid/Row";
import Form from "@/components/molecules/Form/Form";
import FormField from "@/components/molecules/Form/FormField";

export default {
  name: "StartForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    Row,
    Card,
    Form,
    Button,
    FormField
  },
  methods: {
    ...Vuex.mapActions("user", ["authenticate", "clearStatus"]),
    login() {
      this.authenticate({ email: this.email, password: this.password }).then(
        () => {
          if (!this.authErrorText) {
            this.$emit("close");
            this.$router.push({ name: "Account" });
          }
        }
      );
    }
  },
  computed: {
    ...Vuex.mapState("user", ["authErrorText"])
  }
};
</script>

<style lang="scss">
.start-form {
  margin-top: 40px;
  width: 14rem;
  position: absolute;
  z-index: 100;
  top: 40px;
  right: 0rem;

  .form__submit {
    flex-grow: 1;
    width: 100%;
    height: auto;
    padding: 0.7rem;
    border-radius: 5rem !important;
  }
}
</style>
