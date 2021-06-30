<template>
	<div class="column details-container">
		<h2>
			<div>{{ task }}</div>
		</h2>
		<p>20.02.2020</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
			quod minus totam magnam doloremque impedit tempore, et, nam in
			eaque, quis alias sapiente esse eligendi deleniti? Quos voluptatibus
			hic, nihil sunt in tempore voluptatem fugiat vero animi, voluptates
			id praesentium.
		</p>
		<div>IS COMPLETED?</div>
		<div>attachments</div>
	</div>
</template>

<script>
export default {
	props: {
		task: Object,
	},
	created() {
		this.getTask();
	},
	computed: {
		// getTask() {
		// 	console.log(this.$route.params.id);
		// 	return this.$store.state.tasks.filter(
		// 		t => t === t[this.$route.params.id]
		// 	);
		// },
		getTask() {
			console.log(this.$route);
			return this.$store.getters.getTaskByID;
		},
	},
	// create task detail json structure
	// create store content
	// get props from the store
};
</script>

<style scoped>
.details-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
</style>
