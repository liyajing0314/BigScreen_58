<!-- 保险数据 -->
<template>
	<pannel-head :title="title">
		<div class="bx-container">
			<div class="bg-box">
				<div class="labels">企业数</div>
				<div class="counts"><span class="num">1645</span>个</div>
			</div>
			<div class="bg-box">
				<div class="labels">劳动者</div>
				<div class="counts"><span class="num">1645</span>人</div>
			</div>
			<div class="bg-box">
				<div class="labels">均人数</div>
				<div class="counts"><span class="num">1645</span>人/企业</div>
			</div>
			<div class="bg-box">
				<div class="labels">均保额</div>
				<div class="counts"><span class="num">45</span>元/人年</div>
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
				title:'保险数据'
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.bx-container {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 32px;
	}
	.bg-box {
		width:236px;
		height:78px;
		background: url('~@/assets/images/box3.png') no-repeat center center / 100% 100%;
		margin-bottom: 6px;
		color:#C4E2FB;
		font-size: 14px;
		display: flex;
		align-items: center;
		.labels {
			width:42px;
			padding: 0 8px;
			text-align: center;
			line-height: 1.3;
		}
		.counts {
			padding: 0 20px;
			.num {
				font-weight: 600;
				font-size: 24px;
				color:#ffffff;
				margin-right: 6px;
				display: inline-block;
			}
		}
		&:nth-child(odd){
			margin-right: 8px;
		}
	}
</style>
