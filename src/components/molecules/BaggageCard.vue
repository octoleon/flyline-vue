<template>
  <div
    :class="{ 'baggage-card': true, 'baggage-card--selected': selected }"
    @click="onClick"
  >
    <div class="baggage-card__info">
      <div v-if="count">
        <img src="@/assets/images/suitcase.svg" alt="" v-if="count === 1" />
        <img src="@/assets/images/suitcase-2.svg" alt="" v-if="count === 2" />
      </div>
      <h4 v-text="title" class="baggage-card__title"></h4>
      <span
        v-if="caption"
        v-text="caption"
        class="baggage-card__caption"
      ></span>
    </div>
    <span v-text="price" class="baggage-card__price"></span>
  </div>
</template>

<script>
export default {
  name: "BaggageCard",
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false
    },
    price: {
      type: String,
      required: false,
      default: "$0.00"
    },
    count: {
      type: Number,
      required: false,
      default: 0
    },
    selected: Boolean
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

.baggage-card {
  @include xy-grid(vertical, false);
  @include card-container(
    white,
    #3a3f5c,
    15px,
    solid 1px #edeef6,
    13.5px,
    0 0 20px 0 rgba(43, 57, 94, 0.06)
  );

  padding: 18px 15px;
  align-items: center;
  justify-content: center;
  height: 10rem;
  cursor: pointer;
  position: relative;
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    border-color: #00aeef;
    box-shadow: 0px 0px 20px 0 rgba(43, 57, 94, 0.1);
  }

  &__title {
    font-family: "Gilroy-SemiBold";
    font-size: 1rem;
    margin-bottom: 0;
    word-break: break-word;
    text-align: center;
    width: 90%;
  }

  &__caption {
    color: #bbc4dc;
    font-size: 0.6rem;
    letter-spacing: 1px;
  }

  &__price {
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  &__info {
    @include xy-grid(vertical, false);
    align-items: center;
    justify-content: center;
    height: 8rem;
  }

  &--selected {
    border-color: #00aeef;
    box-shadow: 0px 0px 20px 0 rgba(43, 57, 94, 0.1);

    .baggage-card__title {
      color: #00aeef;
    }
  }

  img {
    width: 1.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
