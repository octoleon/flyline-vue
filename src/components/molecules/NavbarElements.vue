<template>
  <ul class="navbar__elements">
    <li>
      <router-link :to="{ name: 'How it works' }">Features</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'FareTypes' }">Fare Types</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavbarElements"
};
</script>

<style lang="scss">
.navbar__elements {
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
    color: #3a3f5c;
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
