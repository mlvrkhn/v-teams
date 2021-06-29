<template>
	<div class="main-container">
		<!-- <user-panel></user-panel>
		<tasks-panel></tasks-panel> -->
		<router-view />
	</div>
</template>

<script>
// import UserPanel from '@/components/UserPanel.vue';
// import TasksPanel from '@/components/TasksPanel.vue';
// // import DetailsPanel from '@/components/DetailsPanel.vue';
export default {
	components: {},
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
