<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <router-link to="/">
      <img src="../assets/logo.png" class="logo" alt="logo" srcset="" />
    </router-link>
    <el-submenu index="2">
      <template #title>关于Attuare Pty.Ltd</template>
      <el-menu-item index="2-1" route="/about-me">关于Attuare Pty.Ltd</el-menu-item>
      <el-menu-item index="2-2" route="/about-question">常见问题解答</el-menu-item>
      <el-menu-item index="2-3" route="/about-supervise">监督信息</el-menu-item>
      <el-menu-item index="2-3" route="/about-contact">联系我们</el-menu-item>
      <el-menu-item index="2-3" route="/about-notice">公告</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template #title>交易产品</template>
      <el-menu-item index="3-1" route="/product-forex">外汇</el-menu-item>
      <el-menu-item index="3-2" route="/product-index">贵金属</el-menu-item>
      <el-menu-item index="3-3" route="/product-metal">股票指数</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template #title>交易平台</template>
      <el-menu-item index="4-1" route="/platform-mt4">MT4</el-menu-item>
      <el-menu-item index="4-2" route="/platform-mt5">MT5</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template #title>新闻动态</template>
      <el-menu-item index="5-1" route="/news-analysis">市场分析</el-menu-item>
      <el-menu-item index="5-2" route="/news-letters">市场快报</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template #title>合作伙伴</template>
      <el-menu-item index="6-1" route="/coop-ib">IB代理计划</el-menu-item>
      <el-menu-item index="6-2" route="/coop-intem">区域代理</el-menu-item>
	  <el-menu-item index="6-3" route="/coop-agent">白标合作</el-menu-item>
    </el-submenu>
    <el-submenu index="9">
      <template #title>English</template>
      <el-menu-item index="9-1">简体中文</el-menu-item>
      <el-menu-item index="9-2">繁体中文</el-menu-item>
      <el-menu-item index="9-2">English</el-menu-item>
      <el-menu-item index="9-2">阿拉伯语</el-menu-item>
      <el-menu-item index="9-2">日语</el-menu-item>
    </el-submenu>
    <el-menu-item index="7"><el-button class="navbtn">登入</el-button></el-menu-item>
    <el-menu-item index="8"><el-button class="navbtn" type="primary">注册账户</el-button></el-menu-item>
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
console.log(window.localStorage.setItem);
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
.navbtn{
  width: 100px;
}
.router{
  text-decoration: none;
  color: #4a4a4a;
  border-bottom: 1px solid #d9d9d9;
  margin-top: 3px;
  font-weight: 600;
}
@media screen and (max-width: 768px){
  .el-menu-demo{
    display: none;
  }
}
@media screen and (min-width: 1200px){

}
</style>
