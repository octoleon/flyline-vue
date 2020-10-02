<template>
  <div :class="classes">
    <span class="icon"></span>
    <p v-text="text"></p>
  </div>
</template>

<script>
export default {
  name: "Callout",
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    classes() {
      return {
        callout: true,
        [`callout--${this.type}`]: true
      };
    }
  },
  components: {}
};
</script>

<style lang="scss">
.callout {
  border-radius: 25px;
  font-size: 0.6rem;
  width: 100%;
  padding: 8px 20px;
  box-shadow: 0px 0px 20px rgba(43, 57, 94, 0.06);
  display: flex;
  margin-bottom: 0.5rem;

  > p {
    margin: 0;
    padding: 0;
  }

  > span.icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  > span::before {
    content: "\f00c";
    font-family: "FontAwesome";
    padding-right: 15px;
  }

  &--primary {
    color: rgba(0, 174, 239, 1);
    background-color: rgba(0, 174, 239, 0.2);

    > span::before {
      color: rgba(0, 174, 239, 1);
    }
  }

  &--success {
    color: rgba(64, 206, 83, 1);
    background-color: rgba(64, 206, 83, 0.2);

    > span::before {
      color: rgba(64, 206, 83, 1);
    }
  }

  &--warning {
    color: #bbc4dc;
    background-color: #ffffff;
    border: 1px solid #edeef6;

    > span::before {
      content: "\f05a";
      color: #fe8930;
    }
  }

  &--default {
    color: #bbc4dc;
    background-color: #ffffff;

    > span::before {
      content: "\f05a";
      color: #fe8930;
    }
  }
}
</style>
