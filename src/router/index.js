import Vue from 'vue';
import VueRouter from 'vue-router';
import DetailsPanel from '../views/DetailsPanel.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'task',
		redirect: '/task/:id',
		component: {
			DetailsPanel,
		},
		props: true,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
