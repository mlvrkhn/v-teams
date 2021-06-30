<template>
	<div class="column details-container">
		<h2 class="task-details-title">{{ task.title }}</h2>
		<p class="task-details-date">🕰 {{ task.date }}</p>
		<p class="task-details-description">{{ task.description }}</p>
		<span class="task-details-completed"
			>Is completed? {{ task.isCompleted }}</span
		>
		<label class="task-details-attendees-label">Who is joining:</label>
		<ul class="task-details-attendees-list">
			<li v-for="(a, i) in task.attendees" :key="i">{{ a.name }}</li>
		</ul>
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
	border: 2px solid red;
	padding: 1rem;
	text-align: left;
}
.details-container > * {
	margin: 1rem 0;
}
.task-details-title {
	font-size: xx-large;
	font-weight: 700;
}
.task-details-date {
	font-size: small;
}
.task-details-attendees-label {
	margin-bottom: 0;
	font-weight: 500;
}
</style>
