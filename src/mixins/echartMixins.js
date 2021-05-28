import echart from '@/common/echart/index'
import pannelHead from '@/components/pannelHead'

export default {
	data(){
		return {
			options:{}
		}
	},
	props:['title'],
	components:{
		echart,pannelHead
	},
	mounted() {
		this.getChart()
	},
}