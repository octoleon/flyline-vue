<template>
  <div class="side-filter-title">
    <h3 class="side-filter-title__label">Filters</h3>
    <span class="side-filter-title__reset">Reset</span>
  </div>
</template>

<script>
export default {
  name: "SideFilterTitle"
};
</script>

<style scoped lang="scss">
.side-filter-title {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #edeef6;
  display: flex;
  &__label {
    font-family: Gilroy;
    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    flex: 1;
    margin-bottom: 0;
  }
  &__reset {
    opacity: 0.4;
    font-family: Gilroy;
    font-size: 1rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: right;
    color: #3a3f5c;
    flex: 1;
    margin-bottom: 0;
    cursor: pointer;
  }
}
</style>
