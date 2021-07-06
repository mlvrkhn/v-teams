<template>
	<router-link to="/tasks/create">
		<button class="submit-button" type="submit">ADD TASK</button>
	</router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use '../styles/_variables.scss';

.submit-button {
	margin-bottom: 10px;
	color: variables.$white-color;
	font-weight: 600;
	background-color: variables.$primary-color;
	border: none;
	padding: 5px 10px;
	border-radius: 5px;
}
</style>
