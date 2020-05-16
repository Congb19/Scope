<template>
	<a-entity
		:id="options.id"
		:camera="options.camera"
		:look-controls="options['look-controls']"
		:cursor="options.cursor"
		:position="options.position"
		:geometry="options.geometry"
		:material="options.material"
		:cursor-listener="options['cursor-listener']"
		:environment="options.environment"
	></a-entity>
</template>

<script>
	export default {
		name: "va-entity",
		props: {
			options: {
				type: Object,
				default: () => ({}),
				required: true
			}
		}
	};
</script>
