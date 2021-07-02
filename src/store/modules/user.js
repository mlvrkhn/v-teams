export const state = {
	user: {
		id: '11',
		name: 'Martin',
	},
	getters: {
		getUser: state => state.user,
	},
};
