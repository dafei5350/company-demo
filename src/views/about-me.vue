<template>
	<banner :bannerList="bannera"></banner>
	<div class="financial">
		<div class="financial-img" data-aos="fade-up">
			<img src="../assets/index/guanyuwom1.png">
		</div>
		<div class="financial-top">
			<div class="financial-title" data-aos="fade-up">
				交易支持
			</div>
			<div class="financial-main" data-aos="fade-up">
				<p>我们坚信，成功交易员需要全方位的支持和资源。在Attuare Pty. Ltd.，您将享受到屡获殊荣的客服团队的专业服务。我们为您答疑解惑，并确保您的交易体验颇有收获。无论您是入市尚浅的初学者还是经验丰富的交易员，我们的多语种客服都能为您的交易带来便捷。我们专业的客户经理会根据客户的背景，经验和水平，为客户提供有效可行的培训方案。</p>
			</div>
		</div>
	</div>
	<div class="doubleQuick" data-aos="fade-up">
		<div class="quick">
			<div class="quick-big">
				<div class="quick-img">
					<img src="../assets/index/guanyuwom2.png">
				</div>
				<div class="quick-text">
					<div class="quick-title">
						以客户为中心
					</div>
					<div class="quick-main">
						秉持专业及公正的态度为客户提供公平的交易环境。遵循业内的最佳实践，保持管理、合规及诚信的高标准水平。与客户关系密切，更了解客户需求。
					</div>
					<div class="quick-title">
						高质量的客户服务团队
					</div>
					<div class="quick-main">
						高度专业、经验丰富、充满活力的客服团队。每日的市场快报和市场分析为交易者提供最新的交易机会。每周2-3次的网络讲座。
					</div>
				</div>
			</div>
		</div>
		<div class="quick">
			<div class="quick-big">
				<div class="quick-text">
					<div class="quick-title">
						增值服务
					</div>
					<div class="quick-main">
						我们的信念是不断地追求为客户带来更多服务，从而更好的实现公司的价值和理念。我们专注的管理团队也在为确保高质量的服务、24小时严谨高效的工作态度以及遵守监管条例方面不懈地努力着。
					</div>
					<div class="quick-title">
						企业理念
					</div>
					<div class="quick-main">
						无交易员平台的风险管理模式，提供最佳的交易环境。低点差及高流通性，最佳报价。MetaTrader 4平台融合公司的创新科技，提供量身订制的稳定交易环境。
					</div>
				</div>
				<div class="quick-img">
					<img src="../assets/index/guanyuwom3.png">
				</div>
			</div>
		</div>
	</div>
	<div class="financial">
		<div class="financial-top" data-aos="fade-up">
			<div class="financial-title">
				超速服务器
			</div>
			<div class="financial-main">
				<p>Attuare Pty. Ltd.运用光纤网络系统链接我们全球的交易服务器，这保证了每一项交易的闪电急速执行-稳定率99.99%MT4运行时间，提升了78%执行速度，能够链接多达46家不同的流行性服务商，每分钟超过10,000价格报价更新，高达100GB/S宽带速度，高达18内核，高达3.2GHZ频率。</p>
			</div>
		</div>
		<div class="financial-img" data-aos="fade-up">
			<img src="../assets/index/acy_servers_chinese.jpg">
		</div>
	</div>
	<div class="financial-top" data-aos="fade-up">
		<div class="financial-title">
			法规遵从
		</div>
		<div class="financial-main">
			<p>Attuare Pty. Ltd.认可遵守所有相关的法律，法规，规章，政策和标准的重要性。Attuare Pty. Ltd.致力于在我们的合法环境里创建严格的管理纪律和一流的控制秩序。包括资本充足率和审计要求。</p>
			<p>Attuare Pty. Ltd.的客户资金被隔离保存在独立信托账户中。所有客户资金均按照国际最严格款项处理规则管理，并与Attuare Pty. Ltd.公司的自有资金相隔离。客户资金不用于除客户交易活动以外的任何目的。</p>
		</div>
	</div>
	<div class="fourth">
		<img src="../assets/index/guanyuwom2.png">
		<div class="fourth-big">
			<div class="fourth-text">
				<p>免费申请真实交易账户</p>
				<p>挖掘自我交易潜能。</p>
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
	export default {
		name: 'AboutMe',
		data() {
			return{
				bannera: [
					{
						imga:'src/assets/index/choose_acy_banner.jpg',
						title:'关于我们',
						main:'Attuare Pty. Ltd.的业务是包含股票、保险、基金和金融衍生品等。投资者可受惠于我们提供的低点差、高流通性以及凭借尖端科技在庞大的金融市场中获得的最佳报价。自2011年以来，我们凭借对市场敏锐的洞察力、有效的需求管理，以客户为中心、依托先进的技术和完善的教育资源帮助更多的机构参与者和零售交易员融入不断变化的金融衍生品行业。'
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
		display: inline-block;
		width: 100px;
		height: 30px;
		background: #013B81;
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
		line-height: 30px;
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
		.fourth-big {
			font-size: 16px;
			line-height: 20px;
			right: 5%;
		}
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