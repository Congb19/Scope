// Powered By lyc, wyw
// 2020/6
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { message, Modal, Button } from "antd";
import "./css/index.css";

export default class App extends Component {
	constructor(props) {
		console.log("info to show: ", props.props);
		super(props);
		this.state = {
			visible: false,
			title: props.props,
			context: "",
		};
	}
	componentDidMount() {
		let h = this.state.title;
		let t = "啦啦啦，这是一个" + this.state.title + "，暂无详细资料";
		switch (this.state.title) {
			//新资料添加case即可
			case "bicycle":
				h = "自行车";
				t =
					"啦啦啦，这是一个 自行车，" +
					"中文名 自行车，又称脚踏车或单车，通常是二轮的小型陆上车辆。人骑上车后，以脚踩踏板为动力，是绿色环保的交通工具。英文bicycle。其中bi意指二，而cycle意指轮，即两轮车。在中国内地、台湾、新加坡，通常称其为“自行车”或“脚踏车”；在港澳则通常称其为“单车”（其实粤语通常都这么称呼）；而在日本称为“自転（转）车”。自行车种类很多，有单人自行车，双人自行车还有多人自行车。";
				break;
			case "person":
				h = "人";
				t =
					"啦啦啦，这是一个 人，" +
					"属于智人（学名：Homo sapiens），是人属下的唯一现存物种。形态特征比直立人更为进步。分为早期智人和晚期智人。早期智人过去曾叫古人，生活在距今25万～4万年前，主要特征是脑容量大，在1300毫升以上；眉嵴发达，前额较倾斜，枕部突出，鼻部宽扁，颌部前突。";
				break;
			case "orange":
				h = "橘子";
				t =
					"啦啦啦，这是一个 橘子，" +
					"是芸香科柑橘属的一种水果。橘（jú）和桔（jú）都是现代汉语规范字，然而桔作橘子一义时，为橘的俗写。在广东的一些方言中二字同音，桔也曾做过橘的二简字。闽南语称橘为柑仔。西南官话区的各方言中呼为柑子或柑儿。“柑橘属”包括柑橘、橙、柚等。柑和橘都属于芸香科柑橘属的宽皮柑橘类，果实外皮肥厚，内藏瓤瓣，由汁泡和种子构成。";
				break;
			case "car":
				h = "汽车";
				t =
					"啦啦啦，这是一个 汽车，" +
					"由动力驱动，具有4个或4个以上车轮的非轨道承载的车辆，主要用于：载运人员和（或）货物；牵引载运人员和（或）货物的车辆；特殊用途。国产汽车品牌有：长安、长城、奇瑞、吉利、荣威等。国外汽车品牌有：丰田、大众、现代、起亚、标致等。";
				break;
			case "cup":
				h = "杯子";
				t =
					"啦啦啦，这是一个 杯子，" +
					"由于没有模型了，就先用了个茶壶~";
				break;
		}
		this.setState({
			title: h,
			context: t,
		});
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	};
	playAudio = () => {
		let audioPath = "./assets/" + this.props.props + ".mp3";
		ReactDOM.render(
			<audio id="audio" src={audioPath}></audio>,
			document.getElementById("audiopos")
		);
		let audio = document.getElementById("audio");
		audio.play();
	};
	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};
	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};
	render() {
		return (
			<React.Fragment>
				<div>
					<Button
						type="primary"
						onClick={this.showModal}
						id="btn-showinfo"
						shape="round"
						size="large"
					>
						{this.state.title} 的详细信息
					</Button>
					<Modal
						title={this.state.title}
						visible={this.state.visible}
						onOk={this.handleOk}
					>
						<p>Powered By lyc, wyw</p>
						<p>{this.state.context}</p>
						<Button
							type="primary"
							onClick={this.playAudio}
							shape="round"
							size="medium"
						>
							播放 {this.state.title} 的介绍音频
						</Button>
					</Modal>
				</div>
			</React.Fragment>
		);
	}
}
