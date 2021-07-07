<template>
	<div class="main-container">
		<user-panel></user-panel>
		<div class="column">
			<tasks-panel class="darker"></tasks-panel>
		</div>
		<router-view :key="$route.fullPath" />
	</div>
</template>

<script>
import TasksPanel from './TasksPanel.vue';
import UserPanel from './UserPanel.vue';

export default {
	components: { UserPanel, TasksPanel },
	created() {
		this.getTasks();
	},
	methods: {
		getTasks() {
			this.$store.dispatch('tasks/fetchTasks');
		},
	},
};
</script>

<style lang="scss">
@use '../styles/_variables.scss';

.main-container {
	height: 80%;
	display: grid;
	grid-template-columns: 25% 30% 45%;
	border-collapse: collapse;
}
.column {
	width: 100%;
	padding: 0 5px;
	.darker {
		background-color: variables.$blueish-color;
	}
}
</style>
