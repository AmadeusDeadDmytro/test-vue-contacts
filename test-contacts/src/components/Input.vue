<template>
	<div class="input_block">
		<label for={{idInput}}>{{labelInput}}: </label>
		<input id={{idInput}} class="input" type="text"/>
	</div>
</template>

<script>
export default {
	props:['label', 'id'],
	data () {
		return {
			labelInput: this.label,
			idInput: this.id
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../scss/colors';

	.input_block{
		display: flex;
		align-items: center;
		width: 100%;
		margin: 20px 0;

		label {
			color: $grey;
			margin-right: 20px;
		}

		.input{
			background: transparent;
			border: 1px solid $grey;
			border-radius: 6px;
			color: $light;
			height: 30px;
			padding: 10px;
			transition: border-color .2s linear;

			&:focus, &:hover{
				border-color: $light;
				transition: border-color .2s linear;
			}
		}
	}
</style>