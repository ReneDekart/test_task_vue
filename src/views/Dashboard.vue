<template>
  <div class="dashboard--root">
    <document-list class="dashboard--list" />
    <div class="dashboard--view">
      <document-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.dashboard--root {
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
  .dashboard--list {
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    margin-right: 30px;

    @media screen and (max-width: 750px) {
      flex-grow: 1;
      margin: 0 5px 30px 5px;
      margin-bottom: 30px;
    }
  }
  .dashboard--view {
    flex-grow: 1;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;

    @media screen and (max-width: 750px) {
      margin: 0 5px 30px 5px;
      margin-bottom: 30px;
    }
  }
}
</style>
