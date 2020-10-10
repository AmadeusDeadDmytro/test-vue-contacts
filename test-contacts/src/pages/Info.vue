<template>
	<div class="info">
		<div class="info_form_group">
			<div class="info_fm_fields">
				
			</div>
			<Button text="Add Field" />
		</div>
	</div>
</template>

<script>
	// import Input from '../components/Input'
	import Button from '../components/Button'

	export default {
		name: 'Info',
		components: {Button},
	};
</script>

<style lang="scss" scoped>
	@import '../scss/colors';

	.info {
		padding: 20px;
		
	}
</style>
