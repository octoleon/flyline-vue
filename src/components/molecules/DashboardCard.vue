<template>
  <div class="dashboard-card">
    <h3 class="dashboard-card__title">
      <img
        :src="require('../../assets/images/' + icon)"
        width="18px"
        height="18px"
      />
      {{ title }}
    </h3>
    <slot class="dashboard-card__body"></slot>
  </div>
</template>

<script>
export default {
  name: "DashboardCard",
  props: ["title", "icon"]
};
</script>

<style lang="scss">
.dashboard-card {
  border-radius: 27px;
  box-shadow: 0 0 40px 0 rgba(43, 57, 94, 0.06);
  border: solid 1px #edeef6;
  background-color: #ffffff;
  margin-bottom: 30px;
  &__title {
    padding: 20px 30px;
    font-family: Gilroy;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    margin-bottom: 0;
    border-bottom: 1px solid #edeef6;
    img {
      margin-right: 15px;
    }
  }
}
</style>
