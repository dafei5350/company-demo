<template>
  <banner :bannerList="bannera"></banner>
  <div class="askd">
    <div class="askd-top">
      <div class="ask-logo"><img src="../assets/index/contact_email.svg"></div>
      <div class="ask-title">{{ $t('about.aboutQYDY1761') }}</div>
      <div class="ask-mail">service@attuare.com</div>
    </div>
    <div class="ask-picture"><img src="../assets/index/contact_operahouse.jpg"></div>
  </div>
</template>

<script>
	import banner from '@/components/banner.vue'
	export default {
		data() {
			return {
				bannera: [
					{
						imga:'src/assets/index/choose_acy_banner.jpg',
						title:'about.aboutLXWM2996',
						main:'about.aboutAPLZBSZA'
					},
				],
			};
		},
		components: {
			banner
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

	.askd{
		max-width: 1400px;
		padding: 0px 120px;
		margin: 0 auto;
	}
	.askd-top{
		display: flex;
		align-items: center;
		height: 100px;
		margin: 100px 0;
	}
	.ask-title{
		font-size: 20px;
		padding: 0 50px;
	}
	.ask-mail{
		color: #9B9999;
	}
	.ask-picture{
		margin-bottom: 40px;
	}
	.ask-picture img{
		width: 100%;
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
		.askd{
			padding: 0px 10px;
		}
		.askd-top{
			margin: 50px 0;
		}
		.ask-title{
			padding: 10px;
		}
	}
</style>