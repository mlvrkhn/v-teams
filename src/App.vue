<template>
	<div id="app">
		<top-bar></top-bar>
		<main-panel></main-panel>
	</div>
</template>

<script>
import MainPanel from '@/components/MainPanel.vue';
import TopBar from '@/components/TopBar.vue';

export default {
	name: 'App',
	components: { TopBar, MainPanel },
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 80vh;
	margin: 10px;
}
body {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
</style>
