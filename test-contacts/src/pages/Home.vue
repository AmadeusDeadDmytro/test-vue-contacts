<template>
	<div class="contacts">
		<ul class="contacts_list">
			<li class="contacts_item" v-for="contact in contacts" :key="contact.name">
				<span class="contact_name">{{ contact.name }}</span>
				<div class="contact_icons_block">
					<router-link :to="{path: '/info/' + contact.id}">
						<img
							class="contact_icon"
							src="@/assets/visibility-24px.svg"
							alt=""
						/>
					</router-link>

					<img
						@click="openModal(contact.id)"
						class="contact_icon"
						src="@/assets/delete_forever-24px.svg"
						alt=""
					/>
				</div>
			</li>
		</ul>

		<div class="contacts_add_btn">
			<Button
				text="Add Contact"
				v-if="!isOpenAddForm"
				@click="toggleAddForm()"
			/>
		</div>
		<AddContact v-if="isOpenAddForm" />

		<ConfirmModal @delete-agree="handleDelete" @close-modal="closeModal" v-if="isOpenModal" :id="id" question="Do you want to delete this contact ?" />
	</div>
</template>

<script>
	import Button from "../components/Button";
	import AddContact from "../components/AddContact";
	import ConfirmModal from "../components/ConfirmModal";

	import { useStore } from "vuex";
	import { computed } from "vue";

	export default {
		name: "Home",
		components: { Button, AddContact, ConfirmModal },
		data() {
			return {
				isOpenModal: false,
				id: null
			}
		},
		methods: {
			openModal(id)  {
				this.isOpenModal = true;
				this.id = id;
			},

			closeModal(value) {
				this.isOpenModal = value;
			},
			handleDelete(id) {
				this.$store.commit("deleteContact", id);
				this.isOpenModal = false;
			}
		},
		setup() {
			const store = useStore();
			const isOpenAddForm = computed(() => store.state.isOpenAddForm);
			const contacts = computed(() => store.state.contacts);

			const toggleAddForm = () => {
				store.commit("toggleAddForm");
			};
			return { isOpenAddForm, toggleAddForm, contacts };
		},
		created() {
			this.$store.commit('hideAll')
		}
	};
</script>

<style lang="scss" scoped>
	@import "../scss/colors.scss";

	.contacts {
		padding: 0 20px;

		.contacts_item {
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
