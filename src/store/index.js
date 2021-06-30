import Vue from 'vue';
import Vuex from 'vuex';
import TaskService from '../../services/TaskService';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {
			id: '10',
			name: 'Maritn Dolorez',
		},
		tasks: [],
	},
	mutations: {
		SET_TASKS(state, tasks) {
			state.tasks = tasks;
		},
	},
	actions: {
		fetchEvents({ commit }) {
			return TaskService.getEvents().then(res => {
				commit('SET_TASKS', res.data);
			});
		},
	},
	modules: {},
});
