<template>
  <nav class="nav">
    <div class="navbar-top">
      <img src="@/assets/top_icon.png" alt="top_icon" />
      <p class="navbar-top-text">
        FlyLine Early Beta is now Live! Get FlyLine Premium for Free
      </p>
    </div>
    <div class="navbar navbar--desktop">
      <NavbarLogo />
      <NavbarElements />

      <div class="navbar__links">
        <NavbarNav />
        <NavbarEntry v-if="user.anonymous" :toggleOverlay="toggleOverlay" />
        <NavbarUser v-else />
      </div>
    </div>
    <div class="navbar navbar--mobile">
      <NavbarLogo />
    </div>
  </nav>
</template>

<script>
import Vuex from "vuex";
import NavbarElements from "@/components/molecules/NavbarElements";
import NavbarNav from "@/components/molecules/NavbarNav";
import NavbarLogo from "@/components/molecules/NavbarLogo";
import NavbarUser from "@/components/molecules/NavbarUser";
import NavbarEntry from "@/components/molecules/NavbarEntry";

export default {
  name: "Navbar",
  props: ["toggleOverlay"],
  components: {
    NavbarElements,
    NavbarNav,
    NavbarLogo,
    NavbarUser,
    NavbarEntry
  },
  computed: {
    ...Vuex.mapState("user", ["user"])
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

.nav {
  @include xy-grid();
  @include flex-align(center, center);

  background-color: #ffffff;
  box-shadow: 0 5px 30px 0 rgba(26, 25, 25, 0.03);
  width: 100%;
  flex-grow: 1;
  height: 105px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  // position: fixed;
  width: 960px;
  height: 49px;
  margin: 0 auto;

  @include xy-grid();
  @include flex-align(left, center);

  &__logo {
    padding: 0 40px;

    img {
      width: 100px;
      height: 20px;
      object-fit: contain;
    }
  }

  &__links {
    @include xy-grid();
    @include flex-align(left, center);
    flex-grow: 1;
  }
}
.navbar-top-text {
  color: white;
  font-size: 13px;
  margin-left: 20px;
  margin-bottom: 0px !important;
}
.navbar-top {
  top: 0;
  position: fixed;
  width: 100%;
  background: #0e3178;
  height: 45px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}
.navbar--desktop {
  display: flex;
  margin-top: 40px;
}
.navbar--mobile {
  display: none;
}

@media (max-width: 768px) {
  .navbar--desktop {
    display: none;
  }
  .navbar--mobile {
    display: flex;
    justify-content: center;
  }
}
</style>
