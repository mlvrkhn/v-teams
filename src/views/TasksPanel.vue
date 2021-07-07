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
							:checked="task.isCompleted"
							id="toggle-button"
							@click="toggleTaskStatus(task)"
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
	methods: {
		toggleTaskStatus(task) {
			this.$store.dispatch('tasks/toggleTaskStatus', task);
		},
	},
	computed: {
		...mapState({
			tasks: state => state.tasks.tasks,
			activeFilter: state => state.activeFilter,
			searchQuery: state => state.searchQuery,
		}),
		filteredTasks() {
			if (this.activeFilter === 'All') return this.tasks;
			return this.tasks.filter(task => {
				if (task.category === this.activeFilter) {
					return task;
				}
			});
		},
		searchResults() {
			if (this.filteredTasks.length === 0) return this.tasks;
			return this.filteredTasks.filter(task => {
				if (
					task.title
						.toLowerCase()
						.includes(this.searchQuery.toLowerCase()) ||
					task.description
						.toLowerCase()
						.includes(this.searchQuery.toLowerCase())
				) {
					return task;
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped>
li {
	a {
		text-decoration: none;
		color: #fff;
	}
}
.list-items-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}
.task-item {
	display: flex;
	text-align: left;
	margin-left: 0.5rem;
	flex-direction: column;
	&-container {
		display: flex;
		align-items: center;
		height: 60px;
		border-bottom: 1px solid darkgrey;
		padding: 0.5rem;

		&:hover {
			background-color: lightpink;
		}
	}
	&-description {
		font-size: 12px;
		font-weight: 400;
		outline: none;
	}
	&-date {
		font-size: 9px;
		margin: 0;
	}
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
