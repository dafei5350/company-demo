<template>
<div class="layout">

  <el-container direction="vertical">
    <el-header>
         <NavBar></NavBar> 
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>

</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
.el-header{
  padding: 0 !important;
  height: 95px !important;
}
.el-main{
  padding: 0 !important;
}
</style>
