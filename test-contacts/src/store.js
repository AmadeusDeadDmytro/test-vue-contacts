import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
	state () {
		return {
			isOpenAddForm: false,
			contacts: {},
			isOpenAddField: false,
			fieldArray: ['Address', 'Telephone', 'Email']
		}
	},
	plugins: [createPersistedState({
		storage: window.sessionStorage,
	})],
	mutations: {
		toggleAddForm: state => {
			state.isOpenAddForm = !state.isOpenAddForm
		},
		toggleAddField: state => {
			state.isOpenAddField = !state.isOpenAddField
		},
		addNewField: (state, currentAddForm) => {
			state.fieldArray.push(currentAddForm.name);

			Object.keys(state.contacts).forEach(el => {
				if (el !== currentAddForm.contactId) {
					state.contacts[el].options[currentAddForm.name] = ''
				} else {
					state.contacts[el].options[currentAddForm.name] = currentAddForm.value
				}
			})
			state.isOpenAddField = !state.isOpenAddField;
		},
		addContact: (state, contact) => {
			state.contacts[contact.id] = contact
		},
		editField: (state, currentId) => {
			Object.keys(state.contacts).forEach(el => {
				if (el !== currentId) {
					state.contacts[el].options['isEditOpen'] = true
				} else {
					state.contacts[el].options['isEditOpen'] = false
				}
			})
		},
		deleteContact: (state, id) => {
			const tmpState = {};

			Object.keys(state.contacts).forEach(el => {
				if (el !== id) {
					tmpState[el] = state.contacts[el]
				}
			})

			state.contacts = tmpState
		},
		hideAll: state => {
			state.isOpenAddForm = false
			state.isOpenAddField = false
		}
	},
}) 

export default store
