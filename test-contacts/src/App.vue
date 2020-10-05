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
		background-color: #22222c;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		font-family: Verdana, Geneva, Tahoma, sans-serif;


		.wrapper{
			width: 600px;
			border-right: 1px solid;
			border-left: 1px solid;
			border-color: #dadbd6;
			min-height: 100vh;
		}
	}
</style>
