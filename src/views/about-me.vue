<template>
  <banner :bannerList="bannera"></banner>
  <div class="financial">
    <div class="financial-img"><img src="../assets/index/guanyuwom1.png"></div>
    <div class="financial-top" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="financial-title">{{ $t('about.aboutJYZC1874') }}</div>
      <div class="financial-main"><p>{{ $t('about.aboutWMJXCGJY') }}</p></div>
    </div>
  </div>
  <div class="doubleQuick">
    <div class="quick">
      <div class="quick-big">
        <div class="quick-img" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
            src="../assets/index/guanyuwom2.png"></div>
        <div class="quick-text" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div class="quick-title">{{ $t('about.aboutYKHWZX87') }}</div>
          <div class="quick-main">{{ $t('about.aboutBCZYJGZD') }}</div>
          <div class="quick-title">{{ $t('about.aboutGZLDKHFW') }}</div>
          <div class="quick-main">{{ $t('about.aboutGDZYJYFF') }}</div>
        </div>
      </div>
    </div>
    <div class="quick">
      <div class="quick-big">
        <div class="quick-text" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div class="quick-title">{{ $t('about.aboutZZFW1324') }}</div>
          <div class="quick-main">{{ $t('about.aboutWMDXNSBD') }}</div>
          <div class="quick-title">{{ $t('about.aboutQYLN1950') }}</div>
          <div class="quick-main">{{ $t('about.aboutWJYYPTDF') }}</div>
        </div>
        <div class="quick-img" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
            src="../assets/index/guanyuwom3.png"></div>
      </div>
    </div>
  </div>
  <div class="financial">
    <div class="financial-top" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="financial-title">{{ $t('about.aboutCSFWQ154') }}</div>
      <div class="financial-main"><p>{{ $t('about.aboutAPLYYGXW') }}</p></div>
    </div>
    <div class="financial-img" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
        src="../assets/index/acy_servers_chinese.jpg"></div>
  </div>
  <div class="financial-top" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
    <div class="financial-title">{{ $t('about.aboutFGZC1781') }}</div>
    <div class="financial-main"><p>{{ $t('about.aboutAPLRKZSS') }}</p>
      <p>{{ $t('about.aboutAPLDKHZJ') }}</p></div>
  </div>
  <div class="fourth">
    <div class="fourth-img"><img src="../assets/index/guanyuwom2.png"></div>
    <div class="fourth-big">
      <div class="fourth-text"><p>{{ $t('about.aboutMFSQZSJY') }}</p>
        <p>{{ $t('about.aboutWJZWJYQN') }}</p></div>
      <a href="" class="button-a">
        <div class="fourth-button hvr-sweep-to-right">{{ $t('about.aboutLJKT1267') }}</div>
      </a></div>
  </div>
</template>

<script>
	import banner from '@/components/banner.vue'
	export default {
		name: 'AboutMe',
		data() {
			return{
				bannera: [
					{
						imga:'src/assets/index/choose_acy_banner.jpg',
						title:'about.aboutGYWM2219',
						main:'about.aboutAPLDYWSB'
					},
				],
			}
		},
		components: {
			banner
		},
	}
</script>

<style scoped>
	.financial{
		width: 90%;
		max-width: 1200px;
		margin: 80px auto;
	}

	.financial-top{
		width: 90%;
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

	.financial-img img{
		width: 90%;
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
		padding: 2% 0;
		text-align: left;
		background-color: #F5F5F5;
	}

	.quick-title {
		color: #013B81;
		padding-left: 130px;
	}

	.quick-main {
		line-height: 30px;
		padding: 30px 130px;
		color: #9B9999;
	}

	.fourth {
		margin-top: 80px;
		position: relative;
		background-color: #F5F5F5;
		padding: 80px 0;
	}

	.fourth img {
		width: 30% !important;
		height: 40% !important;
		margin-left: 15% !important;
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
		box-shadow: 0px 2px 4px rgb(0 0 0 / 40%), 0px 0px 20px rgb(0 0 0 / 10%), inset;
	}

	.fourth-big {
		position: absolute;
		top: 25%;
		right: 20%;
		line-height: 40px;
		font-size: 30px;
	}
	.button-a {
		text-decoration: none;
		color: #FFFFFF;
		vertical-align: middle;
		text-align: center;
		width: 100%;
		line-height: 40px;
		font-size: 12px;

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
		.fourth {
			padding: 100px 0;
		}
		.quick-title{
			padding-left: 80px;
		}
		.quick-main{
			padding: 10px 60px;
			font-size: 12px;
		}
	}
	@media screen and (max-width: 768px) {
		.financial{
			width: 90%;
			margin: 20px auto;
		}
		.financial-img img{
			width: 90%;
		}
		.financial-top{
			margin: 20px auto;
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
		.fourth{
			padding: 50px 0;
		}
		.fourth-img{
			width: 280px;
			height: 180px;
			margin: 0 auto;
		}
		.fourth-img img{
			width: 280px !important;
			height: 180px !important;
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
	}
</style>
