<template>
  <ul class="navbar__entry">
    <li>
      <a
        href="javascript:void(0);"
        @click="toggleOverlay"
        class="btn btn--primary"
        >Send App To Your Phone</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavbarEntry",
  props: ["toggleOverlay"],
  data() {
    return {
      showStart: false
    };
  },
  methods: {
    toggleStartForm() {
      this.showStart = !this.showStart;
    }
  },
  components: {}
};
</script>

<style lang="scss">
.navbar__entry {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  margin-left: auto;

  li {
    &:first-child {
      margin-right: 15px;
    }

    a,
    button {
      width: fit-content;
      height: 40px;
      border-radius: 1.5rem !important;
      font-size: 1rem;
      padding: 1.5rem 2rem;
      font-family: "Gilroy-Bold";
      &:focus {
        outline: none;
      }
    }

    button {
      color: #0e3178;
    }
  }
}
</style>
