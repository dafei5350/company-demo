<template>
<div class="layout">
  <NavBar></NavBar> 
  <el-container direction="vertical">
    <el-header>
       
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
  height: 80px;
}
</style>
