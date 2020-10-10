import { createStore } from 'vuex'

const store = createStore({
	state (){
		return{
			isOpenAddForm: false,
			contacts: []
		}
	},
	mutations: {
		toggleAddForm: state => {
			state.isOpenAddForm = !state.isOpenAddForm
		},
		addContact: (state, contact) => {
			state.contacts = [...state.contacts, contact]
		}
	},
}) 

export default store