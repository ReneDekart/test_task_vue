<template>
  <div class="home-page--root">
    <div>
      <h1>Тестовое задание</h1>
      <h3>соискателя на должность "Front-end разработчика"</h3>
    </div>
    <div>
      Для промотра списка документов перейдите по ссылке:
      <router-link :to="{ name: 'dashboard' }"> клац </router-link>
    </div>
    <div>
      Репозиторий можно найти здесь: 
      <a href='https://github.com/ReneDekart/test_task_vue.git' target="_blank" > клац </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "home-page",
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.home-page--root {
  text-align: center;

  > div:nth-child(2) {
    margin-top: 50px;

    > a {
      font-weight: bold;
      color: $c_blue;
    }
  }
}
</style>
