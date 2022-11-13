<template>
  <input
    type="text"
    class="my-input--root"
    v-model.trim="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "my-input",
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style lang="scss" scoped>
.my-input--root {
  height: 100%;
  width: 100%;
  border: 1.5px solid #e9ecef;
  border-radius: 8px;
  padding: 10px;
}
</style>
