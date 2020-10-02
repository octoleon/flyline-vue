<template>
  <div class="top-filter-tab">
    <TopFilterTabItem
      :title="'Cheapest'"
      :description="'$767 - 22h 15m'"
      :activeTab="activeTab"
      :active="active === 'Cheapest' ? true : false"
    />
    <TopFilterTabItem
      :title="'Quickest'"
      :description="'$1024 - 18h 15m'"
      :active="active === 'Quickest' ? true : false"
      :activeTab="activeTab"
    />
    <TopFilterTabItem
      :title="'Single Carrier'"
      :description="'Undefined & more'"
      :activeTab="activeTab"
      :active="active === 'Single Carrier' ? true : false"
    />
    <TopFilterTabItem
      :title="'Legacy airlines'"
      :description="'SAS & more'"
      :activeTab="activeTab"
      :active="active === 'Legacy airlines' ? true : false"
    />
    <TopFilterTabItem
      :title="'Low-cost airlines'"
      :description="'Air UK & more'"
      :end="'end'"
      :activeTab="activeTab"
      :active="active === 'Low-cost airlines' ? true : false"
    />
  </div>
</template>

<script>
import TopFilterTabItem from "@/components/molecules/TopFilterTabItem";
export default {
  name: "TopFilterTab",
  components: {
    TopFilterTabItem
  },
  data: function() {
    return {
      active: "Quickest"
    };
  },
  methods: {
    activeTab: function(tab) {
      this.active = tab;
    }
  }
};
</script>
<style scoped lang="scss">
.top-filter-tab {
  display: flex;
  width: 43rem;
  display: flex;
  border-radius: 27px;
  box-shadow: 0 0 40px 0 rgba(43, 57, 94, 0.06);
  border: solid 1px #edeef6;
  background-color: #ffffff;
  margin-bottom: 40px;
}
</style>
