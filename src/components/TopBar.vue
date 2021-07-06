<template>
	<div class="top-bar">
		<div class="panel">TASK MANAGER</div>
		<div class="panel">
			<input
				class="panel-searchbar"
				type="text"
				placeholder="Search"
				v-model="searchQuery"
			/>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	computed: {
		searchQuery: {
			get() {
				return this.$store.state.searchQuery;
			},
			set(value) {
				this.$store.dispatch('updateSearchQuery', value);
			},
		},
	},
};
</script>

<style lang="scss" scoped>
@use '../styles/_variables.scss';

.top-bar {
	height: 60px;
	width: 100%;
	border-bottom: 1px solid darkgrey;
	display: grid;
	grid-template-columns: 25% 75%;
	.panel {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		&-searchbar {
			height: 25px;
			width: 250px;
			font-size: x-large;
			padding: 5px 10px;
		}
	}
}
</style>
