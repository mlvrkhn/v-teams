<template>
	<div class="main-container">
		<user-panel></user-panel>
		<div class="column">
			<ul class="task-list">
				<tasks-panel
					v-for="(task, index) in tasks"
					:task="task"
					:key="index"
				></tasks-panel>
			</ul>
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
		this.$store.dispatch('fetchEvents');
	},
	computed: mapState(['tasks']),
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
	border: 1px solid black;
}
.task-list {
	list-style: none;
	padding: 0;
	margin: 0;
}
</style>
