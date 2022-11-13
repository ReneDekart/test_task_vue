<template>
  <div class="header--root">
    <div class="header--title">
      <router-link :to="{ name: 'home-page' }">
        <h1>MyApp</h1>
      </router-link>
    </div>
    <div class="header--user">UserName</div>
  </div>
</template>

<script>
export default {
  name: "my-header",
};
</script>

<style lang="scss" scoped>
.header--root {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
</style>
