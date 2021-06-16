<template>
  <banner :bannerList="bannera"></banner>
  <div class="quick">
    <div class="quick-big">
      <div class="quick-text" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div class="quick-title">{{ $t('coop.coopHTZC9959') }}</div>
        <div class="quick-main"><p>{{ $t('coop.coopAPLTGHTD') }}</p>
          <p>{{ $t('coop.coopWMZYDJGK') }}</p>
          <p>{{ $t('coop.coopWMZLYWHZ') }}</p></div>
      </div>
      <div class="quick-img" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
          src="../assets/index/white1.png"></div>
    </div>
  </div>
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
				tabTitlea:  'coop.coopBBHZYS19',
				tablista: [{
						label: 'coop.coopDDCGLTX8',
						name: 'first',
						imga: 'src/assets/index/white2.png',
						text: 'coop.coopJTJLTXTG',
					},
					{
						label: 'coop.coopWSBJDKHG',
						imga: 'src/assets/index/white2.png',
						name: 'second',
						text: 'coop.coopNGKSYYZJ',
					},
					{
						label: 'coop.coopCJXGEHB1',
						name: 'third',
						imga: 'src/assets/index/white2.png',
						text: 'coop.coopJYJYSLDY',
					},
					{
						label: 'coop.coopQDDHDZYD',
						name: 'fourth',
						imga: 'src/assets/index/white2.png',
						text: 'coop.coopGDHTJHWN',
					},
				],
				bannera: [
					{
						imga:'src/assets/index/bg-download.jpg',
						title:'coop.coopBBHZJH33',
						main:'coop.coopBBFWYCWT',
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

	.quick {
		width: 100%;
	}

	.quick-big {
		padding: 40px 120px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		max-width: 1200px;
		margin: 0 auto;
	}


	.quick-img {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 49%;
		position: relative;
		margin: .5% 0;
		text-align: left;
	}

	.quick-img img{
		height: 100%;
	}

	.quick-text {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 49%;
		position: relative;
		margin: .5% 0;
		text-align: left;
		background-color: #F5F5F5;
		align-items: center
	}

	.quick-title {
		color: #013B81;
		font-size: 22px;
		padding-top: 10px;
	}

	.quick-main {
		line-height: 20px;
		padding: 0px 50px;
		color: #9B9999;
	}

/* 	@media screen and (max-width: 1300px) {
		.quick-title{
			padding-left: 110px;
		}
		.quick-main{
			padding: 20px 110px;
		}
	}

	@media screen and (max-width: 1200px) {
		.quick-title{
			padding-left: 80px;
			font-size: 16px;
		}
		.quick-main{
			padding: 10px 60px;
			font-size: 12px;
		}
	} */

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

	@media screen and (max-width: 768px) {
		body {
			font-size: 13px;
		}
		.el-tabs__item {
			font-size: 14px !important;
			line-height: 20px !important;
			height: 20px !important;
		}
		.quick-big {
			padding: 0 30px;
		}
		.quick-img {
			width: 100%;
		}
		.quick-text{
			width: 100%;
		}
		.quick-main{
			padding: 10px;
		}
		.quick-title{
			padding-left: 0;
			text-align: center;
		}
	}
</style>
