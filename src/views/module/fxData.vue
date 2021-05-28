<!-- 发薪数据 -->
<!-- 覆盖数据 -->
<template>
	<pannel-head :title="title">
		<div>
			<div class="bg-box">
				<div class="item-box">
					<div class="item-top">317</div>
					<div class="item-bottom">企业数</div>
				</div>
				<div class="item-box">
					<div class="item-top">317</div>
					<div class="item-bottom">劳动者数</div>
				</div>
				<div class="item-box">
					<div class="item-top">317</div>
					<div class="item-bottom">均月薪/人</div>
				</div>
			</div>
			<div class="box-list">
				<div class="box-list-item">
					<div class="item-left">
						<div class="title">北京</div>
						<div class="bottom max">最高月薪</div>
					</div>
					<div class="item-right">
						<span class="symbol">￥</span><span>158966</span>
					</div>
				</div>
				<div class="box-list-item">
					<div class="item-left">
						<div class="title">江西</div>
						<div class="bottom min">最低月薪</div>
					</div>
					<div class="item-right">
						<span class="symbol">￥</span><span>158966</span>
					</div>
				</div>
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
				title:'发薪数据'
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.bg-box {
		width:100%;
		height:88px;
		background-size: 100%;
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
	.box-list {
		display: flex;
		justify-content: space-between;
	}
	.box-list-item{
		height:90px;
		width:236px;
		background: url('~@/assets/images/box4.png') no-repeat center center / 100% 100%;
		display: flex;
		align-items: center;
		.item-left {
			width:100px;
			min-width:100px;
			text-align: center;
		}
		.title {
			font-weight: 600;
			font-size: 16px;
			color:#ffffff;
			height:54px;
			line-height: 54px;
		}
		.bottom {
			height:36px;
			line-height: 36px;
		}
		.max {
			color:#D06667;
		}
		.min {
			color:#5295D6;
		}
		.item-right {
			flex: 2;
			font-size: 24px;
			text-align: center;
			color:#ffffff;
			.symbol {
				color:#979797;
				font-size: 12px;
			}
		}
	}
</style>
