<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>lyc wyw</div>
		<div class="paintball-map">
			<div class="perms" v-if="askPerms">
				<p>Allow Camera Access?</p>
				<input type="checkbox" id="allow_camera" @change="allowCameraPerm()" />
				<label for="allow_camera"></label>
			</div>
			<div class="ar-scene" v-if="allowAR">
				<div class="target" @click="hitRecieved"></div>
				<a-scene
					embedded
					arjs="sourceType: webcam;"
					renderer="antialias: true; alpha: true; precision: medium;"
				>
					<a-marker preset="hiro">
						<a-sphere position="0 0.5 0" radius="0.5" color="#EF2D5E"></a-sphere>
						<a-plane position="0 0 0" rotation="-90 0 0" width="1" height="1" color="#7BC8A4"></a-plane>
					</a-marker>
					<a-entity camera></a-entity>
				</a-scene>
			</div>
			<hr v-if="askPerms" />
			<button type="button" v-if="askPerms" @click="changeLayout(true)">Load AR</button>
		</div>
	</div>
</template>

<script>
	import "aframe";
	import "aframe-ar";

	export default {
		name: "Scene2",
		mounted: () => {
			console.log("mounted!");
		},
		data: function() {
			return {
				askPerms: true,
				allowAR: false,
				allowCamera: false
			};
		},
		beforeDestroy: () => {
			console.log("beforeDestroy!");
		},
		methods: {
			changeLayout: function(layout) {
				this.askPerms = false;
				this.allowAR = layout;
			},
			allowCameraPerm: function() {
				let self = this;
				// eslint-disable-next-line
				console.log({
					allowCamera: this.allowCamera,
					self: self
				});
				if (this.allowCamera) {
					this.allowCamera = false;
					return false;
				}
				let getCamera =
					navigator.mediaDevices.getUserMedia ||
					navigator.getUserMedia ||
					0;
				if (!getCamera) {
					alert("Sorry, your browser does not support getUserMedia");
					return false;
				}
				// Request the camera.
				// eslint-disable-next-line
				navigator.getUserMedia(
					// Constraints
					{
						video: true
					},
					// Success Callback
					function(localMediaStream) {
						self.allowCamera = true;
						// eslint-disable-next-line
						console.log({
							localMediaStream: localMediaStream,
							selfAllowCamera: self.allowCamera
						});
					},
					// Error Callback
					function(err) {
						self.allowCamera = false;
						// Log the error to the console.
						// eslint-disable-next-line
						console.warn(
							"The following error occurred when trying to use getUserMedia: " +
								err
						);
					}
				);
			},
			hitRecieved: function() {
				console.log({
					hitRecieved: true
				});
				window.navigator.vibrate([200, 100, 200]);
			}
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
