<template>
	<div class="top-bar">
		<div class="bar">TASK MANAGER</div>
		<div class="bar">
			<!-- move to component -->
			<button>ADD NEW</button>
			<input type="text" placeholder="Search" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-bar {
	height: 60px;
	border: 1px solid hotpink;
	display: grid;
	grid-template-columns: 25% 75%;
}
.bar {
	border: 1px solid saddlebrown;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
}
</style>
