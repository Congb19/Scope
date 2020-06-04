// Powered By lyc, wyw
// 2020/6
import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		console.log("model to display: ", props.props);
		super(props);
		this.state = { gltf: "", scale: "" };
	}
	componentDidMount() {
		this.setState({
			gltf: "trex/" + this.props.props + ".gltf",
			scale: "",
		});
		console.log("state", this.state.gltf);
	}
	render() {
		return (
			<a-entity
				id="aentity"
				gltf-model={this.state.gltf}
				scale="0.02 0.02 0.02"
				position="0 0 0"
				rotation="0 0 0"
			></a-entity>
		);
	}
}
