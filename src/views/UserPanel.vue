<template>
	<div class="column user-panel-container">
		<div class="user-container">
			<div class="user-personal-data">
				<img src="@/assets/face.svg" class="user-personal-avatar" />
				<h2 class="user-personal-name">Martin Gawlyta</h2>
				<p>mrtn.dev@aol.com</p>
			</div>
			<div class="user-notifications">
				<div class="icon-container">
					<span>⚙️</span>
					<span>✉️</span>
					<span>🔔</span>
				</div>
				<div class="tasks-summary-container">
					<div class="progress">
						<div
							class="progress-value"
							:style="{
								'--progress-value':
									getTasksFulfilmentRate + '%',
							}"
						>
							{{ getTasksFulfilmentRate }} %
						</div>
					</div>
					<div class="task-summary-numeric">
						<span>
							<h3>{{ completedTaskCount }}</h3>
							<p>Completed</p>
						</span>
						<span>
							<h3>{{ notCompletedTaskCount }}</h3>
							<p>To Do</p>
						</span>
						<span>
							<h3>6</h3>
							<p>Archived</p>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="projects-container">
			<h2>PROJECTS</h2>
			<a
				class="project-item"
				:class="{ active: activeFilter === p }"
				:data-category="p"
				v-for="p in projects"
				:key="p"
				@click="filterCategory"
			>
				👉 {{ p }}
			</a>
		</div>
		<div class="team-container">TEAM</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
	computed: {
		...mapGetters('tasks', [
			'completedTaskCount',
			'notCompletedTaskCount',
			'getTasksFulfilmentRate',
		]),
		...mapState(['projects', 'activeFilter']),
	},
	methods: {
		...mapActions(['setCategoryFilter']),
		filterCategory($event) {
			const selectedCategory = $event.target.getAttribute(
				'data-category'
			);
			this.setCategoryFilter(selectedCategory);
		},
	},
};
</script>

<style scoped lang="scss">
@use '../styles/_variables.scss';
@import '../styles/config';

.tasks-summary-container {
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	margin: 2rem 5px;
}
.task-summary-numeric {
	display: flex;
	width: 70%;
	justify-content: space-around;
	* p {
		font-size: 10px;
		display: flex;
	}
}
.user {
	&-panel-container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
	}
	&-personal {
		&-name {
			font-weight: 700;
		}
		&-data > * {
			margin: 20px 0;
		}
		&-avatar {
			height: 80px;
		}
	}
}
.projects-container > h2 {
	margin-bottom: 10px;
}
.project-item {
	text-align: left;
	display: block;
	margin-bottom: 0.5rem;
	padding-left: 5px;
	cursor: pointer;
	&:hover {
		background-color: variables.$primary-color;
	}
}
.active {
	background-color: variables.$primary-color;
}
.progress {
	justify-content: flex-start;
	border-radius: 100px;
	align-items: center;
	position: relative;
	padding: 0 3px;
	display: flex;
	height: 20px;
	width: 100%;
	&-value {
		animation: load 2s normal forwards;
		box-shadow: 0 10px 40px -10px;
		border-radius: 100px;
		background: variables.$primary-color;
		height: 20px;
		padding: 1px 0;
		margin-bottom: 2rem;
		text-align: center;
		width: 0;
	}
}
@keyframes load {
	0% {
		width: 0;
	}
	100% {
		width: var(--progress-value);
	}
}
</style>
