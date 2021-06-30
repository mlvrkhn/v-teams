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
						--------------------------
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
							<h3>240</h3>
							<p>Archived</p>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="projects-container">PROJECTS</div>
		<div class="team-container">TEAM</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: mapGetters(['completedTaskCount', 'notCompletedTaskCount']),
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
.user-personal-data > * {
	margin: 20px 0;
}
.user-personal-avatar {
	height: 80px;
}
</style>
