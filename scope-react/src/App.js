import React, { Component } from "react";
import yolo from "tfjs-yolo";

export default class App extends Component {
	async yolo3() {
		// PART 1 开始
		// todo：1 拍照作为img dom元素  2
		console.log("begin");
		const video = document.getElementById("video"),
			canvas = document.getElementById("canvas"),
			img = document.getElementById("img"),
			vendorUrl = window.URL || window.webkitURL;
		//媒体对象
		navigator.getMedia =
			navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msGetUserMedia;
		var constraints = { audio: false, video: { width: 783, height: 390 } };
		navigator.mediaDevices
			.getUserMedia(constraints)
			.then(function (mediaStream) {
				var video = document.querySelector("video");
				video.srcObject = mediaStream;
				video.onloadedmetadata = function (e) {
					video.play();
				};
			})
			.catch(function (err) {
				console.log(err.name + ": " + err.message);
			});
		canvas.getContext("2d").drawImage(video, 0, 0, 400, 300);
		img.src = canvas.toDataURL("image/png");

		// PART 2 识别 img=要识别的图
		const $img = document.getElementById("img");
		let myYolo = await yolo.v3(
			"http://192.168.123.222:8080/yolov3-tiny/model.json"
		);
		const boxes = await myYolo.predict($img);

		// PART 3 结果处理 boxes=识别结果
		// todo：1 在底座上渲染模型（maybe可交互旋转什么的）  2 弹出相关信息，文字，百科链接
		console.log(boxes);
	}
	render() {
		return (
			<button id="check" class="btn btn-check" onClick={this.yolo3}>
				check!
			</button>
		);
	}
}
// let aa = document.getElementById("aa");
// aa.click();
