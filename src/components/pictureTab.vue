<template>
	<div class="title">{{$t(tabTitle)}}</div>
	<div class="picture-demo">
		<el-tabs model-value="first" stretch @tab-click="handleClick" class="tabtop">
				<el-tab-pane v-for="tabtop in tablist" :key="tabtop.label" :label="$t(tabtop.label)" :name="tabtop.name" id="tabimg">
					<img :src="tabtop.imga" data-aos="fade-up" v-if="show" :key="show">
					<div class="picture-text" data-aos="fade-up" data-aos-duration="1500" v-if="show" :key="show">
						{{$t(tabtop.text)}}
					</div>
				</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: 1,
				tabTitle: '',
				tablist: ''
			}
		},
		props: [
			'tabTitle',
			'tablist'
		],
		methods: {
			handleClick(tab,event) {
				this.show += 1
			}
		}
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
	.title {
		text-align: center;
		width: 100%;
		padding: 50px 0px 20px;
		font-size: 25px;
	}

	.picture-demo {
		width: 80vw;
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
	}

	.picture-demo img {
		max-width: 100%;
		width: 100%;
	}

	.picture-text {
		width: 80%;
		max-width: 900px;
		height: 90px;
		padding-left: 12%;
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

	.el-tabs__item {
		font-size: 18px !important;
		line-height: 80px !important;
		height: 80px !important;
	}

	.el-tab-pane {
		padding: 50px !important;
	}
	@media screen and (max-width: 768px){
		.title{
			font-size: 20px;
		}
		.el-tab-pane {
			padding: 0px !important;
		}
		.picture-text {
			width: 100%;
			position: initial;
			padding: 0px;
			margin: 0;
		}
	}
</style>
