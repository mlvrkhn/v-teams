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
		projects: ['Development', 'Sport', 'Health', 'Social'],
	},
	mutations: {
		SET_TASKS(state, tasks) {
			state.tasks = tasks;
		},
		SET_TASK(state, task) {
			state.task = task;
		},
		CREATE_TASK(state, task) {
			state.tasks.push(task);
		},
		TOGGLE_TASK_STATUS(state, taskID) {
			state.tasks = state.tasks.map(t =>
				t.id === taskID ? { ...t, isCompleted: !t.isCompleted } : t
			);
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
		createTask({ commit }, task) {
			commit('CREATE_TASK', task);
		},
		toggleTaskStatus({ commit }, id) {
			commit('TOGGLE_TASK_STATUS', id);
		},
	},
	getters: {
		getTaskByID: state => id => {
			return state.tasks.find(task => task.id === id);
		},
		completedTaskCount: state => {
			return state.tasks.filter(task => task.isCompleted).length || 0;
		},
		notCompletedTaskCount: state => {
			return state.tasks.filter(task => !task.isCompleted).length || 0;
		},
	},
	modules: {},
});
