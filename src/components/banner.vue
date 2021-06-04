<template>
	<div class="banner" v-for="bannera in bannerList" :key="bannera.title">
		<div class="banner-img">
			<img :src="bannera.imga">
		</div>
		<div class="banner-text">
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
		font-size: 1.75rem;
		line-height: 5rem;
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
			font-size: 1.5rem;
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
	
	@media screen and (max-width: 800px) {
		body {
			font-size: 13px;
		}
	
		.banner-text {
			top: 5%;
		}
	
		.banner-text-title {
			line-height: 3rem;
		}
	}
</style>
