<template>
  <footer class="footer">
    <img class="bg" src="../assets/footerBg.jpg" alt="" srcset="">
    <div class="block">
      <div class="logo"><img src="../assets/logo.png" alt="" srcset=""></div>
      <div class="items">
        <div class="title">{{ $t('footer.footGYWM1122') }}</div>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footGYWM3608') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footJGXX1526') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footCJWTJD20') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footGG140753') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footLXWM1715') }}</p></router-link>
      </div>
      <div class="items">
        <div class="title">{{ $t('footer.footJYCP4762') }}</div>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footWH167578') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footGJS78999') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footGPZS2239') }}</p></router-link>
      </div>
      <div class="items">
        <div class="title">{{ $t('footer.footJYPT3782') }}</div>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footM4157563') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footM2086225') }}</p></router-link>
      </div>
      <div class="items">
        <div class="title">{{ $t('footer.footXWDT8896') }}</div>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footSCFX9623') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footSCKB1672') }}</p></router-link>
      </div>
      <div class="items">
        <div class="title">{{ $t('footer.footHZHB2122') }}</div>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footIDLJH153') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footQYDL8066') }}</p></router-link>
        <router-link to="/" class="clearA"><p>{{ $t('footer.footGJHZ9022') }}</p></router-link>
      </div>
    </div>
    <div class="tips">{{ $t('footer.footFXTSWHJQ') }}</div>
  </footer>
</template>



<style scoped>
.clearA {
  color: #F5F5F5;
}

.footer {
  padding: 0px !important;
  width: 100%;
  height: 520px;
  position: relative;
  display: flex;
  justify-content: center;
}

.footer .bg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.footer .block {
  width: 80%;
  color: #fff;
  position: absolute;
  top: 15%;
  display: flex;
  justify-content: space-around;
}

.footer .block .items .title {
  margin-bottom: 50px;
}

.footer .block .logo img {
  width: 120px;
  height: 100px;
}

.footer .tips {
  font-size: 12px;
  color: #888;
  font-weight: 300;
  width: 75%;
  position: absolute;
  bottom: 20px;
}

@media screen and (max-width: 768px) {
  .footer .block {
    flex-direction: column;
    align-items: center;
  }
  .footer .block .logo img{
    width: 160px;
    height: 140px;
  }
  .footer .block .items{
    display: none;
  }
}

@media screen and (min-width: 1200px) {

}
</style>
