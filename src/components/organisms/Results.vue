<template>
  <div>
    <div v-for="result in results" v-bind:key="result.id">
      <ResultCard :result="result" />
    </div>
  </div>
</template>

<script>
import ResultCard from "@/components/molecules/ResultCard";
export default {
  name: "ResultsContent",
  components: {
    ResultCard
  },
  props: ["results"]
};
</script>
