<!-- 性别分布 -->
<template>
	<pannel-head :title="title">
		<div>
			<div class="xb-container">
				<img src="~@/assets/images/man.png" class="man" v-for="(item,index) in man" :key="index"/>
				<img src="~@/assets/images/woman.png" class="woman" v-for="(item,index) in woman" :key="index+'woman'"/>
			</div>
			<div class="xb-container">
				<span>
					<span class="labels">男性</span>
					<span class="count-man">{{manRadio}}%</span>
				</span>
				<span>
					<span class="count-woman">{{womanRadio}}%</span>
					<span class="labels">女性</span>
				</span>
			</div>
		</div>
		
	</pannel-head>
</template>

<script>
	import PannelHead from '@/components/pannelHead'
	export default {
		components:{PannelHead},
		props:['data'],
		data(){
			return {
				title:'性别分布',
				man:0,
				manRadio:0,
				woman:0,
				womanRadio:0
			}
		},
		mounted() {
			this.initData()
		},
		watch: {
		  data: {
		    handler (n) {
			  this.initData()
		    },
		    deep: true
		  }
		},
		methods:{
			initData(){
				let count = 0
				let man = 0
				let woman = 0
				if(this.data.length >0){
					this.data.map(item=>{
						count = count + item.num
						if(item.typeName == '男'){
							man = item.num
						}else{
							woman = item.num
						}
					})
					this.manRadio = ((man/count) * 100 ).toFixed(2)
					this.womanRadio = ((woman/count) * 100 ).toFixed(2)
					
					this.man = Math.round((man/count) * 10)
					this.woman = Math.round((woman/count) * 10)
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.xb-container {
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;
		.labels {
			color: #C4E2FB;
			font-size: 14px;
		}
		.count-man {
			color: #4E94FF;
			font-size: 14px;
			margin-left: 4px;
		}
		.count-woman {
			color: #EF836D;
			font-size: 14px;
			margin-right: 4px;
		}
	}
	.man,.woman {
		width:36px;
		height:72px;
	}
</style>

