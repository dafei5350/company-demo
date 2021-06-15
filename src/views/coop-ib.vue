<template>
	<banner :bannerList="bannera"></banner>
	<pictureTab :tablist="tablista" :tabTitle="tabTitlea"></pictureTab>
	<div style="height: 80px;"></div>
</template>

<script>
	import banner from '@/components/banner.vue'
	import pictureTab from '@/components/pictureTab.vue'
	export default {
		data() {
			return {
				activeName: 'second',
				tabTitlea: 'coop.coopQYDLYS19',
				tablista: [{
						label: 'coop.coopSRGXMS10',
						name: 'first',
						imga: 'src/assets/index/regional1.png',
						text: 'coop.coopWLNSJYPX',
					},
					{
						label: 'coop.coopJDDKHRZ2',
						imga: 'src/assets/index/regional1.png',
						name: 'second',
						text: 'coop.coopJDBJJYJM',
					},
					{
						label: 'coop.coopYJZJDZ91',
						name: 'third',
						imga: 'src/assets/index/regional1.png',
						text: 'coop.coopJYJYSLDY',
					},
					{
						label: 'coop.coopWQTMX312',
						name: 'fourth',
						imga: 'src/assets/index/regional1.png',
						text: 'coop.coopAPLZLYTG',
					},
				],
				bannera: [
					{
						imga:'src/assets/index/bg-download.jpg',
						title:'coop.coopQYDL1743',
						main:'coop.coopAPLDQYDL',
					},
				],
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		components: {
			banner,
			pictureTab
		},
	}
</script>



<style scoped>
	body {
		margin: 0;
		color: #333333;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	@media screen and (max-width: 1000px) {
		body {
			font-size: 14px;
		}

		.banner-text {
			top: 10%;
		}

		.banner-text-title {
			font-size: 24px;
		}

		.banner-text-main {
			width: 600px;
		}

	}

	@media screen and (max-width: 800px) {
		body {
			font-size: 13px;
		}

		.banner-text {
			top: 5%;
		}

		.banner-text-title {
			line-height: 48px;
		}

	}
</style>
