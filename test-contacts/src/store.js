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
		addNewField: (state, currentAddForm, id) => {
			console.log(state, currentAddForm, id, 'state addNewField')
			state.fieldArray.push(currentAddForm.name);

			Object.keys(state.contacts).forEach(el => {
				if (el !== id) {
					state.contacts[el][currentAddForm.name] = ''
				} else {
					state.contacts[el][currentAddForm.name] = currentAddForm.value
				}
			})
			state.isOpenAddField = !state.isOpenAddField;
		},
		addContact: (state, contact) => {
			state.contacts[contact.id] = contact
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
