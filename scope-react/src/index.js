// Powered By lyc, wyw
// 2020/6
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import * as serviceWorker from "./serviceWorker";
import "./css/index.css";
let app;
// function start() {
// 	app = <App />;
// 	ReactDOM.render(
// 		<React.StrictMode>{app}</React.StrictMode>,
// 		document.getElementById("root")
// 	);
// }
// app = (
// 	<div id="bg">
// 		<Button
// 			type="primary"
// 			shape="round"
// 			icon={<SearchOutlined />}
// 			size="large"
// 			id="btn-start"
// 			onClick={start}
// 		>
// 			开始使用！
// 		</Button>
// 	</div>
// );
app = <App />;
ReactDOM.render(
	<React.StrictMode>{app}</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
