import Vue from 'vue';
import Vuex from 'vuex';

import user from '@/store/modules/user.js';
import tasks from '@/store/modules/tasks.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		projects: ['Development', 'Sport', 'Health', 'Social', 'All'],
		activeFilter: 'All',
		searchQuery: '',
	},
	mutations: {
		SET_CATEGORY_FILTER(state, category) {
			state.activeFilter = category;
		},
		UPDATE_SEARCH_QUERY(state, value) {
			state.searchQuery = value;
		},
	},
	actions: {
		setCategoryFilter({ commit }, category) {
			commit('SET_CATEGORY_FILTER', category);
		},
		updateSearchQuery({ commit }, value) {
			commit('UPDATE_SEARCH_QUERY', value);
		},
	},
	modules: { user, tasks },
});
