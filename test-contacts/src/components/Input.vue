<template>
	<div class="input_block">
		<label for={{idInput}}>{{labelInput}}: </label>
		<input id={{idInput}} class="input" type="text" v-model="value" @keyup="emitToParent"/>
	</div>
</template>

<script>
export default {
	props:['label', 'id'],
	data () {
		return {
			value: '',
			labelInput: this.label,
			idInput: this.id
		}
	},
	methods: {
		emitToParent () {
			this.$emit('handle-input', {id: this.idInput, text: this.value})
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
			min-width: 100px;
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