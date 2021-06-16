<template>
	<banner :bannerList="bannera"></banner>
	<el-tabs model-value="first" @tab-click="handleClick" stretch="true" class="question-main">
		<el-tab-pane :label="$t('about.aboutJYWT1261')" name="first">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseA" :key="item.name">
				<el-collapse-item :title="$t(item.title)" :name="item.name">
					<div>{{$t(item.textA)}}</div>
					<!-- <div>{{item.textB}}</div> -->
					<!-- <div>{{item.textC}}</div> -->
					<!-- <div>{{item.textD}}</div> -->
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane :label="$t('about.aboutSCWT1640')" name="second">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseB" :key="item.name">
				<el-collapse-item :title="$t(item.title)" :name="item.name">
					<div>{{$t(item.textA)}}</div>
					<!-- <div>{{item.textB}}</div> -->
					<!-- <div>{{item.textC}}</div> -->
					<!-- <div>{{item.textD}}</div> -->
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane :label="$t('about.aboutMPTWT424')" name="third">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseC" :key="item.name">
				<el-collapse-item :title="$t(item.title)" :name="item.name">
					<div>{{$t(item.textA)}}</div>
					<!-- <div>{{item.textB}}</div> -->
					<!-- <div>{{item.textC}}</div> -->
					<!-- <div>{{item.textD}}</div> -->
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane :label="$t('about.aboutKHWT1293')" name="fourth">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseD" :key="item.name">
				<el-collapse-item :title="$t(item.title)" :name="item.name">
					<div>{{$t(item.textA)}}</div>
					<!-- <div>{{item.textB}}</div> -->
					<!-- <div>{{item.textC}}</div> -->
					<!-- <div>{{item.textD}}</div> -->
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane :label="$t('about.aboutCRJWT212')" name="fifth">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseE" :key="item.name">
				<el-collapse-item :title="$t(item.title)" :name="item.name">
					<div>{{$t(item.textA)}}</div>
					<!-- <div>{{item.textB}}</div> -->
					<!-- <div>{{item.textC}}</div> -->
					<!-- <div>{{item.textD}}</div> -->
					<!-- <div>{{item.textE}}</div> -->
					<!-- <div>{{item.textF}}</div> -->
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane :label="$t('about.aboutJYDC1680')" name="sixth">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseF" :key="item.name">
				<el-collapse-item :title="$t(item.title)" :name="item.name">
					<div>{{$t(item.textA)}}</div>
					<!-- <div>{{item.textB}}</div> -->
					<!-- <div>{{item.textC}}</div> -->
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane :label="$t('about.aboutZZFW1392')" name="seventh">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseG" :key="item.name">
				<el-collapse-item :title="$t(item.title)" :name="item.name">
					<div>{{$t(item.textA)}}</div>
					<!-- <div>{{item.textB}}</div> -->
					<!-- <div>{{item.textC}}</div> -->
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		<el-tab-pane :label="$t('about.aboutJYZH2055')" name="eighth">
			<el-collapse @change="handleChange" style="border-top-width: 0px;" v-for="item in collapseH" :key="item.name">
				<el-collapse-item :title="$t(item.title)" :name="item.name">
					<div>{{$t(item.textA)}}</div>
					<!-- <div>{{item.textB}}</div> -->
					<!-- <div>{{item.textC}}</div> -->
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
	</el-tabs>
	<div class="fourth">
		<div class="fourth-img">
			<img src="../assets/index/dq.png">
		</div>
		<div class="fourth-big">
			<div class="fourth-text">
        {{ $t('about.aboutTYSCBDZD') }}
			</div>
			<div class="fourth-text">
        {{ $t('about.aboutBCGRHJYJ') }}
			</div>
			<a href="" class="button-a">
				<div class="fourth-button hvr-sweep-to-right">
          {{ $t('about.aboutLJKT6148') }}
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
					title: 'about.aboutCJWTJD24',
					main: 'about.aboutAPLWNDLW',
				}, ],
				collapseA: [{
						title: 'about.aboutZXKSZHDZ',
						name: '1',
						textA: 'about.aboutKSAPLDMZ',
					},
					{
						title: 'about.aboutAPLTGSMY',
						name: '2',
						textA: 'about.aboutAPLTGLHD',
					},
					{
						title: 'about.aboutAPLTGPXM',
						name: '3',
						textA: 'about.aboutAPLYQMWH',
					},
					{
						title: 'about.aboutAPLTGDSZ',
						name: '4',
						textA: 'about.aboutAPLGTGSB',
					},
					{
						title: 'about.aboutAPLDMLMS',
						name: '5',
						textA: 'about.aboutWHYSSWJC',
					},
					{
						title: 'about.aboutAPLZDKHZ',
						name: '6',
						textA: 'about.aboutZDKHDZJK',
					},
					{
						title: 'about.aboutZNMZLKAP',
						name: '7',
						textA: 'about.aboutWMPTSYSZ',
						textB: 'about.aboutJTZHXQQZ',
					},
					{
						title: 'about.aboutNLKYZKDA',
						name: '8',
						textA: 'about.aboutKHDLZSZH',
					},
					{
						title: 'about.aboutMNZHHZSZ',
						name: '9',
						textA: 'about.aboutMNZHHZSZ',
					},
					{
						title: 'about.aboutNMPTHBHH',
						name: '10',
						textA: 'about.aboutSXZDHDYY',
					},
					{
						title: 'about.aboutAPLYHDMH',
						name: '11',
						textA: 'about.aboutAPLSWJYY',
					},
					{
						title: 'about.aboutWNJYDZDJ',
						name: '12',
						textA: 'about.aboutAPLZDJYS',
					},
					{
						title: 'about.aboutAPLZDRJS',
						name: '13',
						textA: 'about.aboutZDRJMJAP',
					},
					{
						title: 'about.aboutSMSSCBC2',
						name: '14',
						textA: 'about.aboutSCYBSZTZ',
					},





				],
				collapseB: [{
						title: 'about.aboutSMSWH278',
						name: '1',
						textA: 'about.aboutWHJYSQQZ',
					},
					{
						title: 'about.aboutWGZYTGWH',
						name: '2',
						textA: 'about.aboutZQDFFYBJ',
					},
					{
						title: 'about.aboutWHSYGGPD',
						name: '3',
						textA: 'about.aboutWHBRWSDQ',
					},
					{
						title: 'about.aboutSSWHSCDZ',
						name: '4',
						textA: 'about.aboutWHSCDCYZ',
					},
					{
						title: 'about.aboutNXHBDSZC',
						name: '5',
						textA: 'about.aboutLDXZQDHB',
					},
					{
						title: 'about.aboutZWHSCJYX',
						name: '6',
						textA: 'about.aboutBBSZAPLT',
					},
					{
						title: 'about.aboutZWHJYZWG',
						name: '7',
						textA: 'about.aboutZWHJYZYH',
					},
					{
						title: 'about.aboutQZPCHZJB',
						name: '8',
						textA: 'about.aboutZWAPLDKH',
						textB: 'about.aboutRGNDZHJZ',
						textC: 'about.aboutRGNDZHJZ',
						textD: 'about.aboutXYLJZJBZ',
					}
				],


				collapseC: [{
						title: 'about.aboutAPLCMYWH',
						name: '1',
						textA: 'about.aboutAPLTGLZJ',
					},
					{
						title: 'about.aboutAPLZNLXG',
						name: '2',
						textA: 'about.aboutAPLKHKYZ',
					},
					{
						title: 'about.aboutWGRHTGWL',
						name: '3',
						textA: 'about.aboutRHKHDKYT',
					},
					{
						title: 'about.aboutWNZMSZGD',
						name: '4',
						textA: 'about.aboutMYXSZGDG',
					},
					{
						title: 'about.aboutMYZZZSDD',
						name: '5',
						textA: 'about.aboutMYXNSZZZ',
					}
				],
				collapseD: [{
						title: 'about.aboutWGRHCNKS',
						name: '1',
						textA: 'about.aboutKSAPLDZS',
					},
					{
						title: 'about.aboutAPLKHXYN',
						name: '2',
						textA: 'about.aboutAPLKHXYY',
					},

					{
						title: 'about.aboutAPLKHSJY',
						name: '3',
						textA: 'about.aboutSDWZCLHX',
					},
				],

				collapseE: [{
						title: 'about.aboutWGRHRJDW',
						name: '1',
						textA: 'about.aboutAPLRJLCR',
						textB: 'about.aboutDLAPLJYH',
						textC: 'about.aboutZDZSJCRJ',
						textD: 'about.aboutDJRJ1583',
						textE: 'about.aboutZDZSJRJS',
						textF: 'about.aboutTXHXYRJD',
					},
					{
						title: 'about.aboutRJXYDZSJ',
						name: '2',
						textA: 'about.aboutYLRJJHZT',
					},
					{
						title: 'about.aboutWGRHQK20',
						name: '3',
						textA: 'about.aboutNZXYTGDL',
					},
					{
						title: 'about.aboutAPLCRJZN',
						name: '4',
						textA: 'about.aboutMGKHDYSY',
					},
					{
						title: 'about.aboutAPLCRJKY',
						name: '5',
						textA: 'about.aboutKYSYYLCR',
					},
					{
						title: 'about.aboutAPLYLRJD',
						name: '6',
						textA: 'about.aboutHLYYLJDJ',
					},
					{
						title: 'about.aboutAPLKYJSD',
						name: '7',
						textA: 'about.aboutAPLBJSDS',
					},
				],
				collapseF: [{
					title: 'about.aboutDCSSMYS1',
					name: '1',
					textA: 'about.aboutZWHJYZNH',
				}],
				collapseG: [{
						title: 'about.aboutAPLYMYKH',
						name: '1',
						textA: 'about.aboutAPLMYGKH',
					},
					{
						title: 'about.aboutAPLYMYZX',
						name: '2',
						textA: 'about.aboutAPLGWYZX',
						textB: 'about.aboutAPLKFZXD',
					},
				],
				collapseH: [{
						title: 'about.aboutAPLYGRKY',
						name: '1',
						textA: 'about.aboutAPLYGYXK',
					},
					{
						title: 'about.aboutAPLFYDJF',
						name: '2',
						textA: 'about.aboutAPLDFYSJ',
					},
					{
						title: 'about.aboutAPLYZJHZ',
						name: '3',
						textA: 'about.aboutYDAPLMQZ',
						textB: 'about.aboutHDBDQGXJ',
					},
					{
						title: 'about.aboutAPLSADZF',
						name: '4',
						textA: 'about.aboutAPLSABZS',
					},
					{
						title: 'about.aboutDLDKHKYZ',
						name: '5',
						textA: 'about.aboutKYRGXYZH',
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
		line-height: normal;
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

	@media screen and (max-width: 768px) {
		body {
			font-size: 13px;
		}
		.question-main :deep().el-tabs__content {
			padding: 0px;
		}
		.question-main :deep().el-collapse-item__header {
			font-size: 14px !important;
			line-height: 18px;
		}
		.question-main:deep().el-collapse-item__content {
			font-size: 14px !important;
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
	}
</style>
