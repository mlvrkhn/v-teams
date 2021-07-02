<template>
	<div class="list-items-container">
		<ul class="task-list">
			<li
				v-for="(task, index) in searchResults"
				:task="task"
				:key="index"
			>
				<div class="task-item-container">
					<label for="toggle_button">
						<input
							type="checkbox"
							class="toggle_button"
							id="toggle-button"
							@click="toggleTaskStatus(task.id)"
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
		</ul>
		<submit-button></submit-button>
	</div>
</template>

<script>
import SubmitButton from '../components/SubmitButton.vue';

import { mapState } from 'vuex';
export default {
	components: {
		SubmitButton,
	},
	props: {
		task: Object,
	},
	methods: {
		toggleTaskStatus(id) {
			this.$store.dispatch('toggleTaskStatus', id);
		},
	},
	computed: {
		...mapState(['tasks', 'activeFilter', 'searchQuery']),
		filteredTasks() {
			if (this.activeFilter === 'All') return this.tasks;
			return this.tasks.filter(task => {
				if (task.category === this.activeFilter) {
					return task;
				}
			});
		},
		searchResults() {
			return this.filteredTasks.filter(task => {
				if (
					task.title.includes(this.searchQuery) ||
					task.description.includes(this.searchQuery)
				) {
					return task;
				}
			});
		},
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
.list-items-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}
.task-item-container {
	display: flex;
	align-items: center;
	height: 60px;
	border-bottom: 1px solid darkgrey;
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
