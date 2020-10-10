import { createStore } from 'vuex'

const store = createStore({
	state (){
		return{
			isOpenAddForm: false,
		}
	},
	mutations: {
		toggleAddForm: state => {
			state.isOpenAddForm = !state.isOpenAddForm
		}
	},
	getters: {
		toggleAddForm: state => {
			return state.isOpenAddForm
		}
	}
}) 

export default store