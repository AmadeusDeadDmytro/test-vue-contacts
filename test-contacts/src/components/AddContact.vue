<template>
	<div class="add_form">
		<p class="title">New Contact</p>
		<Input label="Name" id="name" @handle-input="handleInput" />
		<Input label="Address" id="address" @handle-input="handleInput" />
		<Input label="Telephone" id="telephone" @handle-input="handleInput" />
		<Input label="Email" id="email" @handle-input="handleInput" />
		<div class="add_form_btns">
			<Button text="Cancel" @click="toggleAddForm()" />
			<Button text="Save" @click="addContact(form)" />
		</div>
	</div>
</template>

<script>
	import Input from "./Input";
	import Button from "./Button";

	import { useStore } from "vuex";
	import { computed } from "vue";

	import md5 from 'md5'

	export default {
		name: "Home",
		components: { Input, Button },
		data() {
			return {
				form: {
					name: "",
					address: "",
					telephone: "",
					email: "",
				},
			};
		},
		setup() {
			const store = useStore();
			const contacts = computed(() => store.state.contacts);

			const toggleAddForm = () => {
				store.commit("toggleAddForm");
			};

			const addContact = (form) => {
				let contact = {...form}
				contact.id = md5(contact.name + contact.telephone)
				store.commit("addContact", contact);
				store.commit("toggleAddForm");
			};
			return { toggleAddForm, addContact, contacts };
		},
		methods: {
			handleInput(value) {
				this.form[value.id] = value.text
			},
		},
	};
</script>

<style lang="scss" scoped>
	.add_form {
		.add_form_btns {
			display: flex;
			justify-content: flex-start;

			.btn {
				margin-right: 10px;
			}
		}
	}
</style>
