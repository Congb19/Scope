// Powered By lyc, wyw
// 2020/6
import React, { Component } from "react";
import { Slider, InputNumber, Row, Col } from "antd";
import { Modal, Button } from "antd";
import "./css/index.css";

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
	componentDidMount() {
		//如果偶数次识别到且拥有2号模型，就显示2号模型
		let tmp = this.props.props.model;
		if (
			this.props.props.yesTimes % 2 === 0 &&
			(this.props.props.model == "cup" ||
				this.props.props.model == "bicycle" ||
				this.props.props.model == "car")
		) {
			tmp = this.props.props.model + "-2";
			console.log("偶数");
		}
		this.setState({
			gltf: "trex/" + tmp + ".gltf",
		});
		console.log("模型路径：", this.state.gltf);
	}
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
							size="large"
						>
							切换模型（如果有两个的话）
						</Button>
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
