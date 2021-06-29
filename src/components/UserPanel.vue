<template>
	<div class="column user-panel-container">
		<div class="user-container">
			<div class="user-personal-data">
				<h2>Martin Gawlyta</h2>
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
							<h3>12</h3>
							<p>Completed</p>
						</span>
						<span>
							<h3>22</h3>
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
		<div class="projects-container"></div>
		<div class="team-container"></div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.tasks-summary-container {
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
}
.user-panel-container {
	display: flex;
	flex-direction: column;
	align-items: stretch;
}
.task-numeric-summary {
	display: flex;
}
.task-numeric-summary * p {
	font-size: 10px;
}
</style>
