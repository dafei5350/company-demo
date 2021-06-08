<template>
	<banner :bannerList="bannera"></banner>
	<div class="news-main">
		<div class="news-title">
			美联储或被迫扩表，黄金牛市远未结束？
		</div>
		<div class="news-date">
			2020-09-29
		</div>
		<div class="news-content">
			<div class="news-text">
				国际货币基金组织（IMF）数据显示，截至7月，发达经济体债务已升至全球国内生产总值（GDP）的128%，达到二战以来最高水平。此外，美联储上周的季度报告也显示，联邦政府债务年化增长率为58.9%，这是2007-2009年经济衰退时期的三倍。
			</div>
			<div class="news-text">
				国际货币基金组织（IMF）数据显示，截至7月，发达经济体债务已升至全球国内生产总值（GDP）的128%，达到二战以来最高水平。此外，美联储上周的季度报告也显示，联邦政府债务年化增长率为58.9%，这是2007-2009年经济衰退时期的三倍。
			</div>
			<div class="news-img">
				<img src="../assets/index/forex_slider5.jpg" >
			</div>
			<div class="news-text">
				国际货币基金组织（IMF）数据显示，截至7月，发达经济体债务已升至全球国内生产总值（GDP）的128%，达到二战以来最高水平。此外，美联储上周的季度报告也显示，联邦政府债务年化增长率为58.9%，这是2007-2009年经济衰退时期的三倍。
			</div>
			<div class="news-text">
				国际货币基金组织（IMF）数据显示，截至7月，发达经济体债务已升至全球国内生产总值（GDP）的128%，达到二战以来最高水平。此外，美联储上周的季度报告也显示，联邦政府债务年化增长率为58.9%，这是2007-2009年经济衰退时期的三倍。
			</div>
			<div class="news-img">
				<img src="../assets/index/forex_slider5.jpg" >
			</div>
			<div class="news-text">
				国际货币基金组织（IMF）数据显示，截至7月，发达经济体债务已升至全球国内生产总值（GDP）的128%，达到二战以来最高水平。此外，美联储上周的季度报告也显示，联邦政府债务年化增长率为58.9%，这是2007-2009年经济衰退时期的三倍。
			</div>
			<div class="news-text">
				国际货币基金组织（IMF）数据显示，截至7月，发达经济体债务已升至全球国内生产总值（GDP）的128%，达到二战以来最高水平。此外，美联储上周的季度报告也显示，联邦政府债务年化增长率为58.9%，这是2007-2009年经济衰退时期的三倍。
			</div>
		</div>
	</div>
</template>

<script>
	import banner from '@/components/banner.vue'
	export default {
		data() {
			return {
				bannera: [{
					imga: 'src/assets/index/bg-download.jpg',
					title: '',
					main: ''
				}],
	
			}
		},
		components: {
			banner
		},
	}
</script>

<style>
.news-main{width:90%;max-width:1200px;margin:0 auto 100px;}
.news-main .news-title{font-size:22px;text-align:center;margin-top:50px;}
.news-main .news-date{font-size:14px;text-align:center;color:#9B9999;margin:30px 0;}
.news-main .news-content{}
.news-main .news-content .news-text{font-size:16px;line-height:25px;text-indent:32px;margin:30px 0;}
.news-main .news-content .news-img{width:80%;margin:0 auto;}
.news-main .news-content .news-img img{width:100%;}
@media screen and (max-width: 768px){
	.news-main .news-title{font-size:16px}
	.news-main .news-date{font-size:12px;margin:10px 0;}
	.news-main .news-content .news-text{font-size:14px}
	.news-main .news-content .news-img{width:90%;}
}
</style>
