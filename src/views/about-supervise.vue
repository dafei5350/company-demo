<template>
  <banner :bannerList="bannera"></banner>
  <div class="financial">
    <div class="financial-top" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div class="financial-title">{{ $t('about.aboutJRFWJGXX') }}</div>
      <div class="financial-main"><p>{{ $t('about.aboutAPLSADLY') }}</p>
        <p>{{ $t('about.aboutAPLSJNDW') }}</p></div>
    </div>
    <div class="financial-img" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
        src="../assets/index/regulations.png"></div>
  </div>
  <div class="financial-top" style="margin-bottom: 0;" data-aos="fade-down" data-aos-easing="linear"
       data-aos-duration="1500">
    <div class="financial-title">{{ $t('about.aboutZJAQ2303') }}</div>
    <div class="financial-main"><p>{{ $t('about.aboutAPLTCLTY') }}</p>
      <p>{{ $t('about.aboutZJAQBHZJ') }}</p></div>
  </div>
  <pictureTab :tablist="tablista" :tabTitle="tabTitlea"></pictureTab>
  <div class="doubleQuick">
    <div class="quick">
      <div class="quick-big">
        <div class="quick-img" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
            src="../assets/index/regulations4.png"></div>
        <div class="quick-text" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div class="quick-title">{{ $t('about.aboutJRZYHYZG') }}</div>
          <div class="quick-main">{{ $t('about.aboutJRSSFWJG') }}</div>
        </div>
      </div>
    </div>
    <div class="quick">
      <div class="quick-big">
        <div class="quick-text" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div class="quick-title">{{ $t('about.aboutFXQFGD37') }}</div>
          <div class="quick-main">{{ $t('about.aboutGJGJFXQF') }}</div>
        </div>
        <div class="quick-img" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
            src="../assets/index/regulations5.png"></div>
      </div>
    </div>
  </div>
  <div class="financial-top" style="margin-bottom: 0;" data-aos="fade-down" data-aos-easing="linear"
       data-aos-duration="1500">
    <div class="financial-title">{{ $t('about.aboutYSBH1538') }}</div>
    <div class="financial-main"><p>{{ $t('about.aboutAPLZZNBB') }}</p>
      <p>{{ $t('about.aboutLJGDGYYS') }}</p></div>
  </div>
  <div class="fourth">
    <div class="fourth-img"><img src="../assets/index/dq.png"></div>
    <div class="fourth-big">
      <div class="fourth-text">{{ $t('about.aboutMFSQZSJY') }}</div>
      <a href="" class="button-a">
        <div class="fourth-button hvr-sweep-to-right">{{ $t('about.aboutLJKT5479') }}</div>
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
				tabTitlea: '',
				tablista: [{
						label: 'about.aboutAAAAAAA1',
						name: 'first',
						imga: 'src/assets/index/regulations1.png',
						text: 'about.aboutAAAAAAA2',
					},
					{
						label: 'about.aboutAAAAAAA3',
						imga: 'src/assets/index/regulations1.png',
						name: 'second',
						text: 'about.aboutAAAAAAA4',
					},
				],
				bannera: [{
					imga: 'src/assets/index/choose_acy_banner.jpg',
					title: 'about.aboutAAAAAAA5',
					main: 'about.aboutAAAAAAA6'
				}, ],
			};
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

	.financial{
		width: 80%;
		max-width: 1200px;
		margin: 40px auto;
	}

	.financial-top{
		width: 80%;
		max-width: 800px;
		margin: 80px auto;
	}

	.financial-title{
		text-align: center;
		font-size: 18px;
	}

	.financial-main{
		color: #9B9999;
		line-height: 30px;
	}

	.financial-img{
		display: flex;
		justify-content: space-around
	}

	.doubleQuick{
		margin: 50px 0;
	}

	.quick {
		width: 100%;
	}

	.quick-big {
		padding: 0px 120px;
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

	.quick-text {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 49%;
		position: relative;
		margin: .5% 0;
		text-align: left;
		background-color: #F5F5F5;
	}

	.quick-title {
		color: #013B81;
		font-size: 22px;
		padding-left: 130px;
	}

	.quick-main {
		line-height: 30px;
		padding: 30px 130px;
		color: #9B9999;
	}

	.minbar {
		width: 100%;
		background: #F5F5F5;
		padding: 60px 0;
		margin: 80px 0;
	}

	.minbar-big {
		width: 1000px;
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
		background: #FFFFFF;
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
		margin-top: 80px;
		position: relative;
		background-color: #F5F5F5;
	}

	.fourth img {
		width: 30% !important;
		height: 40% !important;
		margin-left: 10% !important;
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
		top: 25%;
		right: 15%;
		font-size: 30px;
		width: 510px;
	}

	@media screen and (max-width: 1300px) {
		.quick-title{
			padding-left: 110px;
		}
		.quick-main{
			padding: 30px 110px;
		}
	}

	@media screen and (max-width: 1200px) {
		.fourth-big {
			font-size: 25px;
			line-height: 60px;
		}
		.quick-title{
			padding-left: 80px;
			font-size: 16px;
		}
		.quick-main{
			padding: 10px 60px;
			font-size: 12px;
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

		.fourth{
			padding: 50px 0;
		}
		.fourth-img{
			width: 280px;
			height: 240px;
			margin: 0 auto;
		}
		.fourth-img img{
			width: 280px !important;
			height: 240px !important;
			margin: 0 !important;
		}
		.fourth-big {
			font-size: 20px;
			line-height: 40px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			position: initial;
			width: auto;
		}
		.fourth-button{
			margin: 0 auto;
		}
		.fourth-text{
			width: 200px;
			margin: 0 auto;
			text-align: left;
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
			margin-top: 10px;
		}
	}
</style>
