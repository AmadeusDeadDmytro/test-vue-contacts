<template>
	<div class="contacts">
		<ul class="contacts_list">
			<li class="contacts_item">
				<span class="contact_name">Annie Bing</span>
				<div class="contact_icons_block">
					<img class="contact_icon" src="@/assets/visibility-24px.svg" alt="">
					<img class="contact_icon" src="@/assets/delete_forever-24px.svg" alt="">
				</div>
			</li>
		</ul>

		<div class="contacts_add_btn">
			<Button text="Add Contact" v-if="!isOpenAddForm" @click="openAddForm"/>
		</div>

		<AddContact v-if="isOpenAddForm"/>
	</div>
</template>

<script>
	import Button from '../components/Button'
	import AddContact from '../components/AddContact'

	export default {
		name: 'Home',
		components: {Button, AddContact},
		data () {
			return {
				isOpenAddForm: false
			}
		},
		methods: {
			openAddForm () {
				this.isOpenAddForm = !this.isOpenAddForm
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '../scss/colors.scss';

	.contacts {
		padding: 0 20px;

		.contacts_item{
			padding: 20px 0px;
			border-bottom: 1px solid $grey;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.contact_name {
				color: $light;
			}

			.contact_icon {
				filter: invert(1);
				margin-left: 20px;
				cursor: pointer;
			}
		}

		.contacts_add_btn {
			display: flex;
			justify-content: flex-end;
			margin: 20px 0 0;
		}
	}
</style>
