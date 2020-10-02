<template>
  <div class="tagline">
    <span class="tagline__tag">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: "Tagline"
};
</script>

<style lang="scss">
.tagline {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;

  &__tag {
    display: inline-block;
    background-color: rgba(0, 174, 239, 0.2);
    padding: 0.3rem 1rem;
    color: #00aeef;
    font-size: 0.65rem;
    border-radius: 5rem;
    font-weight: 700;
  }
}
</style>
