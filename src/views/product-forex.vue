<template>
  <!-- <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel> -->
  <div class="banner">
  	<div class="banner-img">
  		<img src="../assets/index/bg-download.jpg" >
  	</div>
	<div class="banner-text">
		<div class="banner-text-title">
			外汇
		</div>
		<div class="banner-text-main">
			外汇交易市场，也称为”Foreign exchange”或”FX”市场， 是世界上最大的金融市场，平均每天超过5万亿美元的资金在当中运转，相当于美国所有证券市场交易总和的30余倍。外汇交易市场比传统的股票、债券或者期货市场都要庞大许多，巨大的交易量使市场不易受某一银行或机构操控价格。通常用两种货币之间的兑换比例来表示。货币对里前面的货币是基础货币，后面的是对手货币。当你买卖货币对的时候，你是以基础货币为准。
		</div>
	</div>
  </div>
  <div class="title">外汇交易的优势</div>
  <div class="picture-demo">
		<el-tabs v-model="activeName" stretch @tab-click="handleClick">
			<el-tab-pane label="24小时市场" name="first">
				<img src="../assets/index/forex1.png" >
				<div class="picture-text">
					5天24小时不间断交易，投资者可随时随地参与到市场波动中。
				</div>
			</el-tab-pane>
			<el-tab-pane label="低成本交易" name="second">
				<img src="../assets/index/forex_slider2.jpg" >
				<div class="picture-text">
					Attuare Pty. Ltd.推出的stpECN账户外汇平均点差1.0个点，zeroECN和pureECN账户更是低至0.1-0.8点差加佣金模式，投资者可根据个人的投资情况选择相应账户类型并享受Attuare Pty. Ltd.提供的超低点差服务。
				</div>
			</el-tab-pane>
			<el-tab-pane label="上百种交易货币对" name="third">
				<img src="../assets/index/forex_slider3.jpg" >
				<div class="picture-text">
					可满足投资者交易需求，并根据各国货币涨跌情况进行24小时不间断交易。
				</div>
			</el-tab-pane>
			<el-tab-pane label="市场公开透明" name="fourth">
				<img src="../assets/index/forex_slider4.jpg" >
				<div class="picture-text">
					巨大的交易量使市场不易受某一银行或机构操控价格，一秒内下单，无重复报价现象。
				</div>
			</el-tab-pane>
			<el-tab-pane label="全球性交易" name="fifth">
				<img src="../assets/index/forex_slider5.jpg" >
				<div class="picture-text">
					各国货币受政策影响涨涨跌跌，投资者可根据Attuare Pty. Ltd.MT4账号进行全球性交易。
				</div>
			</el-tab-pane>
		</el-tabs>
  </div>
  
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
  	  <div class="thirdbar-big">
  		 <div class="thirdbar-text">
  			零点差交易
  		</div>
  		<div class="thirdbar-main">
  			Attuare Pty. Ltd.考虑到不同类型投资者的交易需求，除了原本的 stpECN 账户类型之外，全新上线了一种账户类型 zeroECN 和 pureECN 零点差交易账户。无论投资者开设任何一种交易类型的账户, Attuare Pty. Ltd.都会提供专业的统一标准的交易条件, 让您始终拥有最佳的交易体验。
  		</div>
  	  </div> 
  </div>
  <div class="fourth">
  	<img src="../assets/index/forex_top_banner1.jpg" >
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
  const ENV = import.meta.env
  export default {
	data() {
		return {
			activeName: 'second'
		};
    },
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		}
    },
    name: 'pro',
    setup(){
      console.log('ENV', ENV);
    },
  }
</script>



<style>
	body{
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
  
  .banner{
	  width: 100%;
	  position: relative;
  }
  .banner-img img{
	  max-width: 100%;
  }
  .banner-text {
	  position: absolute;
	  top:20%;
	  color: #FFFFFF;
	  width: 100%;
  }
  .banner-text-title{
	  text-align: center;
	  font-size: 1.75rem;
	  line-height: 5rem;
  }
  .banner-text-main{
	  line-height: 25px;
	  width: 800px;
	  margin: 0 auto;
	  text-align: left;
  }
  .title{
	  text-align: center;
	  width: 100%;
	  padding: 50px 0px 20px;
	  font-size: 25px;
  }
  .picture-demo{
	  width: 80vw;
	  max-width: 1200px;
	  margin: 0 auto;
	  position: relative;
  }
  .picture-demo img{
	  max-width: 100%;
  }
  .picture-text{
	  width: 80%;
	  max-width: 900px;
	  height: 90px;
	  padding-left:12%;
	  padding-right: 5%;
	  padding-top: 5%;
	  color: #9B9999;
	  background: #FFFFFF;
	  box-shadow: 5px 2px 10px 0 rgb(213 213 213 / 0.5);
	  position: absolute;
	  bottom: 0;
	  left: -5%;
	  margin: 10px;
  }
  .el-tabs__item{
	  font-size: 18px !important;
	  line-height: 80px !important;
	  height: 80px !important;
  }
  .el-tab-pane{
	  padding: 50px !important;
  }
  .minbar{
	  width: 100%;
	  background: #F5F5F5;
	  padding: 40px 0;
	  margin: 80px 0;
  }
  .minbar-big{
	  width: 600px;
	  margin: 0 auto;
  }
  .minbar-text{
	  display: inline-block;
	  font-size: 25px;
	  margin-right: 100px;
  }
  .minbar-button{
	  display: inline-block;
	  width: 100px;
	  height: 30px;
	  background: #013B81;
  }
  .button-a{
	  text-decoration: none;
	  color: #FFFFFF;
	  vertical-align: middle;
	  text-align: center;
	  width: 100%;
	  line-height: 30px;
	  font-size: 12px;
  }
  .thirdbar{
	  width: 100%;
	  background: #F5F5F5;
  }
  .thirdbar-big{
	  width: 800px;
	  margin: 0 auto;
	  padding: 40px 0;
  }
  .thirdbar-text{
	  font-size: 1.375rem;
	  text-align: center;
  }
  .thirdbar-main{
	  color: #9b9999;
	  line-height: 30px;
	  margin-top: 20px;
  }
  .fourth{
	  position: absolute;
  }
  .fourth img{
	  width: 100%;
  }
  .fourth-button{
  	  display: inline-block;
  	  width: 100px;
  	  height: 30px;
  	  background: #013B81;
  }
  .fourth-big{
	  position: absolute;
	  top: 20%;
	  right: 10%;
	  line-height: 80px;
	  font-size: 30px;
  }
  @media screen and (max-width: 1200px){
	 .fourth-big{
		 font-size: 25px;
		 line-height: 60px;
	 }
  }
  @media screen and (max-width: 1000px){
	body{
		font-size: 14px;
	}
  	.banner-text{
		top: 10%;
	}
	.banner-text-title{
		font-size: 1.5rem;
	}
	.banner-text-main{
		width: 600px;
	}
	.el-tabs__item{
		  font-size: 16px !important;
		  line-height: 80px !important;
		  height: 80px !important;
	}
  }
  @media screen and (max-width: 800px){
	  body{
		  font-size: 13px;
	  }
	  .banner-text{
	  	top: 5%;
	  }
	  .banner-text-title{
		  line-height: 3rem;
	  }
	  .thirdbar-big{
		  width: 600px;
	  }
	  .fourth-big{
	  	  font-size: 20px;
	  	  line-height: 40px;
	  }
  }
</style>