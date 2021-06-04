<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
	import {refreshScale} from '@/utils/rem.js'
	export default {
		data(){
			return {
				
			}
		},
		mounted(){
			refreshScale();
			window.onresize=function(){
			  refreshScale()
			}
		}
	}
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
	position: relative;
	left:50%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
