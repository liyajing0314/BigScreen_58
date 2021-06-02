<template>
	<div class="center-bottom">
		<div class="bottom-item">
			<span class="labels">累计项目</span>
			<span class="nums">
				<countTo
				  :start-val="0"
				  :end-val="Number(data.totalProjectNum || 0)"
				  separator=","
				/>
			</span>
		</div>
		<div class="bottom-item">
			<span class="labels">在服项目</span>
			<span class="nums">
				<countTo
				  :start-val="0"
				  :end-val="Number(data.inSuitProjectNum || 0)"
				  separator=","
				/>
			</span>
		</div>
		<div class="bottom-item">
			<span class="labels">智能化改造项目</span>
			<span class="nums">
				<countTo
				  :start-val="0"
				  :end-val="Number(data.intelligentizeRemouldProjectNum || 0)"
				  separator=","
				/>
			</span>
		</div>
		<div class="bottom-item">
			<span class="labels">工牌数量</span>
			<span class="nums">
				<countTo
				  :start-val="0"
				  :end-val="Number(data.workCardNum || 0)"
				  separator=","
				/>
			</span>
		</div>
		<div class="bottom-item">
			<span class="labels">信标数量</span>
			<span class="nums">
				<countTo
				  :start-val="0"
				  :end-val="Number(data.beaconNum || 0)"
				  separator=","
				/>
			</span>
		</div><div class="bottom-item">
			<span class="labels">覆盖面积（m²）</span>
			<span class="nums">
				<countTo
				  :start-val="0"
				  :end-val="Number(data.squareNum || 0)"
				  separator=","
				/>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:['data']
	}
</script>

<style scoped lang="scss">
	.center-bottom {
		display: flex;
		flex-wrap: wrap;
		position: absolute;
		width:100%;
		// bottom:-6px;
		bottom:0;
		.bottom-item {
			width:268px;
			height: 90px;
			background: url('~@/assets/images/box7.png') no-repeat center center / 100% 100%;
			margin-top: 8px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 16px;
		}
		.labels {
			color: #C4E2FB;
			font-size: 14px;
		}
		.nums {
			font-size: 24px;
			font-weight: 600;
		}
	}
</style>
