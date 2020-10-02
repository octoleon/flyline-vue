<template>
  <div class="complete-item" v-if="item.name">
    <img
      :src="
        require('../../assets/images/' +
          (item.type === 'airport' ? 'take-off.png' : 'pin.png'))
      "
      width="13px"
      height="13px"
    />
    <span>{{ item.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
    searchText: { required: true }
  }
};
</script>
<style lang="scss" scoped>
.complete-item {
  background-color: white;
  margin-bottom: 1rem;
  span {
    font-family: Gilroy;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    margin-left: 1.5rem;
  }
}
</style>
