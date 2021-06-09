<template>
	<banner :bannerList="bannera"></banner>
	<div class="quick">
		<div class="quick-big">
			<div class="quick-img" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
				<img src="../assets/index/indices1.jpg">
			</div>
			<div class="quick-text"  data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
				<div class="quick-title">
					什么是差价合约交易？
				</div>
				<div class="quick-main">
					保证金交易差价合约（CFD）交易的好处就是客户可以进行保证金交易，因为基于保证金交易的差价合约，让您即便在很小的市场波动中，也有机会从中获利，也是一种极佳的投资方式。双向交易因为您所投资的是变动的股指价格而非实际持有股指，所以买卖都可以实时进行，而不用等待股指结算，您也可以抛空股票利用价格下跌的机会获利。因此一个成功的CFD投资者不论在牛市还是熊市，都可通过短期买卖而获利。
				</div>
			</div>
		</div>
	</div>
	<pictureTab :tablist="tablista" :tabTitle="tabTitlea"></pictureTab>

	<div class="minbar">
		<div class="minbar-big">
			<div class="minbar-text">
				波动最大的交易产品，为您在国际金融市场提供无限机会。
			</div>
			<a href="" class="button-a">
				<div class="minbar-button hvr-sweep-to-right">
					立即交易
				</div>
			</a>
		</div>
	</div>
	<!-- <div class="thirdbar">
		<div class="thirdbar-big">
			<div class="thirdbar-text">
				零点差交易
			</div>
			<div class="thirdbar-main">
				Attuare Pty. Ltd.考虑到不同类型投资者的交易需求，除了原本的 stpECN 账户类型之外，全新上线了一种账户类型 zeroECN 和 pureECN
				零点差交易账户。无论投资者开设任何一种交易类型的账户, Attuare Pty. Ltd.都会提供专业的统一标准的交易条件, 让您始终拥有最佳的交易体验。
			</div>
		</div>
	</div> -->
	<div class="fourth">
		<div class="fourth-img">
			<img src="../assets/index/dq.png">
		</div>
		<div class="fourth-big">
			<div class="fourth-text">
				体验市场波动最大的交易品种，开仓
			</div>
			<div class="fourth-text">
				不错过任何交易机会。
			</div>
			<a href="" class="button-a">
				<div class="fourth-button hvr-sweep-to-right">
					立即开通
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import banner from '@/components/banner.vue'
	import pictureTab from '@/components/pictureTab.vue'
	export default {
		data() {
			return {
				activeName: 'second',
				tabTitlea: '股票指数交易的优势',
				tablista: [{
						label: '全球性交易',
						name: 'first',
						imga: 'src/assets/index/forex_slider5.jpg',
						text: '能够在全球市场上交易，投资者可根据快速的市场变化即时进行买卖，因此吸引大批投资者在股票指数市场进行交易投资。',
					},
					{
						label: '14种全球各国股票指数',
						imga: 'src/assets/index/forex_slider3.jpg',
						name: 'second',
						text: '14种全球各国股票指数，可满足投资者交易需求，并根据各国货币涨跌情况进行24小时不间断交易。',
					},
					{
						label: '没有做多和做空限制',
						name: 'third',
						imga: 'src/assets/index/metal_slider4.jpg',
						text: '没有做多和做空限制，投资者可根据自己对市场行情走势进行判断下单，进入全球交易市场。',
					},
					{
						label: '超低的保证金要求',
						name: 'fourth',
						imga: 'src/assets/index/indices_slider4.jpg',
						text: '超低的保证金要求，用少量的投资成本获得近百倍的交易筹码，并可在极短的时间内完成，短至数秒钟，也可以进行更长周期的交易。',
					},
				],
				bannera: [{
					imga: 'src/assets/index/bg-download.jpg',
					title: '股票指数',
					main: 'Attuare Pty. Ltd.为您提供十余种股票指数差价合约，让交易者可以因他们对美国、欧洲及澳洲等市场的看法而进行交易。您只需要付出交易金额的一小部分作为保证金，就能够参与市场，控制您的投资组合，把握机会。差价合约涵盖所有金融中心的指数，100美元即可交易，可进行多空交易，最低交易数量0.01手，且适合各周期交易者。CFD交易方式为交易者按照约定手数向经纪商缴纳一定比例的保证金作为已经冻结资金。'
				}, ],
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
		}
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
		line-height: 80px;
		font-size: 30px;
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
			line-height: 40px;
		}
		.minbar-big{
			width: 100%;
			text-align: center;
		}
		.minbar-text{
			margin: 0 0 20px 0;
			text-align: left;
		}

		.thirdbar-big {
			width: 600px;
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
		}
	}
</style>
