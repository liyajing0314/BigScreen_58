<!-- 覆盖数据 -->
<template>
	<pannel-head :title="title" :randomData="randomData" :index="index" class="con-mar-top">
		<div class="bg-box">
			<div class="item-box">
				<div class="item-top">
					<countTo
					  :start-val="0"
					  :end-val="data.projectNum || 0"
					  separator=","
					/>
				</div>
				<div class="item-bottom">项目数</div>
			</div>
			<div class="item-box">
				<div class="item-top">
					<countTo
					  :start-val="0"
					  :end-val="data.saasEnterpriseNum || 0"
					  separator=","
					/>
				</div>
				<div class="item-bottom">企业数</div>
			</div>
			<div class="item-box">
				<div class="item-top">
					<countTo
					  :start-val="0"
					  :end-val="data.saasWorkerNum || 0"
					  separator=","
					/>
				</div>
				<div class="item-bottom">劳动者数</div>
			</div>
		</div>
	</pannel-head>
</template>

<script>
	import PannelHead from '@/components/pannelHead'
	export default {
		components:{PannelHead},
		props:['data','randomData','index'],
		data(){
			return {
				title:'SaaS覆盖数据'
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.bg-box {
		width:100%;
		height:120px;
		background: url('~@/assets/images/box1.png') no-repeat center center;
		background-size: 100%;
		padding: 16px;
		display: flex;
		justify-content: space-between;
	}
	.item-box {
		width:144px;
		height:100%;
		color: #FFFFFF;
		font-size: 28px;
		text-align: center;
		background: url('~@/assets/images/box.png') no-repeat center center / 100% 100%;
	}
	.item-top {
		height:63px;
		line-height: 63px;
	}
	.item-bottom {
		height: 25px;
		line-height: 25px;
		color: #C4E2FB;
		font-size: 14px;
	}
</style>
