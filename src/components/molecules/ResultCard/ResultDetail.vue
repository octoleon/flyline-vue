<template>
  <div class="result-detail">
    <ResultDetailRow
      :routes="departureRoutes"
      :duration="result.duration"
      :returned="'0'"
      v-if="departureRoutes.length > 0"
    />
    <ResultDetailRow
      :routes="arrivalRoutes"
      :duration="result.duration"
      :returned="'1'"
      v-if="arrivalRoutes.length > 0"
    />
  </div>
</template>

<script>
import ResultDetailRow from "@/components/molecules/ResultCard/ResultDetailRow";
import { getRoutesWithReturn } from "@/utils/utils";

export default {
  name: "ResultDetail",
  components: {
    ResultDetailRow
  },
  props: ["result"],
  data() {
    return {
      departureRoutes: this.getRoutesWithReturn(this.result.route, 0),
      arrivalRoutes: this.getRoutesWithReturn(this.result.route, 1)
    };
  },
  methods: {
    getRoutesWithReturn
  }
};
</script>

<style scoped lang="scss">
p {
  margin-bottom: 0;
}
.result-detail {
  border-radius: 27px;
  border: 1px solid #edeef6;
  display: flex;
  margin: 0 35px 30px 35px;
  padding: 35px 40px;
  flex-direction: column;
}
</style>
