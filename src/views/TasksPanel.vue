<template>
	<li>
		<div class="task-item-container">
			<label for="toggle_button">
				<!-- <span v-if="isActive">✅</span>
				<span v-if="!isActive">🍄</span> -->
				<input
					type="checkbox"
					class="toggle_button"
					id="toggle-button"
					@click="toggleTaskStatus"
				/>
			</label>
			<router-link
				:to="{ name: 'tasks', params: { id: task.id } }"
				class="link"
			>
				<div class="task-item">
					<h3>{{ task.title }}</h3>
					<p class="task-item-description cut-text">
						{{ task.description }}
					</p>
					<p class="task-item-date">{{ task.date }}</p>
				</div>
			</router-link>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		task: Object,
	},
	methods: {
		toggleTaskStatus() {
			this.$store.dispatch('toggleTaskStatus', this.task.id);
		},
	},
	computed: {
		isActive() {
			return this.task.isCompleted;
		},
	},
};
</script>

<style scoped>
li a {
	text-decoration: none;
	color: #fff;
}
.task-item-container {
	display: flex;
	align-items: center;
	height: 60px;
	border-bottom: 1px solid rgb(189, 189, 189);
	padding: 0.5rem;
}
.task-item-container:hover {
	background-color: rgb(167, 167, 167);
}
.task-item {
	display: flex;
	text-align: left;
	margin-left: 0.5rem;
	flex-direction: column;
	/* width: 100%; */
}
.task-item-description {
	font-size: 12px;
	font-weight: 400;
	outline: none;
}
.task-item-date {
	font-size: 9px;
	margin: 0;
}
.cut-text {
	text-overflow: ellipsis;
	-webkit-line-clamp: 3;
	overflow: hidden;
	height: 1.2em;
	white-space: nowrap;
}
.toggle-button {
	display: hidden;
}
.link {
	width: 95%;
}
</style>
