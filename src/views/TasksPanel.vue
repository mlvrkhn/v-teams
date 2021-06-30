<template>
	<ul class="task-list">
		<router-link :to="{ name: 'tasks', params: { id: task.id } }">
			<li>
				<div class="task-item">
					<div>✅</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
						</p>
						<p>20.02.2020</p>
					</div>
				</div>
			</li>
		</router-link>
	</ul>
</template>

<script>
export default {
	props: {
		task: Object,
	},
};
</script>

<style scoped>
.task-item {
	display: flex;
	align-items: center;
	height: 80px;
	border: 1px solid goldenrod;
	padding: 0 10px;
	font-size: 12px;
}
.task-list {
	list-style: none;
	padding: 0;
}
</style>
