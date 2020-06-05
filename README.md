# Scope

### 简介

Name: Scope；Scope 意为…镜(观察仪器)；我们希望我们的项目能像各种 Scope 一样洞察秋毫。

中文名: 木本水源；木本水源，出自《汉学师承记》卷八：“菜瓜祭饮食之人，芹藻释瞽宗之奠，乃木本水源之意也。”意指树木的根本和流水的源头，引申为寻根溯源的意思。

本项目为 2020 数字媒体技术创新实践项目，基于 AR.js + tensorflow.js 打造跨平台的 AR 识图交互应用 web 站点。

### 成员

汪雨薇（AI） 林英琮（AR）

### 技术栈

前端 AR：react.js(UI 使用 antd) + AR.js(Aframe)

识别：tensorflow.js + yolov3

### 感想

感觉 aframe 很强大但是繁琐，然后 ar.js 的文档过于弱鸡，然后 react 和 antdesign 非常好用。

可能还是由于自己太菜，读不顺英文文档，不会读源码，本项目仅仅是实现了最基础的拍照 + 识别 + 模型渲染交互/信息展示，在前端的层面仅仅是一个逻辑非常简单的 app（只有简单的 UI 控件和信息框），识别的接口也是雨薇写好提供的，在识别方面也是用了 yolov3 训练好的模型（自己训练的太弱）。

本项目仍然存在问题，例如模型体积较大（如果使用我的服务器小水管平均一次识别需要五分钟）；跨平台兼容性并不是特别的好（更换设备分辨率有可能导致 UI 位置不美观，模型比例有点失调等）。未来如果继续维护，会在这几个方面进行跟进。

几个技术栈都是现学现用，所幸几个月的复习 js 基础还是对本项目的一些功能有所帮助，否则连基础功能都写不出来 😭

继续加油！by Congb19 2020.6.5

# scope

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

```
cd scope-react
npm start`
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```
npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
