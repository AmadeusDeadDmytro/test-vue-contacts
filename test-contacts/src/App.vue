<template>
	<div class="wrapper">
		<Header />
		<router-view> </router-view>
	</div>
</template>

<script>
	import Header from './components/Header'

	export default {
		name: 'App',
		components: {Header},
	};
</script>

<style lang="scss">
	@import './scss/colors';

	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	
	a{
		text-decoration: none;
	}
	
	ul, li{
		list-style: none;
	}
	
	button, input {
		outline: none;
		border: none;
		box-shadow: none;
	}

	body {
		background-color: $dark;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		font-family: Verdana, Geneva, Tahoma, sans-serif;


		.wrapper{
			width: 600px;
			border-right: 1px solid;
			border-left: 1px solid;
			border-color: $light;
			min-height: 100vh;
		}

		.title{
			color: $light;
			font-size: 24px;
			text-align: center;
			width: 100%;
		}
	}
</style>
