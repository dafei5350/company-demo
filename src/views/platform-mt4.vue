<template>
	<banner :bannerList="bannera"></banner>
  <div class="financial-top" style="margin-bottom: 0;" data-aos="fade-up">
    <div class="financial-title">{{ $t('plat.platZMBM2109') }}</div>
    <div class="financial-main"><p>{{ $t('plat.platAPLDZMBM') }}</p></div>
  </div>
  <div class="button-big" data-aos="fade-up"><a href="" class="button-a">
    <div class="fourth-button hvr-sweep-to-right">{{ $t('plat.platLJXZ1518') }}</div>
  </a><a href="" class="button-a">
    <div class="fourth-button hvr-sweep-to-right">{{ $t('plat.platKHTY1108') }}</div>
  </a></div>
  <div class="financial-top">
    <div class="financial-title">{{ $t('plat.platZMBMYS16') }}</div>
  </div>

	<el-row class="edge-big">
		<el-carousel indicator-position="outside" data-aos="fade-up">
			<el-carousel-item v-for="item in edgeMsg" :key="item">
				<div>
					<div class="edge-img">
						<img :src="item.src">
					</div>
					<div class="edge-bot">
						<div class="edge-bot-big">
							<div class="edge-bot-title">
								{{$t(item.titleA)}}
							</div>
							<div class="edge-bot-main">
								{{$t(item.mainA)}}
							</div>
						</div>
						<div class="edge-bot-big side-border">
							<div class="edge-bot-title">
								{{$t(item.titleB)}}
							</div>
							<div class="edge-bot-main">
								{{$t(item.mainB)}}
							</div>
						</div>
						<div class="edge-bot-big">
							<div class="edge-bot-title">
								{{$t(item.titleC)}}
							</div>
							<div class="edge-bot-main">
								{{$t(item.mainC)}}
							</div>
						</div>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</el-row>
  <div class="financial-top" style="margin-bottom: 0;" data-aos="fade-up">
    <div class="financial-title">{{ $t('plat.platYDBM1547') }}</div>
    <div class="financial-main"><p>{{ $t('plat.platCLZMBPTW') }}</p></div>
  </div>
  <div class="buttonb-big"><a href="">
    <div class="button-b" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
        src="../assets/index/IOS_Download-en.png"></div>
  </a><a href="">
    <div class="button-b" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
        src="../assets/index/anzou.jpg"></div>
  </a></div>
  <div class="financial-top" data-aos="fade-up">
    <div class="financial-title">{{ $t('plat.platYDJYPTTD') }}</div>
  </div>

	<el-row class="trait-big" data-aos="fade-up">
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in trait">
				<div class="trait-img">
					<img :src="item.src" >
				</div>
				<div class="trait-text">
					<div class="trait-title">
						{{$t(item.title)}}
					</div>
					<div class="trait-main">
						{{$t(item.mainA)}}
					</div>
					<div class="trait-main">
						{{$t(item.mainB)}}
					</div>
					<div class="trait-main">
						{{$t(item.mainC)}}
					</div>
					<div class="trait-main">
						{{$t(item.mainD)}}
					</div>
					<div class="trait-main">
						{{$t(item.mainE)}}
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</el-row>
  <div class="financial-top" style="margin-bottom: 0;" data-aos="fade-up">
    <div class="financial-title">{{ $t('plat.platDNDM2024') }}</div>
    <div class="financial-main"><p>{{ $t('plat.platMJYPTSSJ') }}</p></div>
  </div>
  <div class="button-big" data-aos="fade-up"><a href="" class="button-a">
    <div class="fourth-button hvr-sweep-to-right">{{ $t('plat.platLJXZ4186') }}</div>
  </a></div>
  <div class="financial-top" data-aos="fade-up">
    <div class="financial-title">{{ $t('plat.platWYJYPTTD') }}</div>
  </div>

	<el-row class="edge-big" data-aos="fade-up">
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in edgeMsgB" :key="item">
				<div>
					<div class="edge-img">
						<img :src="item.src">
					</div>
					<div class="edge-bot">
						<div class="edge-bot-big">
							<div class="edge-bot-title">
								{{$t(item.titleA)}}
							</div>
							<div class="edge-bot-main">
								{{$t(item.mainA)}}
							</div>
						</div>
						<div class="edge-bot-big side-border">
							<div class="edge-bot-title">
								{{$t(item.titleB)}}
							</div>
							<div class="edge-bot-main">
								{{$t(item.mainB)}}
							</div>
						</div>
						<div class="edge-bot-big">
							<div class="edge-bot-title">
								{{$t(item.titleC)}}
							</div>
							<div class="edge-bot-main">
								{{$t(item.mainC)}}
							</div>
						</div>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</el-row>
	<div class="fourth">
		<div class="fourth-img">
			<img src="../assets/index/dq.png">
		</div>
    <div class="fourth-big">
      <div class="fourth-text">{{ $t('plat.platTYSCBDZD') }}</div>
      <div class="fourth-text">{{ $t('plat.platBCGRHJYJ') }}</div>
      <a href="" class="button-a">
        <div class="fourth-button hvr-sweep-to-right">{{ $t('plat.platLJKT1584') }}</div>
      </a></div>

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
					main: 'plat.platAPLSYMJY',
				}, ],
				edgeMsg: [{
						src: 'src/assets/index/zh_mt4_pc1.jpg',
						titleA: 'plat.platGXKKDZXS',
						mainA: 'plat.platAPLFWQLJ',
						titleB: 'plat.platJMZGSSBJ',
						mainB: 'plat.platSYJYDDDN',
						titleC: 'plat.platZCYJXDGN',
						mainC: 'plat.platYJGLCQSW',
					},
					{
						src: 'src/assets/index/zh_mt4_pc2.jpg',
						titleA: 'plat.platSYDDYSMS',
						mainA: 'plat.platRKHDXDFS',
						titleB: 'plat.platZDJYS174',
						mainB: 'plat.platZXJYYBZS',
						titleC: 'plat.platKZXBJHSZ',
						mainC: 'plat.platTSYGJHSX',
					},
					{
						src: 'src/assets/index/zh_mt4_pc3.jpg',
						titleA: '',
						mainA: '',
						titleB: 'plat.platMFDDJZJS',
						mainB: 'plat.platZBAZLXFW',
						titleC: '',
						mainC: ''
					}
				],
				edgeMsgB: [{
						src: 'src/assets/index/zh_mt4_web1.jpg',
						titleA: 'plat.platSYYRHCZX',
						mainA: 'plat.platBHPDWYDW',
						titleB: 'plat.platWXAZRJ15',
						mainB: 'plat.platZXDKWYLJ',
						titleC: 'plat.platGDLLQJKD',
						mainC: 'plat.platZCGGIHHH',
					},
					{
						src: 'src/assets/index/zh_mt4_web2.jpg',
						titleA: 'plat.platYZJSZBFX',
						mainA: 'plat.platZBAZLXFW',
						titleB: 'plat.platGFDFXGJH',
						mainB: 'plat.platZHXGJGJY',
						titleC: 'plat.platKZKJYJL1',
						mainC: 'plat.platSYXDJLJY',
					},
					{
						src: 'src/assets/index/zh_mt4_web3.jpg',
						titleA: 'plat.platYJGLJYZH',
						mainA: 'plat.platYYYJKCPC',
						titleB: 'plat.platTBXSNDDT',
						mainB: 'plat.platJYZDDDSZ',
						titleC: 'plat.platJSJY9118',
						mainC: 'plat.platZXDDGCZD',
					}
				],
      trait: [
					{
						src: 'src/assets/index/zh_mt4_mobile1.jpg',
						title: 'plat.platCKJY1779',
						mainA: 'plat.platMFWQJKKY',
						mainB: 'plat.platQSSDZYZS',
						mainC: 'plat.platDZHQSQH2',
						mainD: '',
						mainE: '',
					},
					{
						src: 'src/assets/index/zh_mt4_mobile2.jpg',
						title: 'plat.platJHSTB830',
						mainA: 'plat.platKYJYZJBX',
						mainB: 'plat.platSSHDTB20',
						mainC: 'plat.platDZTBZL94',
						mainD: 'plat.platDCSJJG35',
						mainE: 'plat.platHGZHXGJJ',
					},
					{
						src: 'src/assets/index/zh_mt4_mobile3.jpg',
						title: 'plat.platZHGL1076',
						mainA: 'plat.platGLCXYXNJ',
						mainB: 'plat.platZHZJJJYX',
						mainC: 'plat.platYPDJYPTZ',
						mainD: '',
						mainE: '',
					},
					{
						src: 'src/assets/index/zh_mt4_mobile4.jpg',
						title: 'plat.platJYLSCX15',
						mainA: 'plat.platZMPTZDZD',
						mainB: 'plat.platKYJCXYPC',
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
		width: 410px;
		margin: 0 auto;
	}

	.buttonb-big {
		display: flex;
		width: 500px;
		margin: 0 auto;
		justify-content: space-around;
	}

	.minbar-button {
		display: inline-block;
		width: 100px;
		margin-right: 20px;
		height: 30px;
		background: #013B81;
		border-radius:10px;
		overflow: hidden;
		box-shadow: 0px 2px 4px rgb(0 0 0 / 80%), 0px 0px 20px rgb(0 0 0 / 10%) inset;
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
		font-size: 30px;
		width: 510px;
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
		height: 800px !important;
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
	@media screen and (max-width: 768px) {
		.edge-bot{
			flex-direction: column
		}
		.edge-bot-big{
			width: 100%;
			padding: 10px;
		}
		.side-border{
			border-left: 0;
			border-right: 0;
			border-top: 1px solid #F5F5F5;
			border-bottom: 1px solid #F5F5F5;
		}
		.edge-big:deep().el-carousel__container{
			height: 600px;
		}
		.buttonb-big{
			width: 100%;
			flex-wrap: wrap
		}
		.trait-img{
			width: 100%;
			display: flex;
		}
		.trait-img img{
			margin: 0 auto;
		}
		.trait-text{
			width: 90%;
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
			width: auto;
		}
		.fourth-button{
			margin: 0 auto;
		}
		.fourth-text{
			width: 200px;
			margin: 0 auto;
			text-align: left;
		}
	}
</style>
