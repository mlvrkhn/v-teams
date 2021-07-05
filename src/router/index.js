import Vue from 'vue';
import VueRouter from 'vue-router';
import DetailsPanel from '../views/DetailsPanel.vue';
import CreateTask from '../views/CreateTask.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/tasks/291239',
	},
	{
		path: '/tasks/create',
		component: CreateTask,
	},
	{
		path: '/tasks/:id',
		name: 'tasks',
		component: DetailsPanel,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
