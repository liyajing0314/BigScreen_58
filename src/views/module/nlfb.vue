<!-- 年龄分布 -->
<template>
	<pannel-head :title="title" :randomData="randomData" :index="index">
		<div id="nlfb" class="charts"></div>
	</pannel-head>
</template>

<script>
	import {fontSize} from '@/utils/rem.js'
	import PannelHead from '@/components/pannelHead'
	export default {
		components:{PannelHead},
		data(){
			return {
				title:'年龄分布',
				options:{},
				chart:null
			}
		},
		props:['data','randomData','index'],
		mounted () {
			let that = this
			window.addEventListener("resize", function () {
				that.chart.resize()
			});
			
			this.getChart();
		},
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
				this.chart = this.$echarts.init(document.getElementById('nlfb'))
				this.chart.showLoading({
				   text : '正在加载数据',
				   maskColor:'#030D17',
				   textColor:'white'
				}); 
				
				let opData = []
				this.data.forEach(item=>{
					opData.push({
						value:item.num,
						name:item.typeName
					})
				})
				
				this.options = {
					color:['rgba(131, 100, 241, 0.6)',' rgba(213, 133, 80, 0.6)','rgba(255, 180, 54, 0.6)','rgba(54, 156, 255, 0.6)','rgba(164, 68, 68, 0.6)','rgba(128, 180, 62, 0.6)','rgba(100, 241, 216, 0.6)'],
				    series: [
				        {
				            name: '年龄分布',
				            type: 'pie',
				            radius: ['30%', '80%'],
				            data:opData,
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)',
								borderColor:'rgba(255, 255, 255, 0.3)',
								borderWidth:fontSize(1)
							},
							label: {
								alignTo: 'edge',
								formatter: '{percentage|{c}%}    {name|{b}}\n',
								minMargin:fontSize(5),
								edgeDistance: 10,
								lineHeight: fontSize(15),
								rich: {
									percentage: {
										fontSize: fontSize(12),
										color: '#ffffff'
									},
									name: {
										fontSize: fontSize(12),
										color: '#C4E2FB'
									}
								}
							},
							labelLine: {
								length: 20,
								length2: 0,
								maxSurfaceAngle: 80
							},
							labelLayout: function (params) {
								var isLeft = params.labelRect.x < 520 / 2;
								var points = params.labelLinePoints;
								// Update the end point.
								points[2][0] = isLeft
									? params.labelRect.x
									: params.labelRect.x + params.labelRect.width;
				
								return {
									labelLinePoints: points
								};
							},
				        }
				    ]
				};
				this.chart.setOption(this.options, true)
				this.chart.hideLoading();
				let index = 0
				setInterval(()=>{
					this.chart.dispatchAction({
						type: 'downplay',
						seriesIndex: 0,
						dataIndex: index
					});
					if(index === this.data.length-1){
						index = 0
					}else{
						index++
					}
					this.chart.dispatchAction({
						type: 'highlight',
						seriesIndex: 0,
						dataIndex: index
					});
				},2000)
				this.chart.dispatchAction({
					type: 'highlight',
					seriesIndex: 0,
					dataIndex: 0
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.charts {
		height:260px;
	}
</style>

