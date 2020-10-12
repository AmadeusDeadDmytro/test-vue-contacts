<template>
	<div class="add_form">
		<p class="title">New Contact</p>
		<Input label="Name" id="name" @handle-input="handleInput" />
		<Input v-for="field in fieldArray" :label="field" :id="field.toLowerCase()" :key="field" @handle-input="handleInput" />

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
					options: {}
				},
			};
		},
		setup() {
			const store = useStore();
			const contacts = computed(() => store.state.contacts);
			const fieldArray = computed(() => store.state.fieldArray);

			const toggleAddForm = () => {
				store.commit("toggleAddForm");
			};

			const addContact = (form) => {
				let contact = {...form}
				contact.id = md5(contact.name + contact.telephone)

				store.commit("addContact", contact);
				store.commit("toggleAddForm");
			};

			return { toggleAddForm, addContact, contacts, fieldArray };
		},
		methods: {
			handleInput(value) {
				if(value.id != 'name') {
					this.form.options[value.id] = value.text
				} else {
					this.form[value.id] = value.text
				}
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
