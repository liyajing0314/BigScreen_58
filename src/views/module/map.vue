<template>
	<div style="height: 590px;position: relative;">
		<div class="head">
			<img src="~@/assets/images/line.png" class="line"/>
			<div>全国项目分布</div>
		</div>
		<div id="map" style="height: 590px;"></div>
	</div>
</template>

<script>
	import '@/utils/china.js'
	import mapJsonConfig from '@/utils/map.json'
	export default {
		data(){
			return {
				
			}
		},
		mounted() {
			this.getChart()
		},
		props:['data'],
		watch: {
		  data: {
		    handler (n) {
			  this.getChart()
		    },
		    deep: true
		  }
		},
		methods:{
			getChart(){
				let that = this
				// var outname = ["南海诸岛", '北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南', '台湾', '香港', '澳门'];
				// var outvalue = [0, 524, 13, 140, 75, 13, 83, 11, 19, 15, 69, 260, 39, 4, 31, 104, 36, 1052, 33, 347, 9, 157, 22, 4, 18, 5, 2398, 41, 0, 484, 404, 22, 3, 5, 225];
				let outdata = [];
				
				var max = 6000,
				    min = 10;
				var maxSize4Pin = 100,
				    minSize4Pin = 20;
					
				this.data.forEach((item)=>{
					outdata.push({
					    name: item.provinceName,
					    value: item.synthesizeNum
					})
				})
				
				
				var geoCoordMap = {};
				let mapFeatures = mapJsonConfig.features;
				mapFeatures.forEach(function(v) {
				    // 地区名称
				    var name = v.properties.name;
				    // 地区经纬度
				    geoCoordMap[name] = v.properties.cp;
				
				});
				
				this.$echarts.registerMap('china', mapJsonConfig)
				
				this.chart = this.$echarts.init(document.getElementById("map"))
				var convertData = function(outdata) {
				    var res = [];
				    for (var i = 0; i < outdata.length; i++) {
				        var geoCoord = geoCoordMap[outdata[i].name];
				        if (geoCoord) {
				            res.push({
				                name: outdata[i].name,
				                value: geoCoord.concat(outdata[i].value),
				            });
				        }
				    }
				    return res;
				};
				
				let option = {
				    tooltip: {
				        show: true,
				        formatter: function(params) {
				            if (params.value.length > 1) {
				                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value[2] + '人&nbsp;&nbsp;';
				            } else {
				                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '人&nbsp;&nbsp;';
				            }
				        },
				
				    },
				
				    geo: {
				        map: 'china',
				        show: true,
				        roam: false,
				        label: {
				            emphasis: {
				                show: false
				            }
				        },
				        layoutSize: "100%",
				        itemStyle: {
				            normal: {
				                borderColor: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                    offset: 0,
				                    color: '#53D9FF'
				                }, {
				                    offset: 1,
				                    color: '#53D9FF'
				                }], false),
				                borderWidth: 3,
				            }
				        }
				    },
				    series: [{
				        type: 'map',
				        map: 'china',
				        aspectScale: 0.75,
				        //zoom:1.1,
				        label: {
				            normal: {
				                show: false,
				            },
				            emphasis: {
				                show: false,
				            }
				        },
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
				        data: convertData(outdata),
				        zlevel: 1,
				    }]
				};
				
				this.chart.setOption(option, true)
			}
		}
	}
</script>

<style scoped lang="scss">
	.head {
		position: absolute;
		left:0;
		right:0;
		margin: 0 auto;
		top:40px;
		z-index: 10;
		text-align: center;
		font-size: 28px;
		font-weight: 600;
		color: #FFFFFF;
		.line {
			width:184px;
			margin-bottom: 25px;
		}
	}
</style>
