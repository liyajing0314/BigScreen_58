<template>
	<div style="height: 616px;position: relative;">
		<div class="head">
			<img src="~@/assets/images/line.png" class="line" />
			<div>全国项目分布</div>
		</div>
		<div id="map" style="height: 616px;"></div>
	</div>
</template>

<script>
	import mapJsonConfig from '@/utils/map.json'
	export default {
		data() {
			return {
				geoCoordMap: {}, //地图数据 
			}
		},
		mounted() {
			this.getChart()
		},
		props: ['data'],
		watch: {
			data: {
				handler(n) {
					this.getChart()
				},
				deep: true
			}
		},
		methods: {
			getChart() {
				let that = this
				let outdata = [];

				var max = 6000,
					min = 10;
				var maxSize4Pin = 100,
					minSize4Pin = 20;

				this.data.forEach((item) => {
					outdata.push({
						name: item.provinceName,
						value: item.synthesizeNum
					})
				})


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

				let option = {
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
						//zoom:1.1,
						label: {
							normal: {
								show: false,
							},
							emphasis: {
								show: false,
							}
						},
						data: outdata,
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
									return '{cnNum|' + para.data.value[2] + '}'
								},
								rich: {
									cnNum: {
										fontSize: 13,
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
							return a * val[2] + b * 1.2;
						},
						data: this.convertData(outdata),
						showEffectOn: 'render',
					}]
				};

				this.chart.setOption(option, true)
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

					var geoCoord = this.geoCoordMap[name];
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
</style>
