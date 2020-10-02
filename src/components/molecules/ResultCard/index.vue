<template>
  <div class="result-card">
    <ResultRow :result="result" :toggleDetail="toggleDetail" />
    <ResultDetail :result="result" v-if="toggle" />
  </div>
</template>

<script>
import ResultRow from "@/components/molecules/ResultCard/ResultRow";
import ResultDetail from "@/components/molecules/ResultCard/ResultDetail";

export default {
  name: "ResultCard",
  components: {
    ResultRow,
    ResultDetail
  },
  props: ["result"],
  data: function() {
    return {
      toggle: false
    };
  },
  methods: {
    toggleDetail: function() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style scoped lang="scss">
.result-card {
  border-radius: 27px;
  border: 1px solid #edeef6;
  display: flex;
  width: 43rem;
  flex-direction: column;
  .option {
    font-family: Gilroy;
    font-size: 0.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    margin-bottom: 0;
  }
}
</style>
