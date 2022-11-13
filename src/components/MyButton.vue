<template>
  <button class="my-button--root" :style="{ 'border-color': color, color }">
    <slot />
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    color: {
      type: String,
      default: "#0D6EFD",
    },
  },
};
</script>

<style lang="scss" scoped>
.my-button--root {
  outline: none;
  background: none;
  border-radius: 10px;
  border: 1px solid;
  padding: 8px;
  
  &:hover {
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 0 0 1px;
  }
}
</style>
