<template>
<div class="layout">

  <el-container direction="vertical">
    <el-header>
      <NavBar></NavBar> 
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>

</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
body {
  margin: 0 !important;
}
.el-header{
  padding: 0 !important;
  height: 95px !important;
}
.el-main{
  padding: 0 !important;
}
.el-footer{
  padding: 0 !important;
}
.clearA{
  text-decoration: none;
}
</style>
