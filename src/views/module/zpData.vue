<!-- 招聘数据 -->
<template>
	<pannel-head :title="title" :randomData="randomData" :index="index">
		<div class="zp-container">
			<div class="bg-box " :class="{'oddBox':type === 'odd','evenBox':type === 'even'}">
				<div class="labels">
					城市合作伙伴数
				</div>
				<div class="count">{{data.cityPartnerNum}}</div>
			</div>
			<div class="bg-box" :class="{'evenBox':type === 'odd','oddBox':type === 'even'}">
				<div class="labels">
					代理商数
				</div>
				<div class="count">{{data.agentNum}}</div>
			</div>
			<div class="bg-box" :class="{'oddBox':type === 'odd','evenBox':type === 'even'}">
				<div class="labels">
					企业数
				</div>
				<div class="count">{{data.enterpriseNum}}</div>
			</div>
			<div class="bg-box" :class="{'evenBox':type === 'odd','oddBox':type === 'even'}">
				<div class="labels">
					猎头数
				</div>
				<div class="count">{{data.headhuntingNum}}</div>
			</div>
			<div class="bg-box" :class="{'oddBox':type === 'odd','evenBox':type === 'even'}">
				<div class="labels">
					岗位数
				</div>
				<div class="count">{{data.postNum}}</div>
			</div>
		</div>
	</pannel-head>
</template>

<script>
	import PannelHead from '@/components/pannelHead'
	export default {
		components:{PannelHead},
		props:['data','randomData','index'],
		data(){
			return {
				title:'招聘数据',
				type:"odd"
			}
		},
		mounted() {
			// setInterval(()=>{
			// 	this.type = this.type === 'odd' ? 'even' : 'odd'
			// },3000)
		},
	}
</script>

<style scoped lang="scss">
	.zp-container {
		margin-bottom: 26px;
	}
	.bg-box {
		height:35px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 12px;
		margin-bottom: 6px;
		.labels {
			color:#C4E2FB;
			font-size: 14px;
		}
		.count {
			font-size: 18px;
			font-weight: 600;
			color:#ffffff;
		}
	}
	.oddBox{
		background: url('~@/assets/images/box2.png') no-repeat center center / 100% 100%;
	}
	.evenBox {
		background: url('~@/assets/images/box2_next.png') no-repeat center center / 100% 100%;
	}
</style>
