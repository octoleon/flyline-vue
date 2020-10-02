<template>
  <div class="register__form__body">
    <div class="alarm">
      <img src="../../assets/info.svg" />
      <span
        >We will send you an email reminder 3 days before your trial ends</span
      >
    </div>
    <div class="grid-x">
      <div class="small-6 cell">
        <label>Promo code*</label>
        <input type="text" />
      </div>
      <div class="small-6 cell">
        <label>Billing zip</label>
        <input type="text" />
      </div>
      <div class="small-12 medium-6 cell">
        <label>Credit card number</label>
        <input type="text" />
      </div>
      <div class="small-6 medium-3 cell">
        <label>Exp.date</label>
        <input type="text" />
      </div>
      <div class="small-6 medium-3 cell">
        <label>CCV</label>
        <input type="text" />
      </div>
    </div>
    <button type="submit" class="button continue">
      Continue
    </button>
  </div>
</template>

<script>
export default {
  name: "StepTwo"
};
</script>
