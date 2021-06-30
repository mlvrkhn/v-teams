<template>
	<li>
		<router-link :to="{ name: 'tasks', params: { id: task.id } }">
			<div class="task-item-container">
				<div>✅</div>
				<div class="task-item">
					<h3>{{ task.title }}</h3>
					<p class="task-item-title">
						{{ task.description }}
					</p>
					<p class="task-item-date">{{ task.date }}</p>
				</div>
			</div>
		</router-link>
	</li>
</template>

<script>
export default {
	props: {
		task: Object,
	},
};
</script>

<style scoped>
.task-item-container {
	display: flex;
	align-items: center;
	height: 60px;
	border: 1px solid goldenrod;
	padding: 0.5rem;
}
.task-item-container:hover {
	background-color: rgb(241, 116, 141);
}
.task-item {
	display: flex;
	text-align: left;
	margin-left: 0.5rem;
	flex-direction: column;
}
.task-item-title {
	font-size: 12px;
}
.task-item-date {
	font-size: 9px;
	margin: 0;
}
</style>
