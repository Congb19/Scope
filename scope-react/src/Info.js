// Powered By lyc, wyw
// 2020/6
import React, { Component } from "react";
import { Modal, Button } from "antd";
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
			<div>
				<Button
					type="primary"
					onClick={this.showModal}
					id="btn-showinfo"
					shape="round"
					size="large"
				>
					Show Detail of {this.state.title}
				</Button>
				<Modal
					title={this.state.title}
					visible={this.state.visible}
					onOk={this.handleOk}
				>
					<p>Powered By lyc, wyw</p>
					<p>{this.state.context}</p>
				</Modal>
			</div>
		);
	}
}
