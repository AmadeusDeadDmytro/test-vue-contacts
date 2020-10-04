<template>
	<div>
		<nav>
			<ul>
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/settings">Settings</router-link>
				</li>
			</ul>
		</nav>
		<router-view> </router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {},
	};
</script>

<style></style>
