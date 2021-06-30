<template>
	<div class="column details-container">
		<h2>{{ task.title }}</h2>
		<p>{{ task.date }}</p>
		<p>{{ task.description }}</p>
		<div>Is completed? {{ task.isCompleted }}</div>
		<div>attachments</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	created() {
		this.fetchEvent(this.taskID);
	},
	computed: {
		taskID() {
			return this.$route.params.id;
		},
		task() {
			return this.$store.getters.getTaskByID(this.taskID);
		},
		...mapState(['task']),
	},
	methods: {
		...mapActions(['fetchEvent']),
	},
};
</script>

<style scoped>
.details-container {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	/* align-items: center; */
}
/* .details-container > p {
	text-align: left;
} */
</style>
