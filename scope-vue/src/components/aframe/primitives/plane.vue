<template>
	<a-plane
		:src="options.src"
		:rotation="options.rotation"
		:width="options.width"
		:height="options.height"
		:repeat="options.repeat"
	></a-plane>
</template>

<script>
	export default {
		name: "va-plane",
		props: {
			options: {
				type: Object,
				default: () => ({}),
				required: true
			}
		}
	};
</script>
