<!-- 验收情况 -->
<template>
	<pannel-head :title="title" :randomData="randomData" :index="index">
		<div class="ysqk-container">
			<div class="left-box">
				<div class="box-content">
					<div>
						<countTo
						  :start-val="0"
						  :end-val="Number(data.goodReputationNum || 0)"
						  separator=","
						/>
					</div>
					<div class="label">累计好评数</div>
				</div>
			</div>
			<div class="right-box">
				<div class="box-content">
					<div>
						<countTo
						  :start-val="0"
						  :end-val="Number(data.issueNum || 0)"
						  separator=","
						/>
					</div>
					<div class="label">累计问题数</div>
				</div>
				<div>
					<div class="zg-box">
						<div class="zg-lable">已整改</div>
						<div class="counts">
							<countTo
							  :start-val="0"
							  :end-val="Number(data.hasRectificationNum || 0)"
							  separator=","
							/>
						</div>
					</div>
					<div class="zg-box zgz">
						<div class="zg-lable">整改中</div>
						<div class="counts">
							<countTo
							  :start-val="0"
							  :end-val="Number(data.changesInThe || 0)"
							  separator=","
							/>
						</div>
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
		props:['data','randomData','index'],
		data(){
			return {
				title:'验收情况'
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.ysqk-container {
		display: flex;
	}
	.left-box {
		width:152px;
		height:152px;
		background: url('~@/assets/images/box5.png') no-repeat center center / 100% 100%;
		padding: 16px;
		margin-right: 12px;
	}
	.right-box {
		width:316px;
		height:152px;
		background: url('~@/assets/images/box6.png') no-repeat center center / 100% 100%;
		padding: 16px;
		display: flex;
		justify-content: space-between;
	}
	.box-content {
		width: 120px;
		height: 120px;
		text-align: center;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.05);
		font-size: 24px;
		color:#ffffff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.label {
			color: #C4E2FB;
			font-size: 14px;
			margin-top: 18px;
		}
	}
	.zg-box {
		width: 144px;
		height: 56px;
		background: rgba(67, 241, 197, 0.05);
		border: 1px solid rgba(67, 241, 197, 0.1);
		display: flex;
		align-items: center;
		.zg-lable {
			width:25px;
			color: #43F1C5;
			font-size: 14px;
			border-right: 1px solid rgba(67, 241, 197, 0.1);
			text-align: center;
			line-height: 1.2;
		}
		.counts {
			flex: 2;
			padding: 0 12px;
			font-size: 24px;
			color:#ffffff;
		}
	}
	.zgz {
		background: rgba(202, 140, 0, 0.05);
		border: 1px solid rgba(202, 140, 0, 0.1);
		margin-top: 8px;
		.zg-lable {
			color: #CA8C00;
			border-right: 1px solid rgba(202, 140, 0, 0.1);
		}
	}
</style>
