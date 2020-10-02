<template>
  <span v-bind:class="classObject">
    <span>
      {{ label }}
    </span>
  </span>
</template>

<script>
export default {
  name: "Airport",
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String
    }
  },
  computed: {
    classObject: function() {
      return {
        badge: this.label,
        "badge--cheapest": this.type === "CHEAPEST",
        "badge--best": this.type === "BEST"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.badge {
  border-radius: 0.5rem;
  font-family: Gilroy;
  font-size: 0.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 0 4px;
}
.badge--cheapest {
  background-color: rgba(64, 206, 83, 0.1);
}
.badge--cheapest span {
  opacity: 1;
  color: #40ce53;
}
.badge--best {
  background-color: rgba(64, 121, 206, 0.1);
}
.badge--best span {
  opacity: 1;
  color: #4079ce;
}
</style>
