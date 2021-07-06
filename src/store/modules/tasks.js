import TaskService from '@/services/TaskService';

export default {
	namespaced: true,
	state: {
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
		fetchTasks({ commit }) {
			return TaskService.getTasks().then(res => {
				commit('SET_TASKS', res.data);
			});
		},
		fetchTask({ commit }, id) {
			return TaskService.getTask(id).then(res => {
				commit('SET_TASK', res.data);
			});
		},
		createTask({ commit }, task) {
			commit('CREATE_TASK', task);
		},
		toggleTaskStatus({ commit }, task) {
			commit('TOGGLE_TASK_STATUS', task.id);
			TaskService.updateTaskStatus(task);
		},
	},
	getters: {
		getTaskByID: state => id => {
			return state.tasks.find(task => task.id === id);
		},
		getTotalTaskCount: state => state.tasks.length,
		completedTaskCount: state => {
			return state.tasks.filter(task => task.isCompleted).length || 0;
		},
		notCompletedTaskCount: state => {
			return state.tasks.filter(task => !task.isCompleted).length || 0;
		},
		getTasksFulfilmentRate: (state, getters) => {
			// const lengthInPercent =
			// 	(getters.completedTaskCount / getters.getTotalTaskCount) * 100;
			// return `${lengthInPercent}%`;
			return (
				(getters.completedTaskCount / getters.getTotalTaskCount) * 100
			);
		},
	},
};
