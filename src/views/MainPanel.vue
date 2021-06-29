<template>
	<div class="main-container">
		<!-- <user-panel></user-panel>
		<tasks-panel></tasks-panel> -->
		<user-panel></user-panel>
		<tasks-panel></tasks-panel>
		<details-panel></details-panel>
		<!-- <router-view name="a" /> -->
	</div>
</template>

<script>
import DetailsPanel from './DetailsPanel.vue';
import TasksPanel from './TasksPanel.vue';
import UserPanel from './UserPanel.vue';

export default {
	components: { UserPanel, TasksPanel, DetailsPanel },
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
</style>
