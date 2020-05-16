import React, { Component } from "react";
import yolo from "tfjs-yolo";

export default class App extends Component {
	async yolo3() {
		console.log("begin");
		const $img = document.getElementById("img");

		let myYolo = await yolo.v3(
			"http://192.168.123.222:8080/yolov3-tiny/model.json"
		);
		const boxes = await myYolo.predict($img);
		console.log(boxes);
	}
	render() {
		return <div onClick={this.yolo3}>aa</div>;
	}
}
