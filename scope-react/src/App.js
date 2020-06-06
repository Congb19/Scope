// Powered By lyc, wyw
// 2020/6
import React, { Component } from "react";
import ReactDOM from "react-dom";
import yolo from "tfjs-yolo";
import Model from "./Model";
import Info from "./Info";
import { Spin, Space } from "antd";
import { Button } from "antd";
import { Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SmileTwoTone } from "@ant-design/icons";
import { CloudTwoTone } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { notification } from "antd";
import "./css/index.css";
//弹提示框
const openNotification = (type, message, description, placement) => {
	notification[type]({
		message: message,
		description: description,
		placement,
	});
};
let historytmp = [];
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checking: false, //正在识别
			type: "", //识别结果
			yesTimes: 0, //识别成功次数
			noTimes: 0, //识别失败次数
			history: (
				<Menu>
					<Menu.Item>暂无</Menu.Item>
				</Menu>
			), //历史记录
		};
	}
	componentDidMount() {}
	componentWillUnmount() {}
	showWeather = () => {
		openNotification(
			"success",
			"2020年6月7日",
			"杭州：多云，21℃~28℃",
			"bottomLeft"
		);
	};
	check = async () => {
		// PART0 清除之前的模型和info

		ReactDOM.render(<div></div>, document.getElementById("amarker"));
		ReactDOM.render(<div></div>, document.getElementById("infopos"));

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

		let myYolo,
			flag = false; //flag=是否加载模型超时
		//超时定时器
		let timer = new Promise((resolve, reject) => {
			setTimeout(() => {
				reject("识别模型加载超时");
			}, 7000);
		});
		await Promise.race([
			yolo.v3(
				"http://127.0.0.1:8080/yolov3-tiny/model.json"
				// "https://www.congb19.top/v3tiny/model.json"
			),
			timer,
		])
			.then((result) => {
				flag = true;
				myYolo = result;
				console.log("ok，识别模型加载成功");
			})
			.catch((error) => {
				flag = false;
				console.log("no，", error);
			});
		let boxes; //识别结果
		if (myYolo) boxes = await myYolo.predict($img);
		else boxes = [...Array()];
		this.setState({ checking: false, type: "" });

		// PART3 结果处理 boxes=识别结果

		// todo：1 在底座上渲染模型（可交互旋转什么的）  2 弹出相关信息，文字
		// 在底座上渲染模型
		if (boxes.length < 1) {
			this.setState({ noTimes: this.state.noTimes + 1 });
			if (flag) {
				console.log("error", "对不起，没有识别到QAQ");
				openNotification(
					"error",
					"对不起，没有识别到(づ╥﹏╥)づ",
					"可能太糊了，要不你再试一次？",
					"bottomLeft"
				);
			} else {
				console.log("error", "对不起，网络超时了");
				openNotification(
					"error",
					"对不起，网络超时了(づ╥﹏╥)づ",
					"我的服务器小水管要爆炸啦！",
					"bottomLeft"
				);
			}
		} else {
			this.setState({ yesTimes: this.state.yesTimes + 1 });
			console.log("success", "识别到了，", boxes[0].class);
			openNotification(
				"success",
				"识别到了！♪(＾∀＾●)ﾉ",
				"很高兴地告诉你，这是 " + boxes[0].class + "！",
				"bottomLeft"
			);
			console.log(boxes);
			let result = boxes[0].class,
				model = boxes[0].class;
			//更新一下识别的历史记录
			historytmp.push((historytmp.length + 1).toString() + ". " + result);
			const historyItems = historytmp.map((item) => {
				return <Menu.Item>{item}</Menu.Item>;
			});
			// history = <Menu>{historyItems}</Menu>;
			this.setState({ history: <Menu>{historyItems}</Menu> });
			//列一下现有的模型列表，如果没有模型就用none
			let map = new Map();
			map.set("cup", 1);
			map.set("bicycle", 1);
			map.set("orange", 1);
			map.set("car", 1);
			if (!map.has(model)) model = "none";
			let toModel = { model: model, yesTimes: this.state.yesTimes };
			ReactDOM.render(
				<Model props={toModel}></Model>,
				document.getElementById("amarker")
			);
			//打开info弹窗
			ReactDOM.render(
				<Info props={result}></Info>,
				document.getElementById("infopos")
			);
		}
	};
	render() {
		return (
			<div>
				<Avatar
					size="large"
					id="avatar"
					icon={<CloudTwoTone />}
					onClick={this.showWeather}
				>
					天气~
				</Avatar>
				<Dropdown overlay={this.state.history}>
					<Button
						id="avatar2"
						type="primary"
						shape="round"
						size="large"
						onClick={(e) => e.preventDefault()}
						icon={<SmileTwoTone />}
					>
						历史记录
					</Button>
				</Dropdown>
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
					disabled={this.state.checking}
				>
					开始识别!
				</Button>
			</div>
		);
	}
}
