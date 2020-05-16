<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>lyc wyw</div>
		<a-scene
			embedded
			arjs="sourceType: webcam;"
			renderer="antialias: true; alpha: true; precision: medium;"
		>
			<!-- <a-scene vr-mode-ui="enabled: false;"> -->
			<a-marker preset="hiro">
				<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
				<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
				<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
				<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
			</a-marker>
			<a-entity fov="79" active="true" look-controls></a-entity>
		</a-scene>
	</div>
</template>

<script>
	import aframe from "aframe/dist/aframe-master";
	import aframear from "aframe-ar/dist/aframe-ar";
	// import { ascene } from "aframe";

	export default {
		name: "Scene",
		// components: {
		// 	"a-scene": aframe,
		// 	"a-marker": aframe
		// },
		mounted: () => {
			console.log("mounted!");
		},
		props: {
			msg: String
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
