<template>
	<banner :bannerList="bannera"></banner>
	<div class="analyse" data-aos="fade-up">
		<router-link to="/news-main" class="analyse-big">
			<div class="analyse-img">
				<img src="../assets/index/guanyuwom1.png">
			</div>
			<div class="analyse-data">
				2020-12-12
			</div>
			<div class="analyse-title">
				达里奥：若拜登获选，对市场来说sadasdasdsadasdaasdsadas
			</div>
		</router-link>
		<router-link to="/news-main" class="analyse-big">
			<div class="analyse-img">
				<img src="../assets/index/guanyuwom1.png">
			</div>
			<div class="analyse-data">
				2020-12-12
			</div>
			<div class="analyse-title">
				达里奥：若拜登获选，对市场来说sadasdasdsadasdaasdsadas
			</div>
		</router-link>
		<router-link to="/news-main" class="analyse-big">
			<div class="analyse-img">
				<img src="../assets/index/guanyuwom1.png">
			</div>
			<div class="analyse-data">
				2020-12-12
			</div>
			<div class="analyse-title">
				达里奥：若拜登获选，对市场来说sadasdasdsadasdaasdsadas
			</div>
		</router-link>

	</div>
	<el-pagination background layout="prev, pager, next" :total="1000" pager-count="5" class="pagebar">

	</el-pagination>
</template>

<script>
	import banner from '@/components/banner.vue'
  import axios from '@/utils/axios'

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
    setup(){
		  axios.get('baidu.com').then(res => {
		    console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    }
	}
</script>

<style scoped>
.analyse{width:90%;max-width:1400px;margin:50px auto;display:flex;flex-wrap:wrap;justify-content:space-around;}
.analyse .analyse-big{width:40%;margin:20px 0;text-decoration:none;}
.analyse .analyse-big .analyse-img{width:280px;height:200px;overflow:hidden;margin:0 auto;}
.analyse .analyse-big .analyse-img img{width:280px;}
.analyse .analyse-big .analyse-data{color:#9B9999;font-size:14px;width:280px;margin:0 auto;}
.analyse .analyse-big .analyse-title{font-size:18px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:280px;margin:0 auto;color:#333333;}
.pagebar{width:250px;margin:50px auto;}
@media screen and (max-width: 768px) {
		.analyse .analyse-big {
			width: 100%;
		}
	}

	@media screen and (min-width: 1200px) {
		.analyse .analyse-big {
			width: 30%;
		}
	}
</style>
