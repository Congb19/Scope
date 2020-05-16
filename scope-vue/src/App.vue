<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
		<Scene2 msg="Welcome to Scope App" />
	</div>
</template>

<script>
	import Scene from "./components/Scene.vue";
	import Scene2 from "./components/Scene2.vue";

	export default {
		name: "App",
		components: {
			Scene,
			Scene2
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
