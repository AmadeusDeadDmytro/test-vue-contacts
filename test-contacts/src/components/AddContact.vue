<template>
	<div class="add_form">
		<p class="title">New Contact</p>
		<Input label="Name" id="name"/>
		<div class="add_form_btns">
			<Button text="Cancel"/>
			<Button text="Save"/>
		</div>
	</div>
</template>

<script>
	import Input from "./Input"
	import Button from "./Button"

	export default {
		components: {Input, Button}
	};
</script>

<style lang="scss" scoped>
	.add_form {
		.add_form_btns{
			display: flex;
			justify-content: flex-start;
			
			.btn{
				margin-right: 10px;
			}
		}
	}
</style>
