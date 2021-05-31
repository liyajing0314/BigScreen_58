<template>
	<div class="container supervise_bg">
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
				<map-components :data="cityCoversCondition"></map-components>
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
				randomData: []
			}
		},
		mounted() {
			this.randomNum()
			setInterval(()=>{
				this.randomData = []
				this.randomNum()
			},2000)
			this.getData()
		},
		methods: {
			getData() {
				this.$api.getServeData().then(res => {
					if (res.code == '200') {
						console.info(res)
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
			}
		},
	}
</script>
<style scoped lang="scss">

</style>
