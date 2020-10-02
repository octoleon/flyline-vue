<template>
  <ul class="register-tabs">
    <li
      @click="$emit('onChange', 'personal')"
      :class="{
        'register-tab': true,
        'register-tab--active': active === 'personal'
      }"
    >
      <div>Personal Information</div>
    </li>
    <li
      @click="$emit('onChange', 'payment')"
      :class="{
        'register-tab': true,
        'register-tab--active': active === 'payment'
      }"
    >
      <div>Sign Up For Premium</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RegisterTabs",
  props: {
    active: String
  }
};
</script>

<style lang="scss">
.register-tabs {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #edeef6;
  font-family: "Gilroy-Medium", sans-serif;
  font-size: 0.8rem;
  color: #bbc4dc;
}

.register-tab {
  flex-grow: 1;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  > div {
    display: inline-flex;
    width: 100%;
    line-height: 2.3rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 3px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #00aeef;
      bottom: -0.5rem;
      opacity: 0;
      transition: opacity 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }

  &--active {
    color: #3a3f5c;

    > div::after {
      opacity: 1;
    }
  }
}
</style>
