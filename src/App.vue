<template>
  <div id="app">
		<router-view></router-view>
		
  </div>
</template>

<script>
 export default {
 name: 'app',
 created() {
 global.vue = this;
 },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
  width: 100%;
}
</style>
