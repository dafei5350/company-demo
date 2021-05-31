<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <img src="@/assets/logo.png" class="logo" alt="logo" srcset="" />
    <el-submenu index="2">
      <template #title>关于Attuare Pty.Ltd</template>
      <el-menu-item index="2-1">关于Attuare Pty.Ltd</el-menu-item>
      <el-menu-item index="2-2">常见问题解答</el-menu-item>
      <el-menu-item index="2-3">监督信息</el-menu-item>
      <el-menu-item index="2-3">联系我们</el-menu-item>
      <el-menu-item index="2-3">公告</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template #title>交易产品</template>
      <el-menu-item index="3-1">外汇</el-menu-item>
      <el-menu-item index="3-2">贵金属</el-menu-item>
      <el-menu-item index="3-3">股票指数</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template #title>交易平台</template>
      <el-menu-item index="4-1">MT4</el-menu-item>
      <el-menu-item index="4-2">MT5</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template #title>交易平台</template>
      <el-menu-item index="5-1">MT4</el-menu-item>
      <el-menu-item index="5-2">MT5</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template #title>交易平台</template>
      <el-menu-item index="6-1">MT4</el-menu-item>
      <el-menu-item index="6-2">MT5</el-menu-item>
    </el-submenu>
  </el-menu>
</template>  

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  name: "NavBar",
  setup() {
    const router = useRouter();
    const pathMap = {
      index: "首页",
      add: "添加商品",
    };
    const state = reactive({
      name: "首页",
    });
    router.afterEach((to) => {
      console.log("to", to);
      // to 能获取到路由相关信息。
      const { id } = to.query;
      state.name = pathMap[to.name];
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped>
.el-menu-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95px;
}
.el-menu-demo .logo {
  height: 80px;
  width: 80px;
}
</style>