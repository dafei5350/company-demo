<template>
	<banner :bannerList="bannera"></banner>
</template>

<script>
	import banner from '@/components/banner.vue'
	export default {
		data() {
			return {
				bannera: [{
					imga: 'src/assets/index/bg-download.jpg',
					title: '市场快报',
					main: ''
				}],
			}
		},
		components: {
			banner
		},
	}
</script>
