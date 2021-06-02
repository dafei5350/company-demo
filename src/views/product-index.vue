<template>
	<banner :bannerList="bannera"></banner>
	<pictureTab :tablist="tablista" :tabTitle="tabTitlea"></pictureTab>

	<div class="minbar">
		<div class="minbar-big">
			<div class="minbar-text">
				波动最大的交易产品，为您在国际金融市场提供无限机会。
			</div>
			<a href="" class="button-a">
				<div class="minbar-button">
					立即交易
				</div>
			</a>
		</div>
	</div>
	<div class="thirdbar">
		<div class="thirdbar-big">
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
		<img src="../assets/index/dq.png">
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
				tabTitlea: '贵金属交易优势',
				tablista: [{
						label: '流动性强',
						name: 'first',
						imga: 'src/assets/index/forex_slider5.jpg',
						text: '流动性强，对接国际市场，可通过交易贵金属保值以分散风险，或跟随市场波动，以达到保值乃至增值目的。',
					},
					{
						label: '高达1:100倍杠杆',
						imga: 'src/assets/index/indices_slider4.jpg',
						name: 'second',
						text: '最大杠杆高达1:100倍杠杆，通过杠杆效应减少资金占用成本，提高投资效率。',
					},
					{
						label: '低成本交易',
						name: 'third',
						imga: 'src/assets/index/metal_slider3.jpg',
						text: '低成本交易, 最低入金100美元。低门槛使得新手投资者也可以轻松进入贵金属市场交易。',
					},
					{
						label: '双向交易',
						name: 'fourth',
						imga: 'src/assets/index/metal_slider4.jpg',
						text: '双向交易，摆脱了过去只有价格上涨时投资者才能获利的局限，在贵金属价格下行时也能投资获利。',
					},
					{
						label: '5天24小时可不间断交易',
						name: 'fifth',
						imga: 'src/assets/index/metal_slider5.jpg',
						text: '5天24小时可不间断交易，投资者可随时随地参与到全球市场的波动中，把握获利机会。',
					},
				],
				bannera: [
					{
						imga:'src/assets/index/bg-download.jpg',
						title:'贵金属交易',
						main:'贵金属交易是指投资人在对贵金属市场看好的情况下，通过低买高卖赚取差价的过程。也可以是在不看好经济前景的情况下所采取的一种避险交易，以实现资产的保值增值。由于黄金的稀缺属性，黄金一直都是一种非常贵重的金属，同时它也被用来当作一种交换媒介或者作为货币使用。其价格受到政治态势、经济环境、地区冲突等多种因素的影响，经常会出现大幅波动的情况。另外，黄金是通过美元结算的，因此美元的涨跌也会影响黄金价格的波动。	'
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
		margin-bottom: 0;
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
		font-size: 1.375rem;
		text-align: center;
	}

	.thirdbar-main {
		color: #9b9999;
		line-height: 30px;
		margin-top: 20px;
	}

	.fourth {
		position: relative;
		background-color: #F5F5F5;
	}

	.fourth img {
		width: 30% !important;
		height: 40% !important;
		margin-left: 10% !important;
	}

	.fourth-button {
		display: inline-block;
		width: 100px;
		height: 30px;
		background: #013B81;
	}

	.fourth-big {
		position: absolute;
		top: 25%;
		right: 15%;
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

		.thirdbar-big {
			width: 600px;
		}

		.fourth-big {
			font-size: 20px;
			line-height: 40px;
		}
	}
</style>
