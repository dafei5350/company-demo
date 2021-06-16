<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    unique-opened= true
    @select="handleSelect"
    router>
    <div class="mobile">
      <router-link to="/">
        <img src="../assets/logo.png" class="logo" alt="logo" srcset="" />
      </router-link>
      <i class="el-icon-menu noPcShow icon-menu" @click="navShow"></i>
    </div>
      <el-submenu index="2" :class="{ isShow: isNavShow}">
        <template #title>{{$t('nav.navGYAP1991')}}</template>
        <el-menu-item index="2-1" route="/about-me">{{$t('nav.nav_GYAP1813')}}</el-menu-item>
        <el-menu-item index="2-2" route="/about-question">{{ $t('nav.navCJWTJD21') }}</el-menu-item>
        <el-menu-item index="2-3" route="/about-supervise">{{ $t('nav.navJDXX1507') }}</el-menu-item>
        <el-menu-item index="2-3" route="/about-contact">{{ $t('nav.navLXWM6305') }}</el-menu-item>
        <el-menu-item index="2-3" route="/about-notice">{{ $t('nav.navGG177606') }}</el-menu-item>
      </el-submenu>
    <el-submenu index="3" :class="{ isShow: isNavShow}">
      <template #title>{{ $t('nav.navJYCP1123') }}</template>
      <el-menu-item index="3-1" route="/product-forex">{{ $t('nav.navWH160310') }}</el-menu-item>
      <el-menu-item index="3-2" route="/product-index">{{ $t('nav.navGJS85108') }}</el-menu-item>
      <el-menu-item index="3-3" route="/product-metal">{{ $t('nav.navGPZS2050') }}</el-menu-item>
    </el-submenu>
    <el-submenu index="4" :class="{ isShow: isNavShow}">
      <template #title>{{ $t('nav.navJYPT8929') }}</template>
      <el-menu-item index="4-1" route="/platform-mt4">{{ $t('nav.navM2034109') }}</el-menu-item>
      <el-menu-item index="4-2" route="/platform-mt5">{{ $t('nav.navM4915488') }}</el-menu-item>
    </el-submenu>
    <el-submenu index="5" :class="{ isShow: isNavShow}">
      <template #title>{{ $t('nav.navXWDT4981') }}</template>
      <el-menu-item index="5-1" route="/news-analysis">{{ $t('nav.navSCFX1879') }}</el-menu-item>
      <el-menu-item index="5-2" route="/news-letters">{{ $t('nav.navSCKB1871') }}</el-menu-item>
    </el-submenu>
    <el-submenu index="6" :class="{ isShow: isNavShow}">
      <template #title>{{ $t('nav.navT1930177') }}</template>
      <el-menu-item index="6-1" route="/coop-ib">{{ $t('nav.navIDLJH488') }}</el-menu-item>
      <el-menu-item index="6-2" route="/coop-intem">{{ $t('nav.navQYDL4988') }}</el-menu-item>
	  <el-menu-item index="6-3" route="/coop-agent">{{ $t('nav.navGJHZ3022') }}</el-menu-item>
    </el-submenu>
    <el-submenu index="9" :class="{ isShow: isNavShow}">
      <template #title>{{ lang }}</template>
      <el-menu-item @click="changeCn">简体中文</el-menu-item>
      <el-menu-item @click="changeTw">繁体中文</el-menu-item>
      <el-menu-item @click="changeEn">English</el-menu-item>
      <el-menu-item @click="changeAr">بالعربية</el-menu-item>
      <el-menu-item @click="changeJa">日本語</el-menu-item>
    </el-submenu>
    <el-menu-item index="7" :class="{ isShow: isNavShow}"><el-button class="navbtn hvr-sweep-to-right"><router-link to="https://crm.attuarefx.com/">{{ $t('nav.navDR126636') }}</router-link></el-button></el-menu-item>
    <el-menu-item index="8" :class="{ isShow: isNavShow}"><el-button class="navbtn" type="primary hvr-sweep-to-right"><router-link to="https://crm.attuarefx.com/customer/registration"> {{ $t('nav.navZCZH1611') }}</router-link></el-button></el-menu-item>

  </el-menu>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "NavBar",
  data() {
    return {
      activeIndex: "1",
      lang: 'English',
      isNavShow: this.isMobile()
    };
  },
  methods: {
    changeEn() {
      this.$i18n.locale = 'en'
      this.lang = 'English'
    },
    changeCn() {
      this.$i18n.locale = 'zh-cn'
      this.lang = '简体中文'
    },
    changeTw() {
      this.$i18n.locale = 'tw'
      this.lang = '繁体中文'
    },
    changeJa() {
      this.$i18n.locale = 'ja'
      this.lang = '日本語'
    },
    changeAr() {
      this.$i18n.locale = 'ar'
      this.lang = 'بالعربية'
    },
    navShow() {
      this.isNavShow = !this.isNavShow
      console.log("111")
    },
    isMobile() {
      this.flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      if(this.flag === null) {
        return this.isNavShow = false;
      }else {
        return this.isNavShow = true;
      }
    }
  }
};
</script>
<style scoped>
.icon-menu{
 font-size: 25px;
}
.noPcShow{
  display: none;
}
.isShow{
  display: none;
}
.el-menu-demo {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 95px;
}
.el-menu-demo .logo {
  height: 80px;
  width: 80px;
}
.navbtn a{
	text-decoration: none;
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
  .mobile{
    width: 85%;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-menu-demo{
    flex-direction: column;
    height: auto;
  }
  .el-menu-demo .logo{
    height: 60px;
    width: 60px;
  }
  .noPcShow{
    display: block;
  }
  .el-menu-demo{
	  justify-content: flex-start;
  }
  .el-menu-demo .logo{
	  width: 75px;
	  height: 55px;
  }
}
@media screen and (min-width: 1200px){

}

</style>

