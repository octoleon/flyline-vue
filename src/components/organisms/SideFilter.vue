<template>
  <div class="side-filter">
    <SideFilterTitle />
    <div class="side-filter__content">
      <SideFilterOption :label="'Filter by airlines'" />
      <SideFilterOption :label="'Filter by time'" />
      <SideFilterOption :label="'Filter by stops'" :default="true">
        <FilterToggle />
      </SideFilterOption>
      <SideFilterOption :label="'Filter by price'" :default="true">
        <PriceFilter />
      </SideFilterOption>
      <button class="side-filter__update">
        Update Results
      </button>
      <p class="side-filter__message">Additional baggage fees may apply.</p>
    </div>
  </div>
</template>

<script>
import SideFilterTitle from "@/components/molecules/SideFilterTitle";
import SideFilterOption from "@/components/molecules/SideFilterOption";
import PriceFilter from "@/components/molecules/PriceFilter";
import FilterToggle from "@/components/molecules/FilterToggle";
export default {
  name: "SideFilter",
  components: {
    SideFilterTitle,
    SideFilterOption,
    PriceFilter,
    FilterToggle
  }
};
</script>
<style scoped lang="scss">
.side-filter {
  width: 15rem;
  border-radius: 27px;
  box-shadow: 0 0 40px 0 rgba(43, 57, 94, 0.06);
  border: solid 1px #edeef6;
  background-color: #ffffff;
  &__content {
    padding: 0 1.5rem;
  }
  &__update {
    width: 100%;
    border-radius: 27px;
    border: 2px solid #00aeef;
    background-color: #ffffff;
    font-family: Gilroy;
    font-size: 0.7rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.29;
    letter-spacing: normal;
    text-align: center;
    color: #00aeef;
    margin-bottom: 30px;
  }
  &__message {
    opacity: 0.6;
    font-family: Gilroy;
    font-size: 0.6rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #3a3f5c;
  }
}
</style>
