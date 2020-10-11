<template>
	<span class="empty_field"><i>field is empty</i></span>
</template>

<script>
	export default {
		name: "EmptyField"
	}
</script>

<style lang="scss" scoped>
	@import "../scss/colors";

	.empty_field {
		i {
			color: $grey;
		}
	}
</style>