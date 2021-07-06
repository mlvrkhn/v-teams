<template>
	<div class="top-bar">
		<div class="panel">TASK MANAGER</div>
		<div class="panel">
			<input type="text" placeholder="Search" v-model="searchQuery" />
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
	}
}
</style>
