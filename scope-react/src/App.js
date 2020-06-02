// Powered By lyc, wyw
// 2020/6
import React, { Component } from "react";
import ReactDOM from "react-dom";
import yolo from "tfjs-yolo";
import Model from "./Model";

let type = "";
export default class App extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {}
	componentWillUnmount() {}
	async check() {
		// PART1 开始
		// todo：1 取视频流 2 拍照作为img元素
		console.log("begin");
		const video = document.getElementById("video"),
			canvas = document.getElementById("canvas"),
			img = document.getElementById("img");
		// 取视频流
		navigator.getMedia =
			navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msGetUserMedia;
		const constraints = {
			audio: false,
			video: { width: 800, height: 600 },
		};
		navigator.mediaDevices
			.getUserMedia(constraints)
			.then(function (mediaStream) {
				video.srcObject = mediaStream;
				video.onloadedmetadata = function (e) {
					video.play();
				};
			})
			.catch(function (err) {
				console.log(err.name + ": " + err.message);
			});
		// 拍照作为img元素
		canvas.getContext("2d").drawImage(video, 0, 0, 800, 600);
		img.src = canvas.toDataURL("image/png");

		// PART2 识别 img=要识别的图
		// todo：识别，把结果存到box
		const $img = document.getElementById("img");
		let myYolo = await yolo.v3(
			"http://192.168.123.222:8080/yolov3-tiny/model.json"
			// "https://www.congb19.top/v3tiny/model.json"
		);
		const boxes = await myYolo.predict($img);

		// PART3 结果处理 boxes=识别结果
		// todo：1 在底座上渲染模型（maybe可交互旋转什么的）  2 弹出相关信息，文字，百科链接
		// 在底座上渲染模型
		if (boxes.length < 1) console.log("对不起，没有识别到QAQ");
		else {
			console.log("识别到了，", boxes[0].class);
			console.log(boxes);
			type = "scene";
			// type = boxes[0].class;
			ReactDOM.render(
				<Model props={type}></Model>,
				document.getElementById("amarker")
			);
			// 弹窗
		}
		// const aentity = document.getElementById("aentity");
	}
	render() {
		return (
			<button id="check" class="btn btn-check" onClick={this.check}>
				check!
			</button>
		);
	}
}
// let aa = document.getElementById("check");
// aa.click();
