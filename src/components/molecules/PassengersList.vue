<template>
  <div class="passengers-list">
    <div v-for="item in list" :key="item" class="option">
      <div class="label">
        {{ item }}
      </div>
      <div class="action">
        <div
          class="dec"
          v-bind:class="{ disabled: value[item] === 0 }"
          v-on:click="value[item] > 0 && click(item, -1)"
        >
          -
        </div>
        <div class="value">
          {{ value[item] }}
        </div>
        <div class="inc" v-on:click="click(item, 1)">+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PassengersList",
  props: ["click", "list", "value"]
};
</script>

<style scoped lang="scss">
.passengers-list {
  padding-top: 1rem;
  border-top: 1px solid #edeef6;
  .option {
    display: flex;
    margin-bottom: 1rem;
    div {
      flex: 1;
      font-family: Gilroy;
      font-size: 0.7rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.29;
      letter-spacing: normal;
      text-align: left;
    }
  }
  .action {
    border-radius: 27px;
    border: 1px solid #edeef6;
    background-color: #ffffff;
    display: flex;
    div {
      flex: 1;
      text-align: center;
    }
  }
  .label {
    font-family: Gilroy;
    font-size: 0.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    text-transform: capitalize;
  }
  .selected {
    color: #00aeef;
  }
  .value {
    border-right: 1px solid #edeef6;
    border-left: 1px solid #edeef6;
    color: #3a3f5c;
  }
  .inc,
  .dec {
    font-size: 1.2rem;
    color: #00aeef;
  }
  .disabled {
    color: #3a3f5c;
  }
}
</style>
