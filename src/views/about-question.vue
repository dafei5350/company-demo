<template>
	<banner :bannerList="bannera"></banner>
	<el-tabs model-value="first" @tab-click="handleClick" stretch="true" class="question-main">
		<el-tab-pane label="交易问题" name="first">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseA">
				<el-collapse-item :title="item.title" :name="item.name">
					<div>{{item.textA}}</div>
					<div>{{item.textB}}</div>
					<div>{{item.textC}}</div>
					<div>{{item.textD}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane label="市场问题" name="second">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseB">
				<el-collapse-item :title="item.title" :name="item.name">
					<div>{{item.textA}}</div>
					<div>{{item.textB}}</div>
					<div>{{item.textC}}</div>
					<div>{{item.textD}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane label="MT4平台问题" name="third">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseC">
				<el-collapse-item :title="item.title" :name="item.name">
					<div>{{item.textA}}</div>
					<div>{{item.textB}}</div>
					<div>{{item.textC}}</div>
					<div>{{item.textD}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane label="开户问题" name="fourth">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseD">
				<el-collapse-item :title="item.title" :name="item.name">
					<div>{{item.textA}}</div>
					<div>{{item.textB}}</div>
					<div>{{item.textC}}</div>
					<div>{{item.textD}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane label="出入金问题" name="fifth">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseE">
				<el-collapse-item :title="item.title" :name="item.name">
					<div>{{item.textA}}</div>
					<div>{{item.textB}}</div>
					<div>{{item.textC}}</div>
					<div>{{item.textD}}</div>
					<div>{{item.textE}}</div>
					<div>{{item.textF}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane label="交易点差" name="sixth">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseF">
				<el-collapse-item :title="item.title" :name="item.name">
					<div>{{item.textA}}</div>
					<div>{{item.textB}}</div>
					<div>{{item.textC}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane label="增值服务" name="seventh">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseG">
				<el-collapse-item :title="item.title" :name="item.name">
					<div>{{item.textA}}</div>
					<div>{{item.textB}}</div>
					<div>{{item.textC}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane label="交易账户" name="eighth">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseH">
				<el-collapse-item :title="item.title" :name="item.name">
					<div>{{item.textA}}</div>
					<div>{{item.textB}}</div>
					<div>{{item.textC}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
	</el-tabs>
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
				activeNames: ['1'],
				bannera: [{
					imga: 'src/assets/index/choose_acy_banner.jpg',
					title: '常见问题解答',
					main: 'Attuare Pty. Ltd.为您带来外汇入门基础知识解答，让您更快学会什么是外汇，外汇交易该注意什么等，想了解更多外汇知识请关注Attuare Pty. Ltd.！'
				}, ],
				collapseA: [{
						title: '最小开设账户的资金是多少?',
						name: '1',
						textA: '开设Attuare Pty. Ltd.的MT4账户，最低入金为100美金。'
					},
					{
						title: 'Attuare Pty. Ltd.提供什么样的杠杆？',
						name: '2',
						textA: 'Attuare Pty. Ltd.提供灵活的交易杠杆高达200倍，目前提供1:100倍杠杆以适应不同的客户需求。'
					},
					{
						title: 'Attuare Pty. Ltd.提供培训吗?',
						name: '3',
						textA: 'Attuare Pty. Ltd.有全面外汇交易课件指南，专门提供外汇差价合约知识。 可查看 页面, 另外我们会有定期的讲座，我们将会公布在网站上。'
					},
					{
						title: 'Attuare Pty. Ltd.提供多少种交易产品?',
						name: '4',
						textA: 'Attuare Pty. Ltd.共提供上百种交易产品。其中包括外汇货币对、贵金属  及差价合约'
					},
					{
						title: 'Attuare Pty. Ltd.的MT4里面所有外汇黄金，CFDs一手都是一标准手吗？',
						name: '5',
						textA: '外汇一手是10万基础货币，黄金一手是100盎司，原油一手是1,000桶，股指一手为一张合约，您可以在MT4盘面左侧商品栏里任选一种产品，点右键，点规格，即可查看产品的合约大小。 '
					},
					{
						title: 'Attuare Pty. Ltd.针对客户资金安全吗？',
						name: '6',
						textA: '针对客户的资金肯定是安全的，平台经营8年没有一个客户的资金出现过问题，你可以放心在我们平台交易，我们严格遵守国际反洗钱法保障您的资金安全。'
					},
					{
						title: '在你们这里开Attuare Pty. Ltd.账户，除了点差还有其它费用吗？',
						name: '7',
						textA: '我们平台是有三种账户，账户只收取客户下单时的点差。欧美平均1.0，黄金0.2，原油0.025，我们平台的营销策略就是低点差的平台。',
						textB: '账户是0.1-0.8点差账户类型，具体账户详情请查看'
					},
					{
						title: '哪里可以查看到Attuare Pty. Ltd.的隔夜利息报价？ 隔夜利息是怎么收取的？',
						name: '8',
						textA: '客户登录真实账户，在MT4盘面左侧商品栏里任选一种产品，点右键，点规格，可以查看到产品的隔夜利息。'
					},
					{
						title: '模拟账户和真实账户一样吗?',
						name: '9',
						textA: '模拟账户和真实账户是相同的报价源，但由于技术原因，真实账户和模拟账户不享受同样的交易环境。因为模拟账户的订单并不进入真正的交易市场，所以和真实账户不具有可比性。模拟账户的设计是用来使交易者熟悉交易平台，因此它用于不能带来真正的交易体验。'
					},
					{
						title: '你们平台会不会滑点 ?',
						name: '10',
						textA: '首先找到滑点原因，滑点多数是因为网络延迟造成的，交易订单在传输到服务器成交是要经过防火墙，如果行情波动很大的情况下，在服务成交的时候价格已经变化 了，会造成滑点，而我们服务器选用世界Tier1提供商，网络延迟可以做到50ms。滑点是不可避免，但我们确保了你网络的执行速度，从而更加稳定！ '
					},
					{
						title: 'Attuare Pty. Ltd.有滑点吗？会无故掉线吗？',
						name: '11',
						textA: 'Attuare Pty. Ltd.是无交易员模式，订单直接对冲到国际市场，你也知道我们国内是有长城防火墙的，你的订单传输到国外的服务器成交的过程中有可能出现网络延迟，有可能会出现滑点，不过不存在人为的滑点和掉线，一般是在市场行情跳空或者行情很大时，有可能出现滑点，我们平台的服务器已经是全球最尖端的服务器了，网络延迟可以做到50毫秒以内，如果大行情的时候出现滑点肯定是要比其他平台滑的少的。 '
					},
					{
						title: '我能交易的最低交易手数是多少?',
						name: '12',
						textA: 'Attuare Pty. Ltd.最低交易手数0.01手，满足小资金客户交易。具体请在MT4盘面左侧商品栏里任选一种产品，点右键，点规格即可查看交易手数的最高和最低。'
					},
					{
						title: 'Attuare Pty. Ltd.最低入金是多少？爆仓比例是多少？',
						name: '13',
						textA: '最低入金100美金，Attuare Pty. Ltd.的爆仓比例是100% 。'
					},
					{
						title: '什么是锁仓爆仓',
						name: '14',
						textA: '锁仓，一般是指投资者在买卖合约后，当市场出现与自己操作相反的走势时，开立与原先持仓相反的新仓，又称对锁、锁单，甚至美其名曰蝴蝶双飞爆仓，一般是指投资者在外汇交易亏损大于您的帐户中去除保证金后的可用资金。'
					},

				],
				collapseB: [{
						title: '什么是外汇?',
						name: '1',
						textA: '外汇交易是全球最大的金融市场，日平均交易量超过5万亿美元。外汇交易是买进一种货币的同时卖出另一种货币，因此它总是成对交易。外汇报价也是根据市场需求和供给的关系而不断浮动。',
					},
					{
						title: '我该怎样通过外汇交易赚钱?',
						name: '2',
						textA: '赚钱的方法一般就是“低买高卖或者高卖低买”，由于Attuare Pty. Ltd.提供了外汇保证金交易杠杆，从而使您可以用更少的钱而参与到外汇交易市场中去，赚取更多的利润。',
					},
					{
						title: '外汇是一个公平的市场吗?',
						name: '3',
						textA: '外汇被认为是地球上最公平、最透明的市场，最主要的原因是目前外汇、贵金属、能源和指数是国际市场上的主流交易产品，参与者众多，交易量巨大，个人或机构很难控制如此巨大的产品市场走向，所以外汇市场是一个公平的交易市场。',
					},
					{
						title: '谁是外汇市场的主要参与者?',
						name: '4',
						textA: '外汇市场的参与者主要包括各国的中央银行、商业银行、非银行金融机构、经纪人公司、自营商及大型跨国企业等。它们交易频繁，交易金额巨大，每笔交易均在几百万美元，甚至千万美元以上。',
					},
					{
						title: '哪些货币对是最常交易的货币对?',
						name: '5',
						textA: '流动性最强的货币一般来自于那些具有稳定的国内政治以及备受尊敬的中央银行的国家。这些货币与美元组成货币对，一般被称为主要货币对。在外汇交易市场中，这些主要货币对的交易量占85%。比如 USD/JPY， GBP/USD， AUD/USD， USD/CHF， 和 USD/CAD',
					},
					{
						title: '在外汇市场交易需要花很多钱才行吗?',
						name: '6',
						textA: '并不是，在Attuare Pty. Ltd.投资者入金100美金即可开始交易。通过1:100的杠杆可以使交易者的利润放大，当然同时也会使交易者的亏损加快。',
					},
					{
						title: '在外汇交易中我该如何控制风险?',
						name: '7',
						textA: '在外汇交易中有很多种控制风险的风险管理策略。其中最常用的就是止盈和止损。止盈和止损可以直接在MT4平台上设置，通过设定自己能承受的亏损来规避大范围的风险。止盈和止损以同样的方式执行，但是可以允许设置在更高的价格。',
					},
					{
						title: '强制平仓和追加保证金百分比分别是多少？',
						name: '8',
						textA: '作为Attuare Pty. Ltd.的客户，请您确保您的账户在交易下一笔订单之前维持最低保证金水平。',
						textB: '如果您的账户净值仅达到保证金要求的150％或更少，那么您将处于追加保证金的状态。通过交易平台您可以看到您的订单出现粉红色。',
						textC: '如果您的账户净值仅达到持仓所需的保证金要求的100％，那么亏损最大的订单将会在可用的第一个报价自动平仓。',
						textD: '想要了解追加保证金水平的相关完整信息， 查看我们的条款。',
					}
				],
				collapseC: [{
						title: 'Attuare Pty. Ltd.除MT4以外还有其它软件吗？',
						name: '1',
						textA: 'Attuare Pty. Ltd.提供两种交易软件，分别是“MT4交易软件”和“MT5交易软件” 。'
					},
					{
						title: 'Attuare Pty. Ltd.在哪里修改MT4密码？',
						name: '2',
						textA: 'Attuare Pty. Ltd.客户可以直接登录MT4修改密码，点击工具-选项-服务器，密码一般是要求要有字母的大写小写加数字的。'
					},
					{
						title: '我该如何通过网络交易?',
						name: '3',
						textA: '任何客户都可以通过网络在世界各地进行交易。MT4是一种通用的平台。一旦您下载并安装好交易软件，便可以在交易软件上看到报价窗口，并点击交易。同时您也可以通过手机，平板电脑等移动设备进行交易。'
					},
					{
						title: '我能在MetaTrader 4设置挂单吗?',
						name: '4',
						textA: 'MetaTrader 4允许设置挂单，挂单将存储在服务器中，并且在条件达到时被执行。'
					},
					{
						title: 'MetaTrader 4有追踪止损订单吗?',
						name: '5',
						textA: 'MetaTrader 4允许您设置追踪止损订单。'
					}
				],
				collapseD: [{
						title: '我该如何才能开设一个Attuare Pty. Ltd.的真实账户?',
						name: '1',
						textA: '开设Attuare Pty. Ltd.的真实账号是很简单的。登陆Attuare Pty. Ltd.官方网站， 填写并提交您的开户资料和开户申请即可。一旦您的开户申请得到我们客服的批准，您将会收到一封包含用户名和密码的邮件。'
					},
					{
						title: 'Attuare Pty. Ltd.开户需要哪些资料？',
						name: '2',
						textA: 'Attuare Pty. Ltd.开户需要邮箱，手机号，身份证正反面，银行卡正面，银行卡开户行即可。'
					},

					{
						title: 'Attuare Pty. Ltd.开户时间要多久完成？Attuare Pty. Ltd.杠杆是多少倍？可以自行更改吗？',
						name: '3',
						textA: '收到完整材料后1小时内开通，杠杆是100到200倍，如果需要修改杠杆，客户可以在账户开通之后发送”杠杠修改邮件“到我们的官方邮箱，我们在收到邮件后尽快帮您进行杠杆修改。'
					},
				],
				collapseE: [{
						title: '我该如何入金到我的账户?',
						name: '1',
						textA: 'Attuare Pty. Ltd.入金流程如下:',
						textB: '• 登陆Attuare Pty. Ltd.交易后台',
						textC: '• 找到左上角出入金',
						textD: '• 点击入金',
						textE: '• 找到左上角入金申请',
						textF: '• 填写好需要入金的金额，点击去支付，选择商家进行购买，填写好入金的资料（姓名，交易账户，入金金额，）点击购买，付完款之后把转载凭证上传，点击立刻提交即可'
					},
					{
						title: '入金需要多长时间才能到帐?',
						name: '2',
						textA: '银联入金将会在提交凭证后一个小时之内到账，而国际电汇可能需要1-3工作日之内能到账。'
					},
					{
						title: '我该如何取款?',
						name: '3',
						textA: '您只需要通过登录Attuare Pty. Ltd.交易后台左上角中点击出入金，点击出金，提交出金申请，选择您需要出金的账户，点击账户操作栏的出金，填写好出金的资料（出金金额，填写好开户行，收款人姓名，银行卡号码）点击确认即可'
					},
					{
						title: 'Attuare Pty. Ltd.出入金在哪里完成？',
						name: '4',
						textA: '每个客户都有属于自己的管理后台，出入金支持银联、电汇，出入金都可以在客户本人的专属管理后台进行。'
					},
					{
						title: 'Attuare Pty. Ltd.出入金可以用银联出入金吗？出入金费用？ 出入金时间要多久？',
						name: '5',
						textA: '可以使用银联出入金，入金免费，你入人民币换汇的过程中银联可能会收取一点换汇的汇率差，我们平台是不收取任何的费用的，出金则不会收取您的手续费，银联入金将会在提交凭证后一个小时之内到账，而国际电汇可能需要1-3工作日之内能到账。，出金将会在1-3个工作日内到账'
					},
					{
						title: 'Attuare Pty. Ltd.银联入金的汇率是多少?',
						name: '6',
						textA: '汇率由银联决定，具体的可以参照中国银行公布的报价，一般银联入金银行可能会收取部分的点差费用的，银行是不会白换汇的，他们赚取的也是点差，我们平台是不会收取你任何的费用的，如果资金特别的大的客户建议直接电汇，这样会节省你入金换汇的成本。 '
					},
					{
						title: 'Attuare Pty. Ltd.可以接受第三方出入金吗？',
						name: '7',
						textA: 'Attuare Pty. Ltd.不接受第三方出入金的，出入金只可以使用客户本人名下的卡。'
					},
				],
				collapseF: [{
					title: '点差是什么意思?',
					name: '1',
					textA: '在外汇交易中，您会看到一个两边的报价，由买价 (ask) 与卖价 (bid) 组成。买价代表您能买入基础货币的价位 (同时卖出非基础货币)；卖价代表您能卖出基础货币的价位 (同时买入非基础货币) 。买价与卖价的差别为点差。'
				}],
				collapseG: [{
						title: 'Attuare Pty. Ltd.有没有客户经理？',
						name: '1',
						textA: 'Attuare Pty. Ltd.每一个客户都安排有专属的客户经理，有什么问题随时可以咨询客户经理或者邮件咨询官方邮箱。'
					},
					{
						title: 'Attuare Pty. Ltd.有没有在线客服支持，上班时间是什么时间？',
						name: '2',
						textA: 'Attuare Pty. Ltd.官网有在线客服支持，以人工方式回复客户问题。',
						textB: 'Attuare Pty. Ltd.客服中心的工作时间是工作日的早上9点-晚上的22点，随时为客户解答在交易中遇到的问题。'
					},
				],
				collapseH: [{
						title: 'Attuare Pty. Ltd.一个人可以开几个交易账户？',
						name: '1',
						textA: 'Attuare Pty. Ltd.一个邮箱可以开通20个账户。如果您还需要开通新的交易账户，可以发送邮件至我们的官方邮箱去进行申请。'
					},
					{
						title: 'Attuare Pty. Ltd.返佣多久返佣一次。',
						name: '2',
						textA: 'Attuare Pty. Ltd.的返佣时间是：MT4是平仓即返，MT5则是北京时间的每周六进行一次总返佣。'
					},
					{
						title: 'Attuare Pty. Ltd.有赠金或者其他活动吗？',
						name: '3',
						textA: '有的，Attuare Pty. Ltd.目前赠金活动虽然已结束，但其他客户馈赠活动一直在进行中。',
						textB: '活动不定期更新，具体以官网为准或咨询您的客户经理。'
					},
					{
						title: 'Attuare Pty. Ltd.是按点值返佣，还是每手都是一样的返佣？',
						name: '4',
						textA: 'Attuare Pty. Ltd.是按标准手来返佣的。 '
					},
					{
						title: '代理的客户可以转户吗？',
						name: '5',
						textA: '可以，如果需要转户那么被转交易账户的上级代理发送交易账户转归属的邮件至官方邮箱，进行申请。'
					},
				],
			};
		},
		methods: {
			handleChange(val) {
				console.log(val);
			}
		},
		components: {
			banner
		},
	}
</script>

<style scoped>
	.question-main :deep().el-tabs__content {
		padding: 50px;
	}

	.question-main :deep().el-collapse-item__header {
		font-size: 20px !important;
	}

	.question-main :deep().el-collapse {
		border-top: 1px solid #9B9999;
		border-bottom: 2px solid #9B9999;
	}

	.question-main:deep().el-collapse-item__header {
		height: 80px;
	}

	.question-main:deep().el-collapse-item__content {
		font-size: 16px !important;
		color: #9B9999 !important;
	}

	.question-main:deep().el-tabs__item {
		font-size: 18px;
	}

	.question-main {
		width: 80%;
		max-width: 1400px;
		margin: 50px auto;
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

	@media screen and (max-width: 1200px) {
		.fourth-big {
			font-size: 25px;
			line-height: 60px;
		}
	}

	@media screen and (max-width: 800px) {
		body {
			font-size: 13px;
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
