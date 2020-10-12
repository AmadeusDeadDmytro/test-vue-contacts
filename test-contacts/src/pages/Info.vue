<template>
	<div class="info">
		<div class="info_form_group">
			<div class="info_fm_fields">
				<h2 class="info_title_name">{{ contactInfo.name }}</h2>

				<ul class="info_list">
					<li class="info_item" v-for=" [field, value] in Object.entries(contactInfo.options)" :key="field">
						<div class="info_text_block">
							<img class="info_icon_tab"  src="@/assets/keyboard_return-24px.svg">
							<span class="info_name">{{ field.charAt(0).toUpperCase() + field.slice(1)  }}:</span>
							<span class="info_value" v-if="value && value.length > 0">{{ value }}</span>
							<EmptyField v-else/>
						</div>

						<div class="info_icons_block">
							<img class="info_icon" src="@/assets/create-24px.svg" alt="">
						</div>
					</li>

				</ul>

			</div>
			<AddField v-if="isOpenAddField" :id="this.$route.params.id"/>
			<Button text="Add Field" v-if="!isOpenAddField" @click="toggleAddField" />

		</div>
	</div>
</template>

<script>
	// import Input from '../components/Input'
	import Button from '../components/Button';
	import EmptyField from '../components/EmptyField';
	// import Modal from '../components/ConfirmModal';
	import { useStore } from "vuex";
	import { computed } from "vue";
	import AddField from '../components/AddField';

	export default {
		name: 'Info',
		components: { Button, EmptyField, AddField },
        data() {
			return {
				contactInfo: {},
				fieldArray: []
			}
        },
		created() {



		},
		updated: function () {
			this.$nextTick(function () {
				const contacts = this.$store.state.contacts;

				Object.keys(contacts).forEach(el => {
					if(contacts[el].id === this.$route.params.id){
						this.contactInfo = contacts[el];
					}
				})
				console.log(3)
			})
		},
		setup() {
			const store = useStore();
			const isOpenAddField = computed(() => store.state.isOpenAddField);

			const toggleAddField = () => {
				store.commit("toggleAddField");
			};
			return { isOpenAddField, toggleAddField };
		},
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
