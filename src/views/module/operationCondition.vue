<!-- 作业情况 -->
<template>
	<pannel-head :title="title" :randomData="randomData" :index="index" class="con-mar-top">
		<div class="op-container">
			<div class="bg-box">
				<div class="labels">
					近30天任务数
				</div>
				<div class="count">
					{{data.totalTaskNum}}
				</div>
			</div>
			<div class="complete-box">
				<div class="complete-left">
					<div>
						<img src="~@/assets/images/ywc.png" class="icon-oper"/>
						<div class="line-oper">
							<span class="line-labels">近30天完成数</span>
							<span class="line-count ywc">
								<countTo
								  :start-val="0"
								  :end-val="Number(data.accomplishTaskNum)"
								  separator=","
								/>
							</span>
						</div>
					</div>
					<div>
						<img src="~@/assets/images/wwc.png" class="icon-oper"/>
						<div class="line-oper">
							<span class="line-labels">近30天未完成数</span>
							<span class="line-count wwc">
								<countTo
								  :start-val="0"
								  :end-val="Number(data.notQualifieTaskNum)"
								  separator=","
								/>
							</span>
						</div>
					</div>
				</div>
				<div class="item-box">
					<div class="item-top">
						{{data.percentageComplete}}
					</div>
					<div class="item-bottom">完成率</div>
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
				title:'作业情况(近30天)',
			}
		},
		methods:{
		}
	}
</script>

<style scoped lang="scss">
	.bg-box {
		height:35px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 12px;
		background: url('~@/assets/images/box2.png') no-repeat center center / 100% 100%;
		margin-bottom:24px;
		.labels {
			color:#C4E2FB;
			font-size: 14px;
		}
		.count {
			font-size: 18px;
			font-weight: 600;
			color:#ffffff;
		}
	}
	.complete-box {
		height:120px;
		padding:20px 16px;
		background: url('~@/assets/images/box1.png') no-repeat center center / 100% 100%;
		display: flex;
		.complete-left {
			margin-right: 30px;
		}
		.complete-left>div{
			display: flex;
			align-items: center;
			.icon-oper {
				width:24px;
				height:24px;
				margin-right: 12px;
				
			}
			&:first-of-type .line-oper{
				border-bottom: 1px solid #FFFFFF;
			}
		}
		.line-oper {
			display: flex;
			justify-content: space-between;
			width:262px;
			padding: 12px 0;
			.line-labels {
				font-size: 14px;
				color: #C4E2FB;
			}
			.line-count {
				font-size: 18px;
				&.ywc {
					color: #43F1C5;
				}
				&.wwc {
					color: #FA704D;
				}
			}
		}
	}
	.item-box {
		width:120px;
		height:80px;
		color: #FFFFFF;
		font-size: 28px;
		text-align: center;
		background: url('~@/assets/images/box.png') no-repeat center center / 100% 100%;
	}
	.item-top {
		height:55px;
		line-height: 55px;
	}
	.item-bottom {
		height: 25px;
		line-height: 25px;
		color: #C4E2FB;
		font-size: 14px;
	}
</style>

