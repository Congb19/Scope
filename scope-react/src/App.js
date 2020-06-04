// Powered By lyc, wyw
// 2020/6
import React, { Component } from "react";
import ReactDOM from "react-dom";
import yolo from "tfjs-yolo";
import Model from "./Model";
import { Spin, Space } from "antd";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { notification } from "antd";
import "./css/index.css";

const openNotification = (type, message, description) => {
	// notification.open({
	// 	message: message,
	// 	description: description,
	// 	onClick: () => {
	// 		console.log("Notification Clicked!");
	// 	},
	// });
	notification[type]({
		message: message,
		description: description,
	});
};
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { checking: false, type: "" };
		console.log("ischecking? ", this.state.checking);
	}
	componentDidMount() {}
	componentWillUnmount() {}
	check = async () => {
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
		img.src = await canvas.toDataURL("image/png");

		// PART2 识别 img=要识别的图

		// todo：识别，loading，把结果存到box，取消loading
		const $img = document.getElementById("img");
		this.setState({ checking: true, type: "" });
		console.log("ischecking? ", this.state.checking);

		let myYolo = await yolo.v3(
			"http://192.168.123.222:8080/yolov3-tiny/model.json"
			// "https://www.congb19.top/v3tiny/model.json"
		);
		// let timer = setTimeout(() => 0, 10000);
		//包装一下识别，如果超时就不要了
		// await Promise.race([myYolo, timer]).then(
		// 	(msg) => {
		// 		console.log("ok", msg);
		// 	},
		// 	(err) => {
		// 		console.log("err", err);
		// 	}
		// );
		const boxes = await myYolo.predict($img);
		this.setState({ checking: false, type: "" });
		console.log("ischecking? ", this.state.checking);

		// PART3 结果处理 boxes=识别结果

		// todo：1 在底座上渲染模型（maybe可交互旋转什么的）  2 弹出相关信息，文字，百科链接
		// 在底座上渲染模型
		if (boxes.length < 1) {
			console.log("error", "对不起，没有识别到QAQ");
			openNotification(
				"error",
				"对不起，没有识别到QAQ",
				"可能太糊了，要不你再试一次？"
			);
		} else {
			console.log("success", "识别到了，", boxes[0].class);
			openNotification(
				"success",
				"识别到了！♪(＾∀＾●)ﾉ",
				"很高兴地告诉你，这是" + boxes[0].class + "！"
			);

			console.log(boxes);
			let result = boxes[0].class;
			this.setState({
				checking: false,
				type: "scene",
			});
			// this.setState({ checking: false, type: result  });
			ReactDOM.render(
				<Model props={this.state.type}></Model>,
				document.getElementById("amarker")
			);
		}
	};
	render() {
		return (
			<div>
				<Space size="middle" id="space-loading">
					<Spin
						id="loading"
						size="large"
						spinning={this.state.checking}
					/>
				</Space>
				<Button
					id="btn-check"
					type="primary"
					shape="round"
					icon={<SearchOutlined />}
					size="large"
					onClick={this.check}
				>
					Check!
				</Button>
			</div>
		);
	}
}
// let aa = document.getElementById("check");
// aa.click();
