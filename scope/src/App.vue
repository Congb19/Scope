<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
		<Scene msg="Welcome to Scope App" />
	</div>
</template>

<script>
	import Scene from "./components/Scene.vue";

	export default {
		name: "App",
		components: {
			Scene
		}
	};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
