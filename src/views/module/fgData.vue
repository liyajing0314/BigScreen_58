<!-- 覆盖数据 -->
<template>
	<pannel-head :title="title">
		<div class="bg-box">
			<div class="item-box">
				<div class="item-top">317</div>
				<div class="item-bottom">项目数</div>
			</div>
			<div class="item-box">
				<div class="item-top">317</div>
				<div class="item-bottom">企业数</div>
			</div>
			<div class="item-box">
				<div class="item-top">317</div>
				<div class="item-bottom">劳动者数</div>
			</div>
		</div>
	</pannel-head>
</template>

<script>
	import PannelHead from '@/components/pannelHead'
	export default {
		components:{PannelHead},
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
		margin-bottom: 32px;
	}
	.item-box {
		width:144px;
		height:100%;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.05);
		color: #FFFFFF;
		font-size: 28px;
		text-align: center;
	}
	.item-top {
		height:63px;
		line-height: 63px;
	}
	.item-bottom {
		height: 25px;
		line-height: 25px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.05);
		color: #C4E2FB;
		font-size: 14px;
	}
</style>
