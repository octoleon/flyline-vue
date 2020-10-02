<template>
  <transition name="fade">
    <slot />
  </transition>
</template>

<script>
export default {
  name: "TransitionFadeInOut"
};
</script>

<style scoped>
* {
  will-change: opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-delay: 250ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
