<template>
	<div class="pannel">
		<div class="pannel-head">
			<img src="~@/assets/images/icon_decorate.png" class="icon-decorate" />
			<span>{{title}}</span>
			<img src="~@/assets/images/pannel_line.png" class="pannel-line" />
		</div>
		<div class="lg" :class="{'animation':isShow}"></div>
		<img src="~@/assets/images/boundary.png" class="boundary" />
		<div class="pannel-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String
			},
			type: {
				default: 1
			},
			randomData:{
				type:Array,
				default:[]
			},
			index:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
				isShow:false
			}
		},
		mounted() {
			this.isShow = this.randomData.indexOf(this.index) > -1
		},
		watch: {
		  randomData: {
		    handler (n) {
			  this.isShow = this.randomData.indexOf(this.index) > -1
		    },
		    deep: true
		  }
		},
	}
</script>

<style scoped lang="scss">
	.pannel {
		margin-top: 20px;
		.pannel-head {
			color: #7FCCFF;
			font-size: 16px;
			font-weight: 600;

			.icon-decorate {
				width: 8;
				height: 14px;
				margin-right: 10px;
			}

			.pannel-line {
				width: 228px;
				height: 8px;
				margin-left: 12px;
			}
		}

		.boundary {
			width: 100%;
			height: 3px;
			margin: 6px 0 18px;
		}

		.pannel-content {
			min-height: 50px;
			// margin-bottom: 30px;
			// margin-bottom:7.2%;
		}
	}

	.lg{
		background: linear-gradient(-45deg, rgba(122, 136, 194, 1), rgba(122, 136, 194, 0));
		background-size: 400%;
		width: 100%;
		height: 1px;
		position: relative;
		top:10px;
	}
	.animation {
		animation: sun 1.8s infinite linear;
	}
	@keyframes sun {
		0% {
			background-position: 0 0
		}
		100% {
			background-position: -100% 0;
		}
	}
</style>
