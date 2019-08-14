<template>
  <div id="app">
		<van-button type="info" to="/">index</van-button>
		<van-button type="primary" to="user">user</van-button>
		<van-button type="danger" to="/">index</van-button>
		<router-view></router-view>
		
  </div>
</template>

<script>
	
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
