<template>
  <div class="hero">
    <div class="hero__title">
      <div class="hero__subtitle">
        <slot name="subtitle"></slot>
      </div>
      <slot name="title"></slot>
    </div>
    <div class="hero__description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss">
.hero {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 3.5rem 0;
  color: #fff;
  background-color: #0e3178;
  border-radius: 2rem;

  &__title {
    padding-bottom: 0.5rem;
    font-size: 2rem;
  }

  &__subtitle {
    font-size: 1.2rem;
  }

  &__description {
    width: 38rem;
    font-size: 1rem;
    line-height: 1.8;
    text-align: center;
  }
}
</style>
