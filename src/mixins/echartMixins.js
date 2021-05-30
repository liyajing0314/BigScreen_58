import echart from '@/common/echart/index'

export default {
	data(){
		return {
			options:{}
		}
	},
	components:{
		echart
	},
	mounted() {
		this.getChart()
	},
}