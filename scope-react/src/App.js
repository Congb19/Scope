import React, { Component } from "react";
import yolo from "tfjs-yolo";

export default class App extends Component {
	async yolo3() {
		console.log("begin");
		const $img = document.getElementById("img");
		let myYolo = await yolo.v3(
			"http://192.168.123.222:8080/yolov3-tiny/model.json"
		);
		const boxes = await myYolo.predict($img);
		console.log(boxes);
	}
	render() {
		return (
			<a-scene
				embedded
				arjs="sourceType: webcam;"
				renderer="antialias: true; alpha: true; precision: medium;"
			>
				<a-marker preset="hiro">
					<a-sphere
						position="0 0.5 0"
						radius="0.5"
						color="#EF2D5E"
					></a-sphere>
					<a-plane
						position="0 0 0"
						rotation="-90 0 0"
						width="1"
						height="1"
						color="#7BC8A4"
					></a-plane>
				</a-marker>
				<a-entity camera></a-entity>
			</a-scene>
			// <a-scene>
			// 	<a-box
			// 		position="-1 0.5 -3"
			// 		rotation="0 45 0"
			// 		color="#4CC3D9"
			// 	></a-box>
			// 	<a-plane
			// 		position="0 0 -4"
			// 		rotation="-90 0 0"
			// 		width="4"
			// 		height="4"
			// 		color="#7BC8A4"
			// 	></a-plane>
			// </a-scene>
			// <a-scene
			// 	vr-mode-ui="enabled: false;"
			// 	renderer="logarithmicDepthBuffer: true;"
			// 	embedded
			// 	arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
			// >
			// 	<a-nft
			// 		type="nft"
			// 		url="trex/trex-image/K"
			// 		smooth="true"
			// 		smoothCount="10"
			// 		smoothTolerance=".01"
			// 		smoothThreshold="5"
			// 	>
			// 		<a-box
			// 			position="-1 0.5 -3"
			// 			rotation="0 45 0"
			// 			color="#4CC3D9"
			// 		></a-box>
			// 		<a-sphere
			// 			position="0 1.25 -5"
			// 			radius="1.25"
			// 			color="#EF2D5E"
			// 		></a-sphere>
			// 		<a-cylinder
			// 			position="1 0.75 -3"
			// 			radius="0.5"
			// 			height="1.5"
			// 			color="#FFC65D"
			// 		></a-cylinder>
			// 		<a-plane
			// 			position="0 0 -4"
			// 			rotation="-90 0 0"
			// 			width="4"
			// 			height="4"
			// 			color="#7BC8A4"
			// 		></a-plane>
			// 		<a-sky color="#ECECEC"></a-sky>
			// 	</a-nft>
			// 	<a-entity camera></a-entity>
			// </a-scene>
		);
		// return <div onClick={this.yolo3}>aa</div>;
	}
}
