import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
	state (){
		return{
			isOpenAddForm: false,
			contacts: {}
		}
	},
	plugins: [createPersistedState({
		storage: window.sessionStorage,
	})],
	mutations: {
		toggleAddForm: state => {
			state.isOpenAddForm = !state.isOpenAddForm
		},
		addContact: (state, contact) => {
			state.contacts[contact.id] = contact 
		}
	},
}) 

export default store