<template>
  <div class="main-layout--root">
    <div class="main-layout--wrap">
      <my-header class="main-layout--header" />
      <div class="main-layout--content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-layout",
};
</script>

<style lang="scss" scoped>
.main-layout--root {
  margin-bottom: 50px;
  .main-layout--header {
    margin: 0 50px;
    
    @media screen and (max-width: 350px) {
      margin: 0 20px;
    }
  }
  .main-layout--wrap {
    margin: 0 50px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .main-layout--content {
    margin: 0 50px 50px 50px;

    @media screen and (max-width: 350px) {
      margin: 0;
    }
  }
}
</style>
