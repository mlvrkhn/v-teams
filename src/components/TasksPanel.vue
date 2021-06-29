<template>
	<div class="column">
		<ul class="task-list">
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
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.task-item {
	display: flex;
	align-items: center;
	height: 80px;
	border: 1px solid goldenrod;
	padding: 0 10px;
}
.task-list {
	list-style: none;
	padding: 0;
}
</style>
