// Powered By lyc, wyw
// 2020/6
import React, { Component } from "react";
import { Slider, InputNumber, Row, Col } from "antd";
import "./css/index.css";

export default class App extends Component {
	constructor(props) {
		console.log("model to display: ", props.props);
		super(props);
		this.state = { gltf: "", scaleValue: "0.02", rotateValue: "30" };
	}
	componentDidMount() {
		this.setState({
			gltf: "trex/" + this.props.props + ".gltf",
			scaleValue: "0.02",
			rotateValue: "30",
		});
		console.log("模型路径：", this.state.gltf);
	}
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
					<Row id="sliderScale">
						<Col span={20}>
							<Slider
								// id="sliderScale"
								min={0}
								max={0.04}
								onChange={this.onChangeScale}
								value={
									typeof scaleValue === "number"
										? scaleValue
										: 0.02
								}
								step={0.001}
							/>
						</Col>
						<Col span={4}>
							<InputNumber
								min={0}
								max={0.04}
								style={{ margin: "0 12px" }}
								step={0.001}
								value={scaleValue}
								onChange={this.onChangeScale}
							/>
						</Col>
					</Row>
					<Row id="sliderRotate">
						<Col span={20}>
							<Slider
								// id="sliderRotate"
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
						<Col span={4}>
							<InputNumber
								min={0}
								max={360}
								style={{ margin: "0 12px" }}
								step={0.01}
								value={rotateValue}
								onChange={this.onChangeRotate}
							/>
						</Col>
					</Row>
				</a-entity>
			</React.Fragment>
		);
		return result;
	}
}
