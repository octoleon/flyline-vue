<template>
  <Card class="user-menu">
    <div class="user-menu__item" @click="logout">
      <span>Logout</span>
    </div>
  </Card>
</template>

<script>
import Vuex from "vuex";
import Card from "@/components/molecules/Card";

export default {
  name: "UserMenu",
  components: {
    Card
  },
  methods: {
    ...Vuex.mapActions("user", ["logOut"]),
    logout() {
      this.logOut().then(() => {
        this.$router.push(
          {
            name: "Home"
          },
          () => {
            window.Intercom("boot", {
              app_id: "mkmh7651"
            });
          }
        );
      });
    }
  }
};
</script>

<style lang="scss">
.user-menu {
  margin-top: 40px;
  width: 14rem;
  position: absolute;
  z-index: 100;
  top: 40px;
  right: 0;
}

.user-menu__item {
  &:hover {
    cursor: pointer;
    span {
      color: #00aeef;
    }
  }
}
</style>
