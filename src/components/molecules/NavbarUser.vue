<template>
  <ul class="navbar__user">
    <li class="navbar__bell">
      <router-link to="/notifications"><IconNotification /></router-link>
    </li>
    <li class="navbar__account">
      <div class="user-menu-button" @click="toggleUserMenu">
        <div class="navbar__greet">
          <span>Welcome</span>
          <span>{{ user.first_name }} {{ user.last_name }}</span>
        </div>
        <IconChevron direction="down" />
      </div>
      <SlideXLeftTransition :delay="100">
        <UserMenu v-if="showUserMenu" />
      </SlideXLeftTransition>
    </li>
  </ul>
</template>

<script>
import Vuex from "vuex";
import IconChevron from "@/components/atoms/icons/IconChevron";
import IconNotification from "@/components/atoms/icons/IconNotification";
import UserMenu from "@/components/molecules/UserMenu";
import { SlideXLeftTransition } from "vue2-transitions";

export default {
  name: "NavbarUser",
  data() {
    return {
      showUserMenu: false
    };
  },
  components: {
    UserMenu,
    IconChevron,
    IconNotification,
    SlideXLeftTransition
  },
  methods: {
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    }
  },
  computed: {
    ...Vuex.mapState("user", ["user"])
  }
};
</script>

<style lang="scss">
.navbar__user {
  list-style: none;
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;

  .navbar__bell {
    margin-right: 3rem;
  }
}

.navbar__profile {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0px 0px 5px #ccc;
  background-size: 2.3rem;
  margin-right: 1rem;
}

.navbar__account .user-menu-button {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .icon {
    font-size: 0.6rem;
  }
}

.navbar__greet {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-right: 0.5rem;

  span {
    color: #3a3f5c;
    font-family: "Gilroy-Bold";
    line-height: 1;
  }

  span:first-child {
    font-family: "Gilroy-Medium";
    font-size: 0.6rem;
    opacity: 0.4;
  }

  span:last-child {
    font-size: 0.9rem;
    padding-top: 0.2rem;
  }
}
</style>
