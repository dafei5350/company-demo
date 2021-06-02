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
				tabTitlea: '区域代理优势',
				tablista: [{
						label: '收入共享模式',
						name: 'first',
						imga: 'src/assets/index/regional1.png',
						text: '无论您是交易培训公司，机构操盘手还是为交易者提供其它增值服务的公司等，只要您有客户资源，即可申请加入Attuare Pty. Ltd.。',
					},
					{
						label: '简单的客户入驻',
						imga: 'src/assets/index/regional1.png',
						name: 'second',
						text: '简单便捷交易界面一目了然，确保交易者可以专注于交易本身，而无需被繁复的操作功能所打扰。',
					},
					{
						label: '佣金直接到账',
						name: 'third',
						imga: 'src/assets/index/regional1.png',
						text: '基于交易数量的佣金收取，名下客户交易数量越多，佣金越丰厚，佣金也将直接汇入代理机构的交易者，您可自行提取也可用于交易。',
					},
					{
						label: '完全透明性',
						name: 'fourth',
						imga: 'src/assets/index/regional1.png',
						text: 'Attuare Pty. Ltd.致力于提供全面的透明性，代理客户可以在后台查询旗下的交易帐户的每一笔交易订单',
					},
				],
				bannera: [
					{
						imga:'src/assets/index/bg-download.jpg',
						title:'区域代理',
						main:'Attuare Pty. Ltd.的区域代理扩展计划为您提供优秀交易产品，享受巨大的收入潜力。我们的交易产品保证让您的客户在外汇市场取得特殊优势，并走在市场前列。Attuare Pty. Ltd.区域代理分支机构从字面上理解就是负责品牌在某一个区域业务扩展，使其品牌得到开发和延续性。加入我们专业的区域代理扩展计划，您可以获得更多的潜在收益，并成为推动区域代理的重要抓手。'
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
			font-size: 1.5rem;
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
			line-height: 3rem;
		}

	}
</style>
