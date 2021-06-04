<template>
	<banner :bannerList="bannera"></banner>
	<div class="financial-top" style="margin-bottom: 0;">
		<div class="financial-title">
			桌面版 MetaTrader 4
		</div>
		<div class="financial-main">
			<p>Attuare Pty. Ltd.的桌面版MT4交易平台有着多样的功能、流畅的界面及完美的交易环境。它是为满足您的所有交易需求和提升您的交易频率而设计的，
				制图功能和创新的订单管理工具，确保您能够快速且有效地管理持仓。</p>
		</div>
	</div>
	<div class="button-big">
		<a href="" class="button-a">
			<div class="fourth-button">
				立即下载
			</div>
		</a>
		<a href="" class="button-a">
			<div class="fourth-button">
				开户体验
			</div>
		</a>
	</div>
	<div class="financial-top">
		<div class="financial-title">
			桌面版MetaTrader4优势
		</div>
	</div>
	<el-row class="edge-big">
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in edgeMsg" :key="item">
				<div>
					<div class="edge-img">
						<img :src="item.src">
					</div>
					<div class="edge-bot">
						<div class="edge-bot-big">
							<div class="edge-bot-title">
								{{item.titleA}}
							</div>
							<div class="edge-bot-main">
								{{item.mainA}}
							</div>
						</div>
						<div class="edge-bot-big side-border">
							<div class="edge-bot-title">
								{{item.titleB}}
							</div>
							<div class="edge-bot-main">
								{{item.mainB}}
							</div>
						</div>
						<div class="edge-bot-big">
							<div class="edge-bot-title">
								{{item.titleC}}
							</div>
							<div class="edge-bot-main">
								{{item.mainC}}
							</div>
						</div>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</el-row>
	<div class="financial-top" style="margin-bottom: 0;">
		<div class="financial-title">
			移动版 - MetaTrader 4
		</div>
		<div class="financial-main">
			<p>除了桌面版平台，我们还为交易者提供了手机和平板电脑版本的移动端平台，使交易者可以随时随地的进行交易。交易者可在iPhone、iPad、安卓系统或Windows系统的智能手机上体验MT4平台。</p>
		</div>
	</div>
	<div class="buttonb-big">
		<a href="">
			<div class="button-b">
				<img src="../assets/index/IOS_Download-en.png">
			</div>
		</a>
		<a href="">
			<div class="button-b">
				<img src="../assets/index/anzou.jpg">
			</div>
		</a>
	</div>
	<div class="financial-top">
		<div class="financial-title">
			移动交易平台特点
		</div>
	</div>
	<el-row class="trait-big">
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in trait">
				<div class="trait-img">
					<img :src="item.src" >
				</div>
				<div class="trait-text">
					<div class="trait-title">
						{{item.title}}
					</div>
					<div class="trait-main">
						{{item.mainA}}
					</div>
					<div class="trait-main">
						{{item.mainB}}
					</div>
					<div class="trait-main">
						{{item.mainC}}
					</div>
					<div class="trait-main">
						{{item.mainD}}
					</div>
					<div class="trait-main">
						{{item.mainE}}
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</el-row>
	<div class="financial-top" style="margin-bottom: 0;">
		<div class="financial-title">
			电脑端 - MetaTrader 4
		</div>
		<div class="financial-main">
			<p>MT4交易平台是世界上最受欢迎的在线交易平台，拥有无比可拟的直观和可定制的用户界面特性。只需客户简单登录账户信息即可。</p>
		</div>
	</div>
	<div class="button-big">
		<a href="" class="button-a">
			<div class="fourth-button">
				立即下载
			</div>
		</a>
	</div>
	<div class="financial-top">
		<div class="financial-title">
			网页交易平台特点
		</div>
	</div>
	<el-row class="edge-big">
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in edgeMsgB" :key="item">
				<div>
					<div class="edge-img">
						<img :src="item.src">
					</div>
					<div class="edge-bot">
						<div class="edge-bot-big">
							<div class="edge-bot-title">
								{{item.titleA}}
							</div>
							<div class="edge-bot-main">
								{{item.mainA}}
							</div>
						</div>
						<div class="edge-bot-big side-border">
							<div class="edge-bot-title">
								{{item.titleB}}
							</div>
							<div class="edge-bot-main">
								{{item.mainB}}
							</div>
						</div>
						<div class="edge-bot-big">
							<div class="edge-bot-title">
								{{item.titleC}}
							</div>
							<div class="edge-bot-main">
								{{item.mainC}}
							</div>
						</div>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</el-row>
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
	export default {
		data() {
			return {
				bannera: [{
					imga: 'src/assets/index/bg-download.jpg',
					title: 'MetaTrader 4',
					main: 'Attuare Pty. Ltd.使用MetaTrader 4交易平台（MT4），交易速度高达50毫秒。我们使用全球顶级服务器，让您轻松交易。 您可以在我们的网站上下载适用PC和移动设备的平台客户端。'
				}, ],
				edgeMsg: [{
						src: 'src/assets/index/zh_mt4_pc1.jpg',
						titleA: '高效可靠的执行速度',
						mainA: 'Attuare Pty. Ltd.服务器连接延迟速度低至30ms，采用全球顶级服务器，全年99.97% 不掉线。',
						titleB: '界面直观，实时报价',
						mainB: '所有交易定单都能以直线方式显示于图表， 交易一目了然。Attuare Pty. Ltd.所提供的流通性来自于16 家世界顶级银行的共同报价，为您的交易提供更多的成交价格。',
						titleC: '支持“一键下单”功能',
						mainC: '一键管理成千上万账户，使用EA交易大大提高您的交易效率。'
					},
					{
						src: 'src/assets/index/zh_mt4_pc2.jpg',
						titleA: '所有订单以STP模式结算银行',
						mainA: '让客户的下单发送到银行，按银行的价位接近客户的价格进行即时交易，无延迟。',
						titleB: '最低交易0.01手',
						mainB: '最小交易0.01一标准手、杠杆500:1倍、最低入金 100美元，以最少风险参与真实交易。',
						titleC: '可自行编辑和设置交易策略',
						mainC: '它是一个集合式下单的软件工具，能快速执行大批客户订单，提升交易技巧。'
					},
					{
						src: 'src/assets/index/zh_mt4_pc3.jpg',
						titleA: '',
						mainA: '',
						titleB: 'MT4 附带的30几种技术指标',
						mainB: '指标按照类型分为成交量指标、趋势指标、震荡指标等，每种指标都有各自的优势，熟练运用指标能帮助投资者获得盈利。',
						titleC: '',
						mainC: ''
					}
				],
				edgeMsgB: [{
						src: 'src/assets/index/zh_mt4_web1.jpg',
						titleA: '适用于任何操作系统',
						mainA: '包含PC端、网页端Windows、Mac 和Linux、移动端iOS和安卓系统。',
						titleB: '无需安装软件',
						mainB: '只需打开网页链接即可输入用户名和密码登陆，无需下载软件及APP等。',
						titleC: '各大浏览器均可打开',
						mainC: '支持谷歌、IE 、360和火狐浏览器等。'
					},
					{
						src: 'src/assets/index/zh_mt4_web2.jpg',
						titleA: '60余种技术指标分析',
						mainA: '指标按照类型分为成交量指标、趋势指标、震荡指标等，每种指标都有各自的优势，熟练运用指标能帮助投资者获得盈利。',
						titleB: '广泛的分析工具和覆盖图',
						mainB: '18种画线工具,9个交易周期图表选项,60余种国际领先技术指标和声音预警提示，分析行情走势得心应手。',
						titleC: '可查看交易记录',
						mainC: '所有下单记录均有迹可循，清楚了解自己的每一笔交易。'
					},
					{
						src: 'src/assets/index/zh_mt4_web3.jpg',
						titleA: '一键管理交易账户',
						mainA: '拥有一键开仓平仓跟踪止损划线下单等功能，助您无忧下单。',
						titleB: '图表显示您的动态订单',
						mainB: '交易中的订单始终显示在图标最显眼的地方，时刻提醒您订单走势。',
						titleC: '即时交易',
						mainC: '在下单的过程中，当设定价格一旦触及，系统可以很迅速下单或平仓，投资者的交易时间不会被浪费掉。'
					}
				],
				trait: [
					{
						src: 'src/assets/index/zh_mt4_mobile1.jpg',
						title: '触控交易',
						mainA: 'MT4服务器接口可以因你的要求而定制平台的工作模式。API能解决一系列广泛的问题。',
						mainB: '轻松设定止盈止损',
						mainC: '多账户轻松切换',
						mainD: '',
						mainE: '',
					},
					{
						src: 'src/assets/index/zh_mt4_mobile2.jpg',
						title: '交互式图表',
						mainA: '可以经验总结编写成指标，并应用于图表；或者根据自己的习惯，做出适合自己的指标，让交易参考更加的MACD多元化。',
						mainB: '实时互动图表',
						mainC: '多种图表种类',
						mainD: '多重时间架构',
						mainE: '涵盖18种画线工具及30种技术指标',
					},
					{
						src: 'src/assets/index/zh_mt4_mobile3.jpg',
						title: '账户管理',
						mainA: '管理程序允许你集中客户于一个伺服器商，你只需一个伺服器便可处IB和客户所有账户和指令。',
						mainB: '账户资金及交易信息轻松查看',
						mainC: '与PC端交易平台自动同步',
						mainD: '',
						mainE: '',
					},
					{
						src: 'src/assets/index/zh_mt4_mobile4.jpg',
						title: '交易历史查询',
						mainA: '在MT4平台中的终端窗口中点击账户历史的时候，由于MT4平台的账户历史会不定期的清除，您可以查看部分时间的历史记录。',
						mainB: '可一键查询已平仓交易记录',
						mainC: '',
						mainD: '',
						mainE: '',
					}
				]
			}
		},
		components: {
			banner
		},
	}
