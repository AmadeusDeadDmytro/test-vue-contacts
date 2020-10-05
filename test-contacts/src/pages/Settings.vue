<template>
	<div class="settings">
		<div class="settings_form_group">
			<div class="settings_fm_fields">
				
			</div>
			<Button text="Add Input" />
		</div>
	</div>
</template>

<script>
	// import Input from '../components/Input'
	import Button from '../components/Button'

	export default {
		name: 'Settings',
		components: {Button},
	};
</script>

<style lang="scss" scoped>
	@import '../scss/colors';

	.settings {
		padding: 20px;
		
	}
</style>
