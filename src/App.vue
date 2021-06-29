<template>
	<div id="app">
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
			<top-bar></top-bar>
		</div>
	</div>
</template>

<script>
// import MainPanel from '@/views/MainPanel.vue';
import TopBar from '@/components/TopBar.vue';

export default {
	name: 'App',
	components: { TopBar },
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
