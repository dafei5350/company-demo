<template>
<div class="common-layout">
  <el-container direction="vertical">
    <el-header>Header</el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
