<template>
	<div class="form-container">
		<h1>Add new task</h1>
		<form class="task-form" @submit.prevent="handleSubmit">
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
			<datepicker
				class="datepicker"
				v-model="task.date"
				placeholder="Select a date"
			/>
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import TaskService from '@/services/TaskService';
import { mapGetters } from 'vuex';

export default {
	computed: {
		// ...mapGetters({
		// 	getUser: 'user/getUser',
		// }),
		...mapGetters({
			getUser: 'user/getUser',
		}),
	},
	data() {
		return {
			task: this.createNewTask(),
		};
	},
	methods: {
		handleSubmit() {
			this.$store
				.dispatch('tasks/createTask', this.task)
				.then(() => {
					TaskService.postTask(this.task);
					this.task = this.createNewTask();
				})
				.catch(err => {
					console.log(
						'Something went wrong with you TASK',
						err.message
					);
				});
		},
		createNewTask() {
			const id = Math.floor(Math.random() * 10000000);
			const owner = this.getUser;

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

<style scoped lang="scss">
@use '../styles/_variables.scss';

.form-container {
	border: 1px solid variables.$font-color;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.task-form {
	display: flex;
	flex-direction: column;
	width: 90%;
	justify-content: center;

	> * {
		margin: 5px 0;
	}
}

.datepicker {
	text-align: center;
}
</style>
