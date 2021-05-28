<template>
	<div class="container supervise_bg">
		<div class="head">
			<div class="head-title">58企服服务数据看板</div>
		</div>
		<div class="content"> 
			<div class="con-left">
				<fg-data></fg-data>
				<zp-data></zp-data>
			</div>
			<div class="con-center">
			</div>
			<div class="con-right">
			</div>
		</div>
	</div>
</template>
<script>
	import zpData from './module/zpData'
	import fgData from './module/fgData'
	import {formatTime} from '@/utils/index'
	export default {
		components:{fgData,zpData},
		data(){
			return {
				data:{},
				date: new Date(),
				timer:null
			}
		},
		mounted() {
			// this.getData()
		},
		methods:{
			getData(){ //客户端下载数量&流量统计
				this.$api.queryClientDownloads().then(res=>{
					if(res.code == '200'){
						this.data = res.result
					}
				})
			}
		},
	}
</script>
<style scoped lang="scss">
	
</style>