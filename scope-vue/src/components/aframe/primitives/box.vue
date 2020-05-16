<template>
	<a-box
		ref="a-box"
		:color="options.color"
		:position="options.position"
		:rotation="options.rotation"
		:scale="options.scale"
		:src="options.src"
		:animation="options.animation"
		:animation__mouseenter="options['animation__mouseenter']"
		:animation__mouseleave="options['animation__mouseleave']"
		@mouseenter="({ target }) => $emit('mouseenter', target.object3D)"
		@mouseleave="({ target }) => $emit('mouseleave', target.object3D)"
	></a-box>
</template>

<script>
	export default {
		name: "av-box",
		props: {
			options: {
				type: Object,
				default: () => ({}),
				required: true
			},
			mouseenter: {
				type: Function,
				default: () => {}
			},
			mouseleave: {
				type: Function,
				default: () => {}
			}
		},
		mounted() {
			const vue = this;
			vue.$nextTick(() => {
				if (vue.mouseenter) {
					vue.$refs["a-box"].addEventListener(
						"mouseenter",
						({ target }) => {
							vue.mouseenter(target.object3D);
						}
					);
				}
				if (vue.mouseleave) {
					vue.$refs["a-box"].addEventListener(
						"mouseleave",
						({ target }) => {
							vue.mouseleave(target.object3D);
						}
					);
				}
			});
		}
	};
</script>
