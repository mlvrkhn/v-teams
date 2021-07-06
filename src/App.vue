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
@import './styles/reset.scss';

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background-color: ivory;
}

#nav {
	padding: 30px;
	height: 100vh;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: rgb(255, 93, 117);
}
</style>
