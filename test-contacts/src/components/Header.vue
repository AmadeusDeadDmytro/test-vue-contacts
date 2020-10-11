<template>
	<div class="header">
		<h1>Contacts</h1>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		components: {},
	};
</script>

<style lang="scss" scoped>
	@import '../scss/colors';
	
	.header {
		border-bottom: 3px solid $light;

		h1 {
			color: $light;
			width: 100%;
			text-align: center;
			font-size: 32px;
			padding: 20px 0;
		}
	}
</style>
