<template>
	<div class="header">
		<h1>Contacts</h1>
		<div class="header_nav">
			<div class="header_link">
				<router-link to="/">home</router-link>
			</div>			
			<div class="header_link">
				<router-link to="/settings">settings</router-link>
			</div>
		</div>
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
		h1 {
			color: $light;
			width: 100%;
			text-align: center;
			font-size: 32px;
			padding: 20px 0;
		}	

		.header_nav {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.header_link {
				width: 50%;
				text-align: center;

				a{
					color: $grey;
					border-bottom: 3px solid $grey;
					display: block;
					padding-bottom: 15px;
				}
				a.router-link-active{
					color: $light;
					font-size: 16px;
					border-color: $light;
				}

			}
		}
	}
</style>
