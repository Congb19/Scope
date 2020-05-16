<template>
	<a-sound
		:src="`src: url(${options.src})`"
		:autoplay="!!options.autoplay"
		:loop="!!options.loop"
		:position="options.position"
		:volume="options.volume || 1"
	></a-sound>
</template>

<script>
	export default {
		name: "va-sound",
		props: {
			options: {
				type: Object,
				default: () => ({}),
				required: true
			}
		}
	};
</script>
