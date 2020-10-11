<template>
	<div class="info">
		<div class="info_form_group">
			<div class="info_fm_fields">
				<h2 class="info_title_name">{{ contactInfo.name }}</h2>

				<ul class="info_list">
					<li class="info_item">
						<div class="info_text_block">
							<img class="info_icon_tab" src="@/assets/keyboard_return-24px.svg">
							<span class="info_name">address:</span>
							<span class="info_value" v-if="contactInfo.address.length > 0">{{ contactInfo.address }}</span>
							<EmptyField v-else/>
						</div>

						<div class="info_icons_block">
							<img class="info_icon" src="@/assets/create-24px.svg" alt="">
						</div>
					</li>

					<li class="info_item">
						<div class="info_text_block">
							<img class="info_icon_tab" src="@/assets/keyboard_return-24px.svg">
							<span class="info_name">tel:</span>
							<span class="info_value" v-if="contactInfo.telephone.length > 0">{{ contactInfo.telephone }}</span>
							<EmptyField v-else/>
						</div>

						<div class="info_icons_block">
							<img class="info_icon" src="@/assets/create-24px.svg" alt="">
						</div>
					</li>
					<li class="info_item">
						<div class="info_text_block">
							<img class="info_icon_tab" src="@/assets/keyboard_return-24px.svg">
							<span class="info_name">email:</span>
							<span class="info_value" v-if="contactInfo.email.length > 0">{{ contactInfo.email }}</span>
							<EmptyField v-else/>
						</div>

						<div class="info_icons_block">
							<img class="info_icon" src="@/assets/create-24px.svg" alt="">
<!--							<img class="info_icon" src="@/assets/delete_forever-24px.svg" alt="">-->
						</div>
					</li>
				</ul>

			</div>
			<Button text="Add Field" />
		</div>
	</div>
</template>

<script>
	// import Input from '../components/Input'
	import Button from '../components/Button';
	import EmptyField from '../components/EmptyField';
	// import Modal from '../components/ConfirmModal';

	export default {
		name: 'Info',
		components: {Button, EmptyField},
        data(){
			return{
				contactInfo: {},
			}
        },
		created(){
			const contacts = this.$store.state.contacts

			Object.keys(contacts).forEach(el => {
				if(contacts[el].id === this.$route.params.id){
					this.contactInfo = contacts[el];
				}
			})
		}
	};
</script>

<style lang="scss" scoped>
	@import '../scss/colors';

	.info {
		padding: 20px;

		.info_title_name {
			color: $light;
		}
		.info_list {
			border-bottom: 1px solid $grey;
			margin-bottom: 30px;

			.info_item {
				padding: 10px 0 10px 40px;
				display: flex;
				justify-content: space-between;
				color: $light;

				.info_text_block {
					display: flex;
					align-items: center;
				}

				.info_icon_tab {
					filter: invert(60%);
					transform: rotateY(180deg);
					color: $grey;
					cursor: pointer;
				}

				.info_name {
					padding: 0 10px;
					min-width: 100px;
					color: $grey;
				}

				.info_icon {
					filter: invert(1);
					cursor: pointer;
				}
				.info_icon:first-child {
					margin-right: 20px;
				}
			}
		}
	}
</style>
