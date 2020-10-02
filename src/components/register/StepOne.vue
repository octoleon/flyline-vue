<template>
  <div class="register__form__body">
    <div class="grid-x">
      <div class="small-12 medium-6 cell">
        <label>First Name</label>
        <input type="text" />
      </div>
      <div class="small-12 medium-6 cell">
        <label>Last Name</label>
        <input type="text" />
      </div>
      <div class="small-12 medium-6 cell">
        <label>Email Address</label>
        <input type="text" />
      </div>
      <div class="small-12 medium-6 cell">
        <label>Password</label>
        <input type="text" />
      </div>
      <div class="small-12 medium-6 cell">
        <label>Enter Home Airport</label>
        <input type="text" />
      </div>
      <div class="small-12 medium-6 cell">
        <label>Plan</label>
        <select>
          <option>Basic ($49.99/yr)</option>
        </select>
      </div>
    </div>
    <button type="submit" class="button continue" @click="changeStep(1)">
      Continue
    </button>
    <div class="register__form__footer">
      Already Have an account? <a href="#">Login</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepOne",
  props: {
    changeStep: Function
  }
};
</script>
