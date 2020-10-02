<template>
  <autocomplete
    :items="items"
    :value="value"
    @item-selected="onItemSelected"
    :get-label="formatPlace"
    :class="inputClass"
    @update-items="onTextUpdated"
    :component-item="LocationInputItem"
  >
  </autocomplete>
</template>

<script>
import Autocomplete from "v-autocomplete";
import { formatPlace, locationSearch } from "@/utils/utils";
import LocationInputItem from "@/components/atoms/LocationInputItem";

export default {
  name: "LocationInput",
  props: {
    inputClass: {
      type: String
    },
    value: {
      type: Object
    }
  },
  components: {
    Autocomplete
  },
  data() {
    return {
      items: [],
      LocationInputItem
    };
  },
  methods: {
    formatPlace,
    onItemSelected(item) {
      this.$emit("input", item);
    },
    onTextUpdated(value) {
      const that = this;
      locationSearch(value).then(data => {
        that.items = data.map(this.processLocation);
      });
    },
    processLocation(loc) {
      let value = { type: loc.type, code: loc.code, name: loc.name };
      if (loc.type === "city") {
        value.subdivision = {
          name: loc.subdivision ? loc.subdivision.name : null
        };
        value.country = { code: loc.country.code };
      }
      return value;
    }
  }
};
</script>

<style lang="scss">
.v-autocomplete {
  .v-autocomplete-list {
    padding: 1rem 1rem;
    padding-bottom: 0;
    box-shadow: 0 0 40px 0 rgba(43, 57, 94, 0.06);
    border: solid 1px #edeef6;
    border-radius: 13.5px;
    background-color: #ffffff;
    z-index: 10000;
  }

  input[type="search"]::-webkit-search-cancel-button {
    display: none;
  }

  .v-autocomplete-input-group {
    caret-color: #00aeef;

    .v-autocomplete-input {
      border: solid 0.5px #edeef6;
      border-radius: 13.5px;
      font-size: 0.6rem;
      color: #3a3f5c;
    }

    /*&.v-autocomplete-selected {*/
    /*  .v-autocomplete-input {*/
    /*    color: green;*/
    /*    background-color: white;*/
    /*    font-family: Gilroy;*/
    /*    font-size: 1rem;*/
    /*    font-stretch: normal;*/
    /*    font-style: normal;*/
    /*    letter-spacing: normal;*/
    /*    text-align: left;*/
    /*    color: #3a3f5c;*/
    /*  }*/
    /*}*/
  }
}
</style>
