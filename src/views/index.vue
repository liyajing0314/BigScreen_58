<template>
	<div class="container supervise_bg">
		<div style="position: absolute;z-index: 3;width:100%;height: 100%;">
			<div class="head">
				<div class="head-title">58企服服务数据看板</div>
			</div>
			<div class="content">
				<div class="con-left">
					<fg-data :data="dataNum" :randomData="randomData" :index="1" v-if="dataNum"></fg-data>
					<zp-data :data="dataNum" :randomData="randomData" :index="2" v-if="dataNum"></zp-data>
					<bx-data :data="dataNum" :randomData="randomData" :index="3" v-if="dataNum"></bx-data>
					<fx-data :data="dataNum" :randomData="randomData" :index="4" v-if="dataNum"></fx-data>
				</div>
				<div class="con-center">
					<center-top :data="dataNum" v-if="dataNum"></center-top>
					<!-- <map-components :data="cityCoversCondition"></map-components> -->
					<div class="mapContainer">
						<div class="head">
							<img src="~@/assets/images/line.png" class="line" />
							<div>{{mapTitle}}</div>
						</div>
					</div>
					<center-bottom :data="dataNum" v-if="dataNum"></center-bottom>
				</div>
				<div class="con-right">
					<operation-condition :data="dataNum" :randomData="randomData" :index="5" v-if="dataNum"></operation-condition>
					<ysqk :data="dataNum" :randomData="randomData" :index="6" v-if="dataNum"></ysqk>
					<nlfb :data="nlData" :randomData="randomData" :index="7"></nlfb>
					<xbfb :data="xbData" :randomData="randomData" :index="8"></xbfb>
				</div>
			</div>
		</div>
		<div class="shadow"></div>
		<map-components :data="cityCoversCondition" @changeTitle="changeTitle"></map-components>
		<div class="mask load8" v-if="loading">
			<div class="loader">加载中...</div>
		</div>
	</div>
</template>
<script>
	import centerBottom from './module/centerBottom.vue'
	import mapComponents from './module/map.vue'
	import centerTop from './module/centerTop.vue'
	import xbfb from './module/xbfb.vue'
	import nlfb from './module/nlfb.vue'
	import ysqk from './module/ysqk.vue'
	import operationCondition from './module/operationCondition.vue'
	import fxData from './module/fxData.vue'
	import bxData from './module/bxData'
	import zpData from './module/zpData'
	import fgData from './module/fgData'
	import {
		formatTime
	} from '@/utils/index'
	export default {
		components: {
			fgData,
			zpData,
			bxData,
			fxData,
			operationCondition,
			ysqk,
			nlfb,
			xbfb,
			centerTop,
			mapComponents,
			centerBottom
		},
		data() {
			return {
				data: {},
				dataNum: {},
				nlData: [],
				xbData: [],
				cityCoversCondition: [],
				randomData: [],
				loading:false,
				mapTitle:"各省项目数"
			}
		},
		mounted() {
			this.loading = true
			this.randomNum()
			setInterval(() => {
				this.randomData = []
				this.randomNum()
			}, 2000)
			this.getData()
		},
		methods: {
			getData() {
				this.$api.getServeData().then(res => {
					if (res.code == '200') {
						let result = res.result ? res.result : {}
						this.data = result
						this.dataNum = result ? result.dataNum : {}
						let distribution = result ? result.distribution : [];
						this.nlData = []
						this.xbData = []
						distribution.forEach(item => {
							if (item.type == '1') {
								this.nlData.push(item)
							} else if (item.type == '2') {
								this.xbData.push(item)
							}
						})

						this.cityCoversCondition = result ? result.cityCoversCondition : []
					}
					this.loading = false
				})
			},
			randomNum() {
				let add = 0;
				while (add < 2) {
					let num = Math.ceil(Math.random() * 8);
					if (this.randomData.indexOf(num) == -1) {
						this.randomData.push(num);
						add++;
					}
				}
			},
			changeTitle(title){
				console.info('title',title)
				this.mapTitle = title
			}
		},
	}
</script>
<style scoped lang="scss">
	.mapContainer {
		height: 600px;
		margin-bottom: 20px;
		position: relative;

		.head {
			position: absolute;
			left: 0;
			right: 0;
			margin: 0 auto;
			top: 40px;
			z-index: 10;
			text-align: center;
			font-size: 28px;
			font-weight: 600;
			color: #FFFFFF;

			.line {
				width: 184px;
				margin-bottom: 25px;
			}
		}
	}

	.shadow {
		// background: radial-gradient(circle at 100%, rgba(3, 13, 23, 0.8), rgba(3, 13, 23, 0) 50%, rgba(3, 13, 23, 0.8) 75%, rgba(3, 13, 23, 0.8) 100%);
		background: radial-gradient(circle,rgba(3, 13, 23, 0) 50%, rgba(3, 13, 23, 0.6) 75%, rgba(3, 13, 23, 0.8) 100%);
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 2;
	}

	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 3;
		top:0;
		background-color: rgba(3, 14, 23, 0.6);
	}

	.loader {
		margin: -100px auto 0;
		top:50%;
		font-size: 14px;
		position: relative;
		text-indent: -9999em;
		border-top: 14px solid rgba(255, 255, 255, 0.2);
		border-right: 14px solid rgba(255, 255, 255, 0.2);
		border-bottom: 14px solid rgba(255, 255, 255, 0.2);
		border-left: 14px solid rgba(78, 148, 255, 0.8);
		-webkit-animation: load8 1.1s infinite linear;
		animation: load8 1.1s infinite linear;
	}

	.loader,
	.loader:after {
		border-radius: 50%;
		width: 100px;
		height: 100px;
	}

	@-webkit-keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
</style>
