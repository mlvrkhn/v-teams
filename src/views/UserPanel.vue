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
					<div class="task-progress-bar">
						/////////////------------ 50%
					</div>
					<div class="task-numeric-summary">
						<span>
							<h3>{{ completedTaskCount }}</h3>
							<p>Completed</p>
						</span>
						<span>
							<h3>{{ notCompletedTaskCount }}</h3>
							<p>To Do</p>
						</span>
						<span>
							<h3>60</h3>
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
		...mapGetters(['completedTaskCount', 'notCompletedTaskCount']),
		...mapState(['projects', 'activeFilter']),
	},
	methods: {
		...mapActions(['setCategoryFilter']),
		filterCategory($event) {
			const selectedCategory =
				$event.target.getAttribute('data-category');
			this.setCategoryFilter(selectedCategory);
		},
	},
};
</script>

<style scoped>
.tasks-summary-container {
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	margin-top: 2rem;
}
.user-panel-container {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
}
.user-personal-name {
	font-weight: 700;
}
.task-numeric-summary {
	display: flex;
	width: 70%;
	justify-content: space-around;
}
.task-numeric-summary * p {
	font-size: 10px;
	display: flex;
}
.task-progress-bar {
	margin-bottom: 10px;
}
.user-personal-data > * {
	margin: 20px 0;
}
.user-personal-avatar {
	height: 80px;
}
.projects-container > h2 {
	margin-bottom: 10px;
}
.project-item {
	text-align: left;
	display: block;
	margin-left: 15%;
	margin-bottom: 0.5rem;
	cursor: pointer;
}
.project-item:hover {
	transform: scale(1.05);
}
.active {
	background-color: lightpink;
	/* color: green; */
}
</style>
