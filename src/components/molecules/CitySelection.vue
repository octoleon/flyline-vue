<template>
  <div class="city-selection">
    <div class="search-button">
      <img
        :src="require('../../assets/images/search.png')"
        width="14px"
        height="14px"
      />
    </div>
    <v-autocomplete
      :items="fromList"
      v-model="cityFrom"
      :min-len="0"
      :get-label="getLabel"
      :component-item="template"
      @update-items="updateCityFrom"
      class="cityFrom"
    >
    </v-autocomplete>
    <div class="splitter">
      <span> - </span>
    </div>
    <v-autocomplete
      :items="toList"
      v-model="cityTo"
      :min-len="0"
      :get-label="getLabel"
      :component-item="template"
      @update-items="updateCityTo"
      class="cityFrom"
    >
    </v-autocomplete>
  </div>
</template>

<script>
import AutoCompleteItem from "./AutoCompleteItem.vue";
export default {
  data() {
    return {
      cityFrom: { id: "17", type: "city", name: "Los Angeles(LGA)" },
      cityTo: { id: "1", type: "city", name: "London(LON - All airports)" },
      list: [
        { id: "1", type: "city", name: "London(LON - All airports)" },
        { id: "2", type: "airport", name: "London (LHR - Heathrow)" },
        { id: "13", type: "airport", name: "London (LGW - Gatwick)" },
        { id: "15", type: "airport", name: "London (STN - Stansted)" },
        { id: "17", type: "city", name: "Los Angeles(LGA)" },
        { id: "18", type: "airport", name: "Los Angeles(LHR - Heathrow)" },
        { id: "19", type: "airport", name: "Los Angeles(LGW - Gatwick)" },
        { id: "20", type: "airport", name: "Los Angeles(STN - Stansted)" }
      ],
      fromList: this.list,
      toList: this.list,
      template: AutoCompleteItem
    };
  },
  methods: {
    getLabel(item) {
      return item && item.name;
    },
    updateCityFrom(text) {
      this.fromList = this.list.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
    },
    updateCityTo(text) {
      this.toList = this.list.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
};
</script>

<style lang="scss">
.search-button {
  width: 2.5rem;
  height: 2.5rem;
  padding-top: 0.5rem;
  padding-left: 0.7rem;
  border: solid 1px #edeef6;
  background-color: #ffffff;
  border-radius: 100%;
}
.city-selection {
  display: flex;
  margin-bottom: 0.5rem;
}
.cityFrom,
.cityTo {
  width: 26rem;
}
.splitter {
  position: relative;
  width: 35px;
  span {
    font-family: Gilroy;
    font-size: 2.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #3a3f5c;
    position: absolute;
    top: -10px;
  }
}
.city-selection {
  .v-autocomplete {
    .v-autocomplete-list {
      padding: 1rem 2rem;
      padding-bottom: 0;
      border-radius: 27px;
      box-shadow: 0 0 40px 0 rgba(43, 57, 94, 0.06);
      border: solid 1px #edeef6;
      background-color: #ffffff;
      z-index: 10000;
    }

    input[type="search"]::-webkit-search-cancel-button {
      display: none;
    }

    .v-autocomplete-input-group {
      caret-color: #00aeef;

      .v-autocomplete-input {
        font-size: 1.5em;
        padding: 0.6rem;
        box-shadow: none;
        border: none;
        width: calc(100% - 32px);
        outline: none;
        background-color: white;
        font-family: Gilroy;
        font-size: 1.5rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: left;
        color: #3a3f5c;
        height: 46px;
      }

      &.v-autocomplete-selected {
        .v-autocomplete-input {
          color: green;
          background-color: white;
          font-family: Gilroy;
          font-size: 1.5rem;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: left;
          color: #3a3f5c;
          height: 46px;
        }
      }
    }
  }
}
</style>
