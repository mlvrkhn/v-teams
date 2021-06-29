<template>
	<div class="main-container">
		<user-panel></user-panel>
		<div class="column">2</div>
		<div class="column">3</div>
	</div>
</template>

<script>
import UserPanel from '@/components/UserPanel.vue';
export default {
	components: { UserPanel },
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
