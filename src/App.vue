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

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
