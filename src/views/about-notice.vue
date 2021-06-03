<template>
  <banner :bannerList="bannera"></banner>
</template>

<script>
	import banner from '@/components/banner.vue'
	export default {
		data() {
			return{
				bannera: [
					{
						imga:'src/assets/index/choose_acy_banner.jpg',
						title:'公告',
						main:''
					},
				],
			}
		},
		components: {
			banner
		},
	}
</script>