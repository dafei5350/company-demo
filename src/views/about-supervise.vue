<template>
	<banner :bannerList="bannera"></banner>
	<div class="financial">
		<div class="financial-top">
			<div class="financial-title">
				金融服务监管信息
			</div>
			<div class="financial-main">
				<p>1，Attuare Pty. Ltd.受澳大利亚证券和投资委员会监管和许可(ASIC AFSL: 271471 )。 Attuare Pty. Ltd.仅接受澳大利亚居民或ASIC 所接受的客户并严格遵守澳大利亚法规。</p>
				<p>2，Attuare Pty. Ltd.受加拿大委员会监管和许可（FINTRAC:M19008229）。Attuare Pty. Ltd.接受非澳大利亚居民。</p>
			</div>
		</div>
		<div class="financial-img">
			<img src="../assets/index/regulations.png">
		</div>
	</div>
	<div class="financial-top" style="margin-bottom: 0;">
		<div class="financial-title">
			资金安全
		</div>
		<div class="financial-main">
			<p>Attuare Pty. Ltd.推出了统一账户多样化的金融产品，其中包含外汇、贵金属、股指、原油等其他大宗商品。为了满足客户在交易活动中要求的资产安全保障，Attuare Pty. Ltd.提供多种不同出入金解决方案，确保我们客户的资金安全性达到极致。为客户提供最高级别的资金安全是我们的生存之本。</p>
			<p>资金安全包含资金隔离、出入金便捷、反洗钱规定、金融专业会员资格等。</p>
		</div>
	</div>
	<pictureTab :tablist="tablista" :tabTitle="tabTitlea"></pictureTab>
	<div class="doubleQuick">
		<div class="quick">
			<div class="quick-big">
				<div class="quick-img">
					<img src="../assets/index/regulations4.png">
				</div>
				<div class="quick-text">
					<div class="quick-title">
						金融专业会员资格
					</div>
					<div class="quick-main">
						金融申诉服务机构是解决金融服务纠纷的专业机构。Attuare Pty. Ltd.致力于为投资者、基金管理人和个人交易者提供卓越的服务。我们的目标是为所有交易者提供一个公平、专业、便捷的交易环境。
					</div>
				</div>
			</div>
		</div>
		<div class="quick">
			<div class="quick-big">
				<div class="quick-text">
					<div class="quick-title">
						反洗钱法规定
					</div>
					<div class="quick-main">
						根据国际反洗钱法规定，在开通真实交易账户时，Attuare Pty. Ltd.需要您提供完整、真实的身份证明及地址证明。您的入金仅能由您名下的银行卡支付，出金仅能出至您名下的银行卡中。Attuare Pty. Ltd.不支持任何形式的第三方出入金，也不支持任何形式的跨境换汇。
					</div>
				</div>
				<div class="quick-img">
					<img src="../assets/index/regulations5.png">
				</div>
			</div>
		</div>
	</div>
	<div class="financial-top" style="margin-bottom: 0;">
		<div class="financial-title">
			隐私保护
		</div>
		<div class="financial-main">
			<p>Attuare Pty. Ltd.遵照1988年颁布的隐私法，履行其保障隐私的义务。隐私保护包括我们如何搜集、使用、公开及保护来自申请和接受我们服务的用户的个人信息。</p>
			<p>了解更多关于隐私保护的信息，请 与我们联系。</p>
		</div>
	</div>
	<div class="fourth">
		<img src="../assets/index/dq.png">
		<div class="fourth-big">
			<div class="fourth-text">
				免费申请真实交易账户
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
				tabTitlea: '',
				tablista: [{
						label: '资金隔离',
						name: 'first',
						imga: 'src/assets/index/regulations1.png',
						text: '根据监管要求，客户资金被隔离到世界一级银行信托账户，与Attuare Pty. Ltd.运营账户完全隔离。同时存放在国际大型银行开设的隔离式账户下，处理客户用于交易之外，不允许以任何缘由挪作他用。因为根据相关监管部门的要求，Attuare Pty. Ltd.有责任将客户的资金视为客户财产，非公司所有。',
					},
					{
						label: '出入金便捷',
						imga: 'src/assets/index/regulations1.png',
						name: 'second',
						text: '为确保客户资金得到妥善的运用和安全，Attuare Pty. Ltd.提供了电汇和银联的出入金模式，其中银联入金即时到账，提取资金在执行审批后最快当天或下个工作日到达客户银行账号。Attuare Pty. Ltd.与各大银行有紧密的合作关系，确保各个渠道都是稳定和便捷，让交易者能第一时间安排自己的资产。同时，Attuare Pty. Ltd.还安排每天18小时的取款专员，通过邮件、电话、即时聊天等方式，及时辅助交易者完成取款申请，让您在取款的过程中感受到不一样的服务。',
					},
				],
				bannera: [{
					imga: 'src/assets/index/choose_acy_banner.jpg',
					title: '监管信息',
					main: '我们的目标只有一个，为您的成功，为您的获利，奉献我们的所有。因此，尽我们最大的努力，提供给您无以伦比的价格和执行，以及卓越的杠杆机会，最低的点差和无干扰交易执行。此外，同样重要的还有，我们提供的高度的安全性和优质的服务，因此您可以完全放心交易。以下您可以了解到，我们如何通过资质和监管建立我们的客户信任关系。'
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
		line-height: 1.9rem;
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
		font-size: 1.375rem;
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
