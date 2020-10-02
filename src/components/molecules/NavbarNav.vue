<template>
  <ul class="navbar__nav">
    <li v-if="user.anonymous">
      <router-link :to="{ name: 'How it works' }">How it works</router-link>
    </li>
    <li v-if="user.anonymous">
      <router-link :to="{ name: 'Pricing' }">Memberships</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavbarNav",
  data() {
    return {
      user: {
        anonymous: false
      }
    };
  }
};
</script>

<style lang="scss">
.navbar__nav {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 22px;
  }

  a {
    color: #0e3178;
    font-family: "Gilroy-Bold";
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    font-weight: bold;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    text-decoration: none;
  }
}
</style>
