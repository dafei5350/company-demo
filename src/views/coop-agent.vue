<template>
	<banner :bannerList="bannera"></banner>
	<div class="quick">
		<div class="quick-big">
			<div class="quick-text">
				<div class="quick-title">
					后台支持
				</div>
				<div class="quick-main">
					<p>Attuare Pty. Ltd.提供后台的技术和清算支持，我们不会参与和客户的直接沟通与服务。也就是说，客户从开户前到开户后的在线服务，都是由合作伙伴自己掌控。</p>
					<p>我们专业的机构客户经理会在实施的过程中全程提供1对1服务，确保所有的平台设置都符合您的要求。在白标方案完成后，还会在业务拓展方面为您提供支持，包括市场推广，营销培训和客服培训。</p>
					<p>我们致力于为合作商提供最有效的商业模式，使您的公司能够快速发展，提高收益率，从而实现利润最大化。</p>
				</div>
			</div>
			<div class="quick-img">
				<img src="../assets/index/white1.png">
			</div>
		</div>
	</div>
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
				tabTitlea: '白标合作优势',
				tablista: [{
						label: '低点差，高流通性',
						name: 'first',
						imga: 'src/assets/index/white2.png',
						text: '接通16家流通性提供商，确保提供最低的点差报价给到投资者。',
					},
					{
						label: '完善便捷的客户管理系统',
						imga: 'src/assets/index/white2.png',
						name: 'second',
						text: '能够快速拥有自己的MT4交易平台和MT4产品，并且能够以机构自己的经纪公司品牌进行业务拓展。',
					},
					{
						label: '持久性高额回报',
						name: 'third',
						imga: 'src/assets/index/white2.png',
						text: '基于交易数量的佣金收取，名下客户交易数量越多，佣金越丰厚。',
					},
					{
						label: '强大的后盾，专业的培训',
						name: 'fourth',
						imga: 'src/assets/index/white2.png',
						text: '高端后台计划，为您定制专属的投资计划和返佣体系，确保您的事业开向蓝海。',
					},
				],
				bannera: [
					{
						imga:'src/assets/index/bg-download.jpg',
						title:'白标合作计划',
						main:'白标服务也称为贴牌服务。Attuare Pty. Ltd.白标计划有多种类多层次的设计，以配合客户开办或设立经纪公司，并帮助您把业务提升到一个新的水平。白标合作伙伴计划是一个总控解决方案，从而您将可以连接到我们市场领先的流动性和技术。同时，您将保存自己公司的品牌延续性和完整性，不需要担心客户的流失。这样，从第一天起您就可以拥有自己的外汇公司品牌。'
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
		padding: 20px 130px;
		color: #9B9999;
	}
	
	@media screen and (max-width: 1300px) {
		.quick-title{
			padding-left: 110px;
		}
		.quick-main{
			padding: 20px 110px;
		}
	}
	
	@media screen and (max-width: 1200px) {
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

	}

	@media screen and (max-width: 768px) {
		body {
			font-size: 13px;
		}
		.el-tabs__item {
			font-size: 14px !important;
			line-height: 20px !important;
			height: 20px !important;
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
