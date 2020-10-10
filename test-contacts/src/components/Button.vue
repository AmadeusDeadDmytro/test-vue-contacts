<template>
	<div class="btn">
		<button class="btn_button">{{ btnText }}</button>
	</div>
</template>

<script>
export default {
	props: ['text'],
	data () {
		return {
			btnText: this.text
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '../scss/colors';

	.btn {
		.btn_button {
			background-color: $dark;
			color: $grey;
			border: 1px solid $grey;
			border-radius: 6px;
			font-size: 16px;
			padding: 5px 20px;
			cursor: pointer;
			transition: all .2s linear;

			&:hover {
				background-color: $light;
				color:$dark;
				border: 1px solid $dark;
				transition: all .2s linear;
			}
		}

		
	}
</style>
