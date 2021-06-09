<template>
	<div class="banner" v-for="bannera in bannerList" :key="bannera.title">
		<div class="banner-img">
			<img :src="bannera.imga">
		</div>
		<div class="banner-text" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
			<div class="banner-text-title">
				{{bannera.title}}
			</div>
			<div class="banner-text-main">
				{{bannera.main}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: ''
			}
		},
		props: ['bannerList']
	}
</script>

<style>
	.banner {
		width: 100%;
		position: relative;
	}

	.banner-img img {
		max-width: 100%;
	}

	.banner-text {
		position: absolute;
		top: 20%;
		color: #FFFFFF;
		width: 100%;
	}

	.banner-text-title {
		text-align: center;
		font-size: 28px;
		line-height: 50px;
	}

	.banner-text-main {
		line-height: 25px;
		width: 800px;
		margin: 0 auto;
		text-align: left;
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
			font-size: 12px;
		}
		
		.banner{
			margin-bottom: 50px;
		}
		
		.banner-text {
			top: 5%;
		}
			
		.banner-text-title {
			font-size: 20px;
			line-height: 30px;
		}
		.banner-text-main{
			width: 80%;
			line-height: 20px;
		}
		.banner-img img{
			height: 80vw;
		}
	}
</style>
