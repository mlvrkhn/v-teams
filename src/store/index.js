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
		task: {},
	},
	mutations: {
		SET_TASKS(state, tasks) {
			state.tasks = tasks;
		},
		SET_TASK(state, task) {
			state.task = task;
		},
	},
	actions: {
		fetchEvents({ commit }) {
			return TaskService.getEvents().then(res => {
				commit('SET_TASKS', res.data);
			});
		},
		fetchEvent({ commit }, id) {
			return TaskService.getEvent(id).then(res => {
				commit('SET_TASK', res.data);
			});
		},
	},
	getters: {
		getTaskByID: state => id => {
			return state.tasks.find(task => task.id === id);
		},
	},
	modules: {},
});
