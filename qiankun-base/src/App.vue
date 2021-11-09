<template>
  <div>
    <div class="wrapper">
      <router-link to="/">HOME</router-link>
      <router-link to="/vue">vue应用</router-link>
      <router-link to="/react">react应用</router-link>
    </div>
    <router-view></router-view>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 300px;
  margin: 0 auto;
  border: 1px solid #999;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
