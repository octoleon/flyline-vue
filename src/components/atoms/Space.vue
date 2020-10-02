<template>
  <div class="space space--y" :style="style"></div>
</template>

<script>
export default {
  name: "Space",
  props: {
    x: Number,
    y: Number
  },
  computed: {
    classes() {
      return {
        space: true,
        "space--y": this.y,
        "space--x": this.x
      };
    },
    style() {
      return {
        height: this.y ? `${this.y}px` : "auto",
        width: this.x ? `${this.x}px` : "100%"
      };
    }
  }
};
</script>
