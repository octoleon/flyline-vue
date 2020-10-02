<template>
  <span class="back">Return</span>
</template>

<script>
export default {
  name: "Back"
};
</script>

<style lang="scss">
.back {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  position: absolute;
  font-size: 0.7rem;
  margin: 0;
  border-radius: 13.5px;
  cursor: pointer;
  opacity: 0.44;
  transition: all 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &:hover {
    color: #00aff5;
    opacity: 1;
    background-color: #e3f8fe;
  }

  &::before {
    content: "\f177";
    font-family: "FontAwesome";
    padding-right: 10px;
  }
}
</style>
