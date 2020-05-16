<template>
	<a-light
		:type="options.type"
		:intensity="options.intensity"
		:position="options.position"
		:color="options.color"
	></a-light>
</template>

<script>
	export default {
		name: "va-light",
		props: {
			options: {
				type: Object,
				default: () => ({}),
				required: true
			}
		}
	};
</script>
