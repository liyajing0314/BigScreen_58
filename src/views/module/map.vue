<template>
	<!-- <div class="mapContainer">
		<div class="head">
			<img src="~@/assets/images/line.png" class="line" />
			<div>全国项目分布</div>
		</div>
		<div id="map" class="mapChart"></div>
	</div> -->
	<div id="map" class="mapChart"></div>
</template>

<script>
	import {toThousands} from '@/utils/index'
	import {fontSize} from '@/utils/rem.js'
	import mapJsonConfig from '@/utils/map.json'
	export default {
		data() {
			return {
				geoCoordMap: {}, //地图数据 
				option:{},
				chart:null,
				areaList:[
					[125.45, 47.31],//东北地区
					[114.95, 39.05],//京津冀地区
					[117.98, 30.85],//湖北江浙沪地区
					[116.66, 23.35],//湖南两广深圳地区
					[98.82, 29.60],//西南西藏地区
					[97.98, 39.90],//新疆蒙古地区
					[114.95, 39.05],//京津冀地区
				],
				areaIndex:0,
				dataIndex:0,   // 0 综合指数 synthesizeNum  1 任务数 taskNum 2 改造数 remouldNum
				interval:null,
				synthesizeData:[], //综合指数
				taskData:[],//任务数
				remouldData:[],//改造数
				synthesizeMax:6000,
				taskMax:6000,
				remouldMax:6000,
				zoom:0.6, //0.6
				center:null,
			}
		},
		mounted() {
			let that = this
			this.geoCoordMap = {};
			let mapFeatures = mapJsonConfig.features;
			mapFeatures.forEach(function(v) {
				// 地区名称
				var name = v.properties.name;
				// 地区经纬度
				that.geoCoordMap[name] = v.properties.cp;
			});
			
			this.$echarts.registerMap('china', mapJsonConfig)
			
			this.chart = this.$echarts.init(document.getElementById("map"))
			this.chart.showLoading({
			   text : '正在加载数据',
			   maskColor:'#030D17',
			   textColor:'white'
			}); 
			
			window.onresize =()=> {
			    this.chart.resize();
			}
			
		},
		props: ['data'],
		watch: {
			data: {
				handler(n) {
					this.getData()
				},
				deep: true
			}
		},
		methods: {
			getChart(data1,data2,maxData) {
				let that = this
				this.option = {}
				let max = maxData + 100 || 6000000,
					min = 10,
				    maxSize4Pin = 100,
					minSize4Pin = 20;

				this.option = {
					tooltip: {
						show: true,
						formatter: function(params) {
							if (params.value && params.value.length > 1) {
								return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value[2] || 0 + '&nbsp;&nbsp;';
							} else {
								return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + 0 + '&nbsp;&nbsp;';
							}
						},
					},
					geo: {
						map: 'china',
						roam: true,
						label: {
							emphasis: {
								show: false
							}
						},
						zoom:that.zoom,
						center:that.center,
						layoutSize: "100%",
						itemStyle: {
							normal: {
								areaColor: {
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: '#073684' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#061E3D' // 100% 处的颜色
									}],
								},
								borderColor: '#215495',
								borderWidth: 1,
							},
							emphasis: {
								areaColor: {

									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: '#073684' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#061E3D' // 100% 处的颜色
									}],
								},
							}
						},
					},
					series: [{
						type: 'map',
						map: 'china',
						geoIndex: 0,
						aspectScale: 0.75,
						roam: true,
						zoom:that.zoom,
						label: {
							normal: {
								show: false,
							},
							emphasis: {
								show: false,
							}
						},
						data: data1,
					}, {
						type: 'effectScatter',
						coordinateSystem: 'geo',
						rippleEffect: {
							brushType: 'stroke'
						},
						showEffectOn: 'render',
						itemStyle: {
							normal: {
								color: {
									type: 'radial',
									x: 0.5,
									y: 0.5,
									r: 0.5,
									colorStops: [{
										offset: 0,
										color: 'rgba(5,80,151,0.2)'
									}, {
										offset: 0.8,
										color: 'rgba(5,80,151,0.8)'
									}, {
										offset: 1,
										color: 'rgba(0,108,255,0.7)'
									}],
									global: false // 缺省为 false
								},
							}

						},
						label: {
							normal: {
								show: true,
								color: '#fff',
								fontWeight: 'bold',
								position: 'inside',
								formatter: function(para) {
									return '{cnNum|' + toThousands(para.data.value[2]) + '}'
								},
								rich: {
									cnNum: {
										fontSize: fontSize(14),
										color: '#D4EEFF',
									}
								}
							},
						},
						symbol: 'circle',
						symbolSize: function(val) {
							if (val[2] === 0) {
								return 0;
							}
							var a = (maxSize4Pin - minSize4Pin) / (max - min);
							var b = maxSize4Pin - a * max;
							let count = a * val[2] + b * 1.2
							return fontSize(count) ;
						},
						data: data2,
						showEffectOn: 'render',
					}]
				};
				this.chart.setOption(this.option)
				this.chart.hideLoading();
				
			},
			event(){ //地图移动事件
				//东北地区  
				//京津冀地区 
				//湖北江浙沪地区 
				//湖南两广深圳地区 
				//西南西藏地区 
				//新疆蒙古地区 
				//京津冀
				//缩小到全国地图  每个地区停留5秒左右
				clearInterval(this.interval)
				this.areaIndex = 0
				setTimeout(()=>{
					this.interval = setInterval(()=>{
						if(this.areaIndex === this.areaList.length){
							// if(this.dataIndex === 1){
							// 	this.dataIndex = 0
							// }else{
							// 	this.dataIndex += 1
							// }
							
							let data = [],max = 6000
							let title="各省项目数"
								data = this.remouldData
								max = this.remouldMax
							// this.$emit('changeTitle',title)
							this.zoom = 0.6
							this.center = null
							this.getChart(data,this.convertData(data),max)
							this.event()
						}else{
							this.zoom = 1.8
							this.center = this.areaList[this.areaIndex]
							let data = [],max = 6000
							
							data = this.remouldData
							max = this.remouldMax
							this.getChart(data,this.convertData(data),max)
							this.areaIndex += 1
						}
					},5000)
				},0)
			},
			getData(){
				this.data.forEach((item) => {
					// this.synthesizeData.push({
					// 	name: item.provinceName,
					// 	value: item.synthesizeNum
					// })
					// this.taskData.push({
					// 	name: item.provinceName,
					// 	value: item.taskNum
					// })
					this.remouldData.push({
						name: item.provinceName,
						value: item.remouldNum
					})
				})
				// this.synthesizeMax = Math.max.apply(null, this.synthesizeData.map(function (o) {return o.value}))
				// this.taskMax =  Math.max.apply(null, this.taskData.map(function (o) {return o.value}))
				this.remouldMax = Math.max.apply(null, this.remouldData.map(function (o) {return o.value}))
				
				this.getChart(this.remouldData,this.convertData(this.remouldData),this.remouldMax)
				setTimeout(()=>{
					this.event()
				},5000)
			},
			convertData(data) {
				let seriesData = [];
				for (var i = 0; i < data.length; i++) {
					let name = data[i].name
					switch (name) {
						case '内蒙古自治区':
							name = "内蒙古"
							break;
						case '西藏自治区':
							name = "西藏"
							break;
						case '新疆维吾尔自治区':
							name = "新疆"
							break;
						case '宁夏回族自治区':
							name = "宁夏"
							break;
						case '广西壮族自治区':
							name = "广西"
							break;
						case '香港特别行政区':
							name = "香港"
							break;
						case '澳门特别行政区':
							name = "澳门"
							break;
						default:
							name = name.substring(0, name.length - 1)
							break;
					}

					let geoCoord = this.geoCoordMap[name];
					if (geoCoord) {
						seriesData.push({
							name: name,
							value: geoCoord.concat(data[i].value)
						});
					}
					
				}
				return seriesData;
			},
		}
	}
</script>

<style scoped lang="scss">
	.mapChart {
		position: absolute !important;
		width:100%;
		// height:100%;
		height:100vh;
		z-index: 1;
		opacity: 0.8;
	}
</style>
