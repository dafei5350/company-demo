<template>
	<banner :bannerList="bannera"></banner>
	<pictureTab :tablist="tablista" :tabTitle="tabTitlea"></pictureTab>

	<div class="minbar">
		<div class="minbar-big">
			<div class="minbar-text">
				体验市场波动最大的交易品种
			</div>
			<a href="" class="button-a">
				<div class="minbar-button">
					立即交易
				</div>
			</a>
		</div>
	</div>
	<div class="thirdbar">
		<div class="thirdbar-big" data-aos="fade-up">
			<div class="thirdbar-text">
				零点差交易
			</div>
			<div class="thirdbar-main">
				Attuare Pty. Ltd.考虑到不同类型投资者的交易需求，除了原本的 stpECN 账户类型之外，全新上线了一种账户类型 zeroECN 和 pureECN
				零点差交易账户。无论投资者开设任何一种交易类型的账户, Attuare Pty. Ltd.都会提供专业的统一标准的交易条件, 让您始终拥有最佳的交易体验。
			</div>
		</div>
	</div>
	<div class="fourth">
		<img src="../assets/index/forex_top_banner1.jpg">
		<div class="fourth-big">
			<div class="fourth-text">
				体验市场波动最大的交易品种，开仓
			</div>
			<div class="fourth-text">
				不错过任何交易机会。
			</div>
			<a href="" class="button-a">
				<div class="fourth-button">
					立即开通
				</div>
			</a>
		</div>
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
				tabTitlea: '外汇交易的优势',
				tablista: [{
						label: '24小时市场',
						name: 'first',
						imga: 'src/assets/index/forex1.png',
						text: '5天24小时不间断交易，投资者可随时随地参与到市场波动中。',
					},
					{
						label: '低成本交易',
						imga: 'src/assets/index/forex_slider2.jpg',
						name: 'second',
						text: 'Attuare Pty.Ltd.推出的stpECN账户外汇平均点差1.0个点，zeroECN和pureECN账户更是低至0.1-0.8点差加佣金模式，投资者可根据个人的投资情况选择相应账户类型并享受Attuare Pty.Ltd.提供的超低点差服务。',
					},
					{
						label: '24上百种交易货币对',
						name: 'third',
						imga: 'src/assets/index/forex_slider3.jpg',
						text: '可满足投资者交易需求，并根据各国货币涨跌情况进行24小时不间断交易。',
					},
					{
						label: '市场公开透明',
						name: 'fourth',
						imga: 'src/assets/index/forex_slider4.jpg',
						text: '巨大的交易量使市场不易受某一银行或机构操控价格，一秒内下单，无重复报价现象。',
					},
					{
						label: '全球性交易',
						name: 'fifth',
						imga: 'src/assets/index/forex_slider5.jpg',
						text: '各国货币受政策影响涨涨跌跌，投资者可根据Attuare Pty. Ltd.MT4账号进行全球性交易。',
					},
				],
				bannera: [
					{
						imga:'src/assets/index/bg-download.jpg',
						title:'外汇',
						main:'外汇交易市场,也称为"Foreign exchange"或"FX"市场，是世界上最大的金融市场，平均每天超过5万亿美元的资金在当中运转，相当于美国所有证券市场交易总和的30余倍。外汇交易市场比传统的股票、债券或者期货市场都要庞大许多，巨大的交易量使市场不易受某一银行或机构操控价格。通常用两种货币之间的兑换比例来表示。货币对里前面的货币是基础货币，后面的是对手货币。当你买卖货币对的时候，你是以基础货币为准。'
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
		display: inline-block;
		width: 100px;
		height: 30px;
		background: #013B81;
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
			height: 250px;
		}
		.fourth-big {
			font-size: 20px;
			line-height: 40px;
			right: 5%;
		}
		.fourth img{
			display: none;
		}
	}
</style>
