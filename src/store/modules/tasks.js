import TaskService from '@/services/TaskService';

export default {
	namespaced: true,
	state: {
		tasks: [],
		task: {
			id: 291242,
			owner: {
				name: 'Pau',
				id: 3,
			},
			title: 'Random title',
			description:
				'In Information Technology, a boilerplate is a unit of writing that can be reused over and over without change. By extension, the idea is sometimes applied to reusable programming, as in “boilerplate code.',
			category: 'Social',
			date: '11-11-2019',
			isCompleted: false,
			attendees: [
				{
					id: 7,
					name: 'Mbappe',
				},
			],
		},
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
		toggleTaskStatus({ commit }, id) {
			commit('TOGGLE_TASK_STATUS', id);
		},
	},
};
