<template>
	<div class="pannel">
		<div class="pannel-head">
			<img src="~@/assets/images/icon_decorate.png" class="icon-decorate"/>
			<span>{{title}}</span>
			<img src="~@/assets/images/pannel_line.png" class="pannel-line"/>
		</div>
		<img src="~@/assets/images/boundary.png" class="boundary" />
		<div class="pannel-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			title:{
				type:String
			},
			type:{
				default:1
			}
		},
	}
</script>

<style scoped lang="scss">
	.pannel {
		.pannel-head {
			color:#7FCCFF;
			font-size: 16px;
			font-weight: 600;
			.icon-decorate {
				width:8;
				height:14px;
				margin-right: 10px;
			}
			.pannel-line {
				width:228px;
				height:8px;
				margin-left: 12px;
			}
		}
		.boundary {
			width:100%;
			height:3px;
			margin: 6px 0 18px;
		}
		.pannel-content {
			min-height: 50px;
		}
	}
</style>
