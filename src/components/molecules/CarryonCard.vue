<template>
  <div
    :class="{ 'carryon-card': true, 'carryon-card--selected': selected }"
    @click="onClick"
  >
    <div class="carryon-card__info" v-for="(type, i) in types" :key="i">
      <h4 v-text="type.title" class="carryon-card__title"></h4>
      <span v-text="type.caption" class="carryon-card__caption"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarryonCard",
  props: {
    types: {
      type: Array,
      required: true
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

.carryon-card {
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

    .carryon-card__title {
      color: #00aeef;
    }
  }

  img {
    width: 1.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
