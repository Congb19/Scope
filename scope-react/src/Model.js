// Powered By lyc, wyw
// 2020/6
import React, { Component } from "react";
import { Slider, InputNumber, Row, Col } from "antd";
import { Modal, message, Button } from "antd";
import { Switch } from "antd";
import "./css/index.css";

let rotateId = null;
export default class App extends Component {
	constructor(props) {
		console.log(
			"model to display: ",
			props.props.model,
			props.props.yesTimes
		);
		super(props);
		this.state = {
			gltf: "", //模型路径
			scaleValue: "0.02", //缩放比例
			rotateValue: "30", //旋转角度
		};
	}
	info1 = () => {
		if (this.props.props.model == "bicycle")
			message.info("这是 车把手，用来保持自行车的平衡");
	};
	info2 = () => {
		if (this.props.props.model == "bicycle")
			message.info("这是 车主体，自行车的骨架");
	};
	info3 = () => {
		if (this.props.props.model == "bicycle")
			message.info("这是 车轮胎，车类前进的载体");
	};
	info4 = () => {
		if (this.props.props.model == "bicycle")
			message.info("这是 车踏板，骑车的人发力点");
	};
	componentDidMount = () => {
		//如果偶数次识别到且拥有2号模型，就显示2号模型
		let tmp = this.props.props.model;
		let flag = this.props.props.yesTimes % 2 == 0;
		if (flag && ["bicycle", "car"].includes(this.props.props.model)) {
			tmp = this.props.props.model + "-2";
			// this.showAnother();
			console.log("偶数");
		}
		this.setState({
			gltf: "trex/" + tmp + ".gltf",
		});
		this.autoRotate();
	};
	autoRotate = () => {
		rotateId = setInterval(this.rotate, 20);
	};
	stopRotate = () => {
		clearInterval(rotateId);
		rotateId = null;
	};
	rotate = () => {
		this.setState((state, props) => {
			return {
				rotateValue: (state.rotateValue + 1) % 360,
			};
		});
	};
	swapRotate = (checked, event) => {
		this.stopRotate();
		if (checked) this.autoRotate();
		else this.stopRotate();
	};
	showAnother = () => {
		//点击切换模型（如果有二号模型的话）
		console.log("model changed");
		let tmp = this.props.props.model;
		if (this.state.gltf == "trex/" + this.props.props.model + ".gltf") {
			tmp = this.props.props.model + "-2";
		}
		this.setState({
			gltf: "trex/" + tmp + ".gltf",
		});
	};
	onChangeScale = (value) => {
		if (isNaN(value)) {
			return;
		}
		this.setState({
			scaleValue: value,
		});
	};
	onChangeRotate = (value) => {
		if (isNaN(value)) {
			return;
		}
		this.setState({
			rotateValue: value,
		});
	};
	render() {
		const { scaleValue } = this.state;
		const { rotateValue } = this.state;
		let ss =
			this.state.scaleValue +
			" " +
			this.state.scaleValue +
			" " +
			this.state.scaleValue;
		let rr = "0 " + this.state.rotateValue + " 0";
		let result = (
			<React.Fragment>
				<div id="btn-fake1" class="fakes" onClick={this.info1}>
					按钮区域1
				</div>
				<div id="btn-fake2" class="fakes" onClick={this.info2}>
					按钮区域2
				</div>
				<div id="btn-fake3" class="fakes" onClick={this.info3}>
					按钮区域3
				</div>
				<div id="btn-fake4" class="fakes" onClick={this.info4}>
					按钮区域4
				</div>
				{/* <a-plane
						position="0 0 0"
						rotation="-90 0 0"
						width="1"
						height="1"
						color="#7BC8A4"
					></a-plane> */}
				<a-entity
					id="aentity"
					gltf-model={this.state.gltf}
					scale={ss}
					position="0 0 0"
					rotation={rr}
				>
					<Row>
						<Button
							type="primary"
							onClick={this.showAnother}
							id="btn-showanother"
							shape="round"
							size="medium"
						>
							切换模型
						</Button>
						<Switch
							id="btn-swaprotate"
							size={64}
							checkedChildren="开启自动旋转"
							unCheckedChildren="关闭自动旋转"
							defaultChecked="false"
							onClick={this.swapRotate}
						/>
					</Row>
					<Row id="sliderScale">
						<Col span={20}>
							<Slider
								min={0}
								max={0.06}
								onChange={this.onChangeScale}
								value={
									typeof scaleValue === "number"
										? scaleValue
										: 0.02
								}
								step={0.001}
							/>
						</Col>
					</Row>
					<Row id="sliderRotate">
						<Col span={20}>
							<Slider
								min={0}
								max={360}
								onChange={this.onChangeRotate}
								value={
									typeof rotateValue === "number"
										? rotateValue
										: 30
								}
								step={0.01}
							/>
						</Col>
					</Row>
				</a-entity>
			</React.Fragment>
		);
		return result;
	}
}
