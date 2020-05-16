<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>lyc wyw</div>
		<!-- <a-scene
			embedded
			arjs="sourceType: webcam;"
			renderer="antialias: true; alpha: true; precision: medium;"
		>
			<a-marker preset="hiro">
				<a-sphere position="0 0.5 0" radius="0.5" color="#EF2D5E"></a-sphere>
				<a-plane position="0 0 0" rotation="-90 0 0" width="1" height="1" color="#7BC8A4"></a-plane>
				<a-entity gltf-model="../../arjs/trex/scene.gltf" scale="1 1 1" position="0 0 0"></a-entity>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>-->
		<a-scene>
			<va-box :options="boxOptions"></va-box>
			<!-- <a-sky src="#sky-texture"></a-sky> -->
			<!-- <va-plane :options="planeOptions"></va-plane> -->
			<!-- <va-light :options="lightOptions"></va-light> -->
			<!-- <va-sound :options="soundOptions"></va-sound> -->
			<va-entity :options="cameraOptions"></va-entity>

			<a-camera>
				<a-cursor color="white"></a-cursor>
			</a-camera>
		</a-scene>
	</div>
</template>

<script>
	import "aframe";
	import vaBox from "@/components/aframe/primitives/box";
	import vaPlane from "@/components/aframe/primitives/plane";
	import vaLight from "@/components/aframe/primitives/light";
	import vaSound from "@/components/aframe/primitives/sound";
	import vaEntity from "@/components/aframe/entity";

	export default {
		name: "Scene",
		components: {
			vaBox,
			vaPlane,
			vaLight,
			vaSound,
			vaEntity
		},
		data() {
			return {
				boxOptions: {
					position: "0 2 -5",
					rotation: "0 45 45",
					scale: "2 2 2",
					animation: {
						property: "object3D.position.y",
						to: 2.2,
						dir: "alternate",
						dur: 2000,
						loop: true
					},
					["animation__mouseenter"]: {
						property: "scale",
						to: "2.3 2.3 2.3",
						dur: 500,
						startEvents: "mouseenter"
					},
					["animation__mouseleave"]: {
						property: "scale",
						to: "2 2 2",
						dur: 300,
						startEvents: "mouseleave"
					}
				},
				cameraOptions: {}
			};
		},
		mounted: () => {
			console.log("mounted!");
		},
		beforeDestroy: () => {
			console.log("beforeDestroy!");
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
