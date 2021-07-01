<template>
	<div class="top-bar">
		<div class="bar">TASK MANAGER</div>
		<div class="bar">
			<input type="text" placeholder="Search" />
		</div>
	</div>
</template>

<script>
export default {
	components: {},
};
</script>

<style scoped>
.top-bar {
	height: 60px;
	border: 1px solid darkgrey;
	display: grid;
	grid-template-columns: 25% 75%;
}
.bar {
	/* border: 1px solid darkgrey; */
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
}
</style>
