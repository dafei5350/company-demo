<template>
  <banner :bannerList="bannera"></banner>
  <pictureTab :tablist="tablista" :tabTitle="tabTitlea"></pictureTab>
  <div class="minbar">
    <div class="minbar-big">
      <div class="minbar-text">{{ $t('product.platTYSCBDZD') }}</div>
      <a href="" class="button-a">
        <div class="minbar-button">{{ $t('product.platLJJY1357') }}</div>
      </a></div>
  </div>
  <div class="thirdbar">
    <div class="thirdbar-big" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="thirdbar-text">{{ $t('product.platLDCJY406') }}</div>
      <div class="thirdbar-main">{{ $t('product.platAPLKLDBT') }}</div>
    </div>
  </div>
  <div class="fourth">
    <div class="fourth-img"><img src="../assets/index/forex_top_banner1.jpg"></div>
    <div class="fourth-big">
      <div class="fourth-text">{{ $t('product.platTYSCBDZD') }}</div>
      <div class="fourth-text">{{ $t('product.platBCGRHJYJ') }}</div>
      <a href="" class="button-a">
        <div class="fourth-button hvr-sweep-to-right">{{ $t('product.platLJKT5426') }}</div>
      </a></div>
  </div>
</template>

<script>
	import banner from '@/components/banner.vue'
	import pictureTab from '@/components/pictureTab.vue'
	const ENV =
		import.meta.env
	export default {
		data() {
      return {
				activeName: 'second',
				tabTitlea: 'product.platWHJYDYS1',
				tablista: [{
						label: 'product.platXSSC3745',
						name: 'first',
						imga: 'src/assets/index/forex1.png',
						text: 'product.platTXSBJDJY',
					},
					{
						label: 'product.platDCBJY129',
						imga: 'src/assets/index/forex_slider2.jpg',
						name: 'second',
						text: 'product.platAPTCDSZH',
					},
					{
						label: 'product.platSBZJYHBD',
						name: 'third',
						imga: 'src/assets/index/forex_slider3.jpg',
						text: 'product.platKMZTZZJY',
					},
					{
						label: 'product.platSCGKTM16',
						name: 'fourth',
						imga: 'src/assets/index/forex_slider4.jpg',
						text: 'product.platJDDJYLSS',
					},
					{
						label: 'product.platQQXJY191',
						name: 'fifth',
						imga: 'src/assets/index/forex_slider5.jpg',
						text: 'product.platGGHBSZCY',
					},
				],
				bannera: [
					{
						imga:'src/assets/index/bg-download.jpg',
						title:'product.platWH720549',
						main:'product.platWHJYSCYC',
					},
				],
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		name: 'pro',
		components: {
			banner,
			pictureTab
		},
		setup() {
			console.log('ENV', ENV);
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

	.minbar {
		width: 100%;
		background: #F5F5F5;
		padding: 60px 0;
		margin: 80px 0;
	}

	.minbar-big {
		width: 600px;
		margin: 0 auto;
	}

	.minbar-text {
		display: inline-block;
		font-size: 25px;
		margin-right: 100px;
	}

	.minbar-button {
		display: inline-block;
		width: 100px;
		height: 30px;
		background: #013B81;
		border-radius:10px;
		overflow: hidden;
		box-shadow: 0px 2px 4px rgb(0 0 0 / 80%), 0px 0px 20px rgb(0 0 0 / 10%) inset;
	}

	.button-a {
		text-decoration: none;
		color: #FFFFFF;
		vertical-align: middle;
		text-align: center;
		width: 100%;
		line-height: 30px;
		font-size: 12px;
	}

	.thirdbar {
		width: 100%;
		background: #F5F5F5;
	}

	.thirdbar-big {
		width: 800px;
		margin: 0 auto;
		padding: 40px 0;
	}

	.thirdbar-text {
		font-size: 22px;
		text-align: center;
	}

	.thirdbar-main {
		color: #9b9999;
		line-height: 30px;
		margin-top: 20px;
	}

	.fourth {
		position: relative;
	}

	.fourth img {
		width: 100% !important;
		height: 100% !important;
		margin-left: 0 !important;
	}

	.fourth-button {
		display: flex;
		width: 200px;
		height: 40px;
		align-items: center;
		justify-content: center;
		background: #013B81;
		border-radius:5px;
		overflow: hidden;
		box-shadow: 0px 2px 4px rgb(0 0 0 / 40%), 0px 0px 20px rgb(0 0 0 / 10%) inset;
	}

	.fourth-big {
		position: absolute;
		top: 20%;
		right: 10%;
		line-height: 80px;
		font-size: 30px;
	}

	@media screen and (max-width: 1200px) {
		.fourth-big {
			font-size: 25px;
			line-height: 60px;
		}
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

		.el-tabs__item {
			font-size: 16px !important;
			line-height: 80px !important;
			height: 80px !important;
		}
	}

	@media screen and (max-width: 768px) {
		body {
			font-size: 13px;
		}

		.banner-text {
			top: 5%;
		}

		.banner-text-title {
			line-height: 48px;
		}

		.thirdbar-big {
			width: 600px;
		}

		.minbar{
			margin: 10px 0;
		}
		.minbar-big{
			width: 100%;
			text-align: center;
		}
		.minbar-text{
			margin: 0 0 20px 0;
		}
		.thirdbar-big{
			width: 100%;
		}
		.thirdbar-main{
			padding: 20px;
		}
		.fourth{
			padding: 50px 0;
		}
		.fourth-img{
			width: 280px;
			height: 90px;
			margin: 0 auto;
		}
		.fourth-img img{
			width: 280px !important;
			height: 90px !important;
			margin: 0 !important;
		}
		.fourth-big {
			font-size: 20px;
			line-height: 40px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			position: initial;
		}
		.fourth-button{
			margin: 0 auto;
		}
		.fourth-text{
			width: 200px;
			margin: 0 auto;
			text-align: left;
		}
	}
</style>
