<template>
  <div class="page--result">
    <div class="grid-container">
      <h1>Header</h1>
      <hr />
      <div class="top-search-bar-wrapper">
        <TopSearchBar />
      </div>
      <div class="page--result__wrapper">
        <div class="page--result__sidebar">
          <SideFilter />
        </div>
        <div class="page--result__content">
          <TopFilterTab />
          <ResultsContent :results="results" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResultsContent from "@/components/organisms/Results";
import TopFilterTab from "@/components/organisms/TopFilterTab";
import SideFilter from "@/components/organisms/SideFilter";
import TopSearchBar from "@/components/organisms/TopSearchBar";
import results from "../assets/results.json";

export default {
  name: "Home",
  components: {
    ResultsContent,
    TopFilterTab,
    SideFilter,
    TopSearchBar
  },
  data: () => ({
    results
  })
};
</script>
<style scoped lang="scss">
.page {
  &--result {
    &__wrapper {
      display: flex;
    }
    &__sidebar {
      margin-right: 2rem;
    }
  }
}
.top-search-bar-wrapper {
  position: relative;
  height: 150px;
}
</style>
