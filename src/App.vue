<template>
	<div id="app">
		<div id="nav">
			<top-bar></top-bar>
			<main-panel></main-panel>
		</div>
	</div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import MainPanel from './views/MainPanel.vue';

export default {
	name: 'App',
	components: { TopBar, MainPanel },
};
</script>

<style lang="scss">
@use './styles/main.scss';
@use './styles/_variables.scss';
@use './styles/reset.scss';
</style>
