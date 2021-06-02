<template>
	<div class="title">{{tabTitle}}</div>
	<div class="picture-demo">
		<el-tabs model-value="first" stretch @tab-click="handleClick" class="tabtop">
			<el-tab-pane v-for="tabtop in tablist" :label="tabtop.label" :name="tabtop.name">
				<img :src="tabtop.imga">
				<div class="picture-text">
					{{tabtop.text}}
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabTitle: '',
				tablist: ''
			}
		},
		props: [
			'tabTitle',
			'tablist'
		]
	}
</script>

<style scoped>
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
</style>
