<template>
	<div class="center-top">
		<div class="center-item">
			<img src="~@/assets/images/icon_hzhb.png" class="icon-center"/>
			<div class="center-content">
				<div class="nums">
					<countTo
					  :start-val="0"
					  :end-val="Number(data.ecologicalPartnerNum || 0) "
					  separator=","
					/>
				</div>
				<div class="labels">生态合作伙伴</div>
			</div>
		</div>
		<div class="center-item">
			<img src="~@/assets/images/icon_fws.png" class="icon-center"/>
			<div class="center-content">
				<div class="nums">
					<countTo
					  :start-val="0"
					  :end-val="Number(data.facilitatorNum || 0)"
					  separator=","
					/>
				</div>
				<div class="labels">服务商</div>
			</div>
		</div>
		<div class="center-item">
			<img src="~@/assets/images/icon_xmjl.png" class="icon-center"/>
			<div class="center-content">
				<div class="nums">
					<countTo
					  :start-val="0"
					  :end-val="Number(data.projectManagerNum || 0)"
					  separator=","
					/>
				</div>
				<div class="labels">项目经理</div>
			</div>
		</div>
		<div class="center-item">
			<img src="~@/assets/images/icon_xmzg.png" class="icon-center"/>
			<div class="center-content">
				<div class="nums">
					<countTo
					  :start-val="0"
					  :end-val="Number(data.projectSupervisorNum || 0)"
					  separator=","
					/>
				</div>
				<div class="labels">项目主管</div>
			</div>
		</div>
		<div class="center-item">
			<img src="~@/assets/images/icon_ldz.png" class="icon-center"/>
			<div class="center-content">
				<div class="nums">
					<countTo
					  :start-val="0"
					  :end-val="Number(data.workerNum || 0)"
					  separator=","
					/>
				</div>
				<div class="labels">劳动者</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['data']
	}
</script>

<style scoped lang="scss">
	.center-top {
		background-color: rgba(255,255,255,0.02);
		height:80px;
		width:100%;
		padding:12px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 6px;
		margin-top: 32px;
		.center-item {
			display: flex;
		}
		.icon-center {
			width:36px;
			height:36px;
			margin-right: 8px;
		}
		.center-content{
			flex: 1;
		}
		.nums {
			font-size: 24px;
			margin-bottom: 10px;
		}
		.labels {
			color:#C4E2FB;
			font-size: 14px;
		}
	}
</style>
