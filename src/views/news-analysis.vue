<template>
	<banner :bannerList="bannera"></banner>
	<div class="analyse">
		<router-link to="/">
			<div class="analyse-big">
				<div class="analyse-img">
					<img src="../assets/index/guanyuwom1.png">
				</div>
				<div class="analyse-data">
					2020-12-12
				</div>
				<div class="analyse-title">
					达里奥：若拜登获选，对市场来说sadasdasdsadasdaasdsadas
				</div>
			</div>
		</router-link>
		
		<div class="analyse-big">
			<div class="analyse-img">
				<img src="../assets/index/guanyuwom1.png">
			</div>
			<div class="analyse-data">
				2020-12-12
			</div>
			<div class="analyse-title">
				达里奥：若拜登获选，对市场来说sadasdasdsadasdaasdsadas
			</div>
		</div>
		<div class="analyse-big">
			<div class="analyse-img">
				<img src="../assets/index/guanyuwom1.png">
			</div>
			<div class="analyse-data">
				2020-12-12
			</div>
			<div class="analyse-title">
				达里奥：若拜登获选，对市场来说sadasdasdsadasdaasdsadas
			</div>
		</div>
		<div class="analyse-big">
			<div class="analyse-img">
				<img src="../assets/index/guanyuwom1.png">
			</div>
			<div class="analyse-data">
				2020-12-12
			</div>
			<div class="analyse-title">
				达里奥：若拜登获选，对市场来说sadasdasdsadasdaasdsadas
			</div>
		</div>
		<div class="analyse-big">
			<div class="analyse-img">
				<img src="../assets/index/guanyuwom1.png">
			</div>
			<div class="analyse-data">
				2020-12-12
			</div>
			<div class="analyse-title">
				达里奥：若拜登获选，对市场来说sadasdasdsadasdaasdsadas
			</div>
		</div>
		<div class="analyse-big">
			<div class="analyse-img">
				<img src="../assets/index/guanyuwom1.png">
			</div>
			<div class="analyse-data">
				2020-12-12
			</div>
			<div class="analyse-title">
				达里奥：若拜登获选，对市场来说sadasdasdsadasdaasdsadas
			</div>
		</div>
	</div>
	<el-pagination background layout="prev, pager, next" :total="1000" class="pagebar">
		
	</el-pagination>
</template>

<script>
	import banner from '@/components/banner.vue'
	export default {
		data() {
			return {
				bannera: [{
					imga: 'src/assets/index/bg-download.jpg',
					title: '市场分析',
					main: ''
				}],

			}
		},
		components: {
			banner
		},
	}
</script>

<style scoped>
	.analyse {
		width: 90%;
		max-width: 1400px;
		margin: 50px auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.analyse-big {
		width: 30%;
		margin: 20px 0;
	}

	.analyse-img {
		width: 300px;
		height: 200px;
		overflow: hidden;
		margin: 0 auto;
	}

	.analyse-img img {
		width: 300px;
	}

	.analyse-data {
		color: #9B9999;
		font-size: 14px;
		width: 300px;
		margin: 0 auto;
	}

	.analyse-title {
		font-size: 18px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		width: 300px;
		margin: 0 auto;
	}
	
	.pagebar{
		width: 400px;
		margin: 50px auto;
	}
</style>
