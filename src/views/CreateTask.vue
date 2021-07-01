<template>
	<div class="form-container">
		<h1>Add new task</h1>
		<form @submit.prevent="handleSubmit">
			<input type="text" placeholder="Name" v-model="task.name" />
			<input type="text" placeholder="Title" v-model="task.title" />
			<textarea
				type="text"
				placeholder="Description"
				v-model="task.description"
			/>
			<select v-model="task.category">
				<option>Teambuilding</option>
				<option>Other</option>
			</select>
			<datepicker v-model="task.date" placeholder="Select a date" />
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
	data() {
		return {
			task: this.createNewTask(),
		};
	},
	methods: {
		handleSubmit() {
			this.$store.dispatch('createTask', this.task);
		},
		createNewTask() {
			const id = Math.floor(Math.random() * 10000000);
			const owner = this.$store.state.user;

			return {
				id,
				owner,
				category: '',
				title: '',
				description: '',
				date: '',
				isCompleted: false,
				attendees: [],
			};
		},
	},
	components: {
		Datepicker,
	},
};
</script>

<style scoped>
.form-container {
	padding: 0 20%;
	border: 1px solid salmon;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
