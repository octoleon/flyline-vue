<template>
  <div class="register">
    <div class="register-container">
      <div class="register-content">
        <img class="logo" src="@/assets/flyline.svg" alt="Flyline" />
        <RegisterForm @tabSwitched="switchBackground" />
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import RegisterForm from "@/components/register/RegisterForm";
import { Mode } from "@/store/modules/register/utils";
import * as M from "@/store/modules/register/mutation-types";

export default {
  name: "Register",
  components: {
    RegisterForm
  },
  methods: {
    ...Vuex.mapMutations("register", [M.SET_MODE]),
    switchBackground() {
      this.$el.classList.contains("register--alt")
        ? this.$el.classList.remove("register--alt")
        : this.$el.classList.add("register--alt");
    }
  },
  created() {
    const mode =
      "code" in this.$route.query
        ? Mode.INVITE
        : "activation_code" in this.$route.query
        ? Mode.ACTIVATE
        : Mode.SIGNUP;
    this[M.SET_MODE](mode);
  }
};
</script>

<style lang="scss">
.register {
  min-height: 100vh;
  padding-top: 1rem;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: bottom center;
  background-attachment: fixed;
  transition: background-image 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);

  @media screen and (min-width: 600px) {
    background-image: url("~@/assets/register_step_one.png");
    padding-top: 10rem;
    &--alt {
      background-image: url("~@/assets/register_step_two.png");
    }
  }
}
</style>
