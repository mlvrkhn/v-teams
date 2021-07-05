<template>
	<div class="main-container">
		<user-panel></user-panel>
		<div class="column">
			<tasks-panel></tasks-panel>
		</div>
		<router-view :key="$route.fullPath" />
	</div>
</template>

<script>
import TasksPanel from './TasksPanel.vue';
import UserPanel from './UserPanel.vue';
import { mapState } from 'vuex';

export default {
	components: { UserPanel, TasksPanel },
	created() {
		// this.$store.tasks.dispatch('tasks/fetchTasks');
		// this.$store.dispatch('tasks/fetchTasks', null, { root: true });
	},
	computed: {
		...mapState(['tasks']),
	},
};
</script>

<style>
.main-container {
	height: 80%;
	display: grid;
	grid-template-columns: 25% 30% 45%;
	border-collapse: collapse;
}
.column {
	width: 100%;
	border: 1px solid darkgrey;
}
</style>