</script>

<style scoped>
	.financial {
		width: 80%;
		max-width: 1200px;
		margin: 40px auto;
	}

	.financial-top {
		width: 80%;
		max-width: 800px;
		margin: 80px auto;
	}

	.financial-title {
		text-align: center;
		font-size: 18px;
	}

	.financial-main {
		color: #9B9999;
		line-height: 30px;
	}

	.button-big {
		display: flex;
		width: 250px;
		margin: 0 auto;
	}

	.buttonb-big {
		display: flex;
		width: 500px;
		margin: 0 auto;
		justify-content: space-around;
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

	.button-a {
		text-decoration: none;
		color: #FFFFFF;
		vertical-align: middle;
		text-align: center;
		width: 100%;
		line-height: 30px;
		font-size: 12px;
	}

	.button-b {
		width: 200px;
		height: 80px;
	}

	.button-b img {
		width: 100%;
	}

	.edge-big {
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
	}
	.edge-big:deep().el-carousel__container{
		height: 800px;
	}
	.edge-img{
		width: 70%;
		margin: 0 auto;
	}
	.edge-img img{
		width: 100%;
	}
	.edge-bot{
		width: 80%;
		margin: 0 auto;
		margin-top: 100px;
		display: flex;
	}
	.edge-bot-big{
		width: 33%;
		padding:20px 40px;
	}
	.edge-bot-title{
		margin-bottom: 10px;
		font-weight: bold;
	}
	.edge-bot-main{
		color: #9B9999;
	}
	.side-border{
		border-left: 1px solid #F5F5F5;
		border-right: 1px solid #F5F5F5;
	}

	.trait-big {
		width: 80%;
		max-width: 800px;
		margin: 0 auto;
	}

	.trait-big:deep().el-carousel__container {
		height: 600px;
	}

	.trait-img {
		width: 50%;
		float: left;
	}

	.trait-img img{
		width: 60%;
	}

	.trait-text{
		width: 50%;
		float: right;
		margin-top: 50px;
	}
	.trait-title{
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.trait-main{
		line-height: 30px;
		margin-bottom: 20px;
	}
	@media screen and (max-width: 1200px) {
		.fourth-big {
			font-size: 25px;
			line-height: 60px;
		}
	}
</style>
