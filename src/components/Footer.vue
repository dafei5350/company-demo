<template>
  <footer class="footer">
    <img class="bg" src="../assets/footerBg.jpg" alt="尾部背景图片" srcset="">
    <div class="block">
      <div class="logo">
        <img src="../assets/logo.png" alt="" srcset="">
      </div>
      <div class="items">
        <div class="title">关于我们</div>
        <router-link to="/" class="clearA">
          <p>关于我们</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>监管信息</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>常见问题解答</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>公告</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>联系我们</p>
        </router-link>
      </div>
      <div class="items">
        <div class="title">交易产品</div>
        <router-link to="/" class="clearA">
          <p>外汇</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>贵金属</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>股票指数</p>
        </router-link>
      </div>
      <div class="items">
        <div class="title">交易平台</div>
        <router-link to="/" class="clearA">
          <p>MT4</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>MT5</p>
        </router-link>
      </div>
      <div class="items">
        <div class="title">新闻动态</div>
        <router-link to="/" class="clearA">
          <p>市场分析</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>市场快报</p>
        </router-link>
      </div>
      <div class="items">
        <div class="title">合作伙伴</div>
        <router-link to="/" class="clearA">
          <p>IB代理计划</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>区域代理</p>
        </router-link>
        <router-link to="/" class="clearA">
          <p>国际合作</p>
        </router-link>
      </div>
    </div>
    <div class="tips">
      风险提示：外汇及其他金融衍生品交易风险较高。在您决定进行外汇交易投资之前，我们建议您考虑您的投资目标、风险承受能力以及交易经验。您的交易亏损有可能超过您的原始投入。 Attuare Pty.
      Ltd.并未将您的投资目标、财务状况和需求考虑在内。本网站的内容不构成投资建议，如有任何疑问，请您咨询独立专业的财务或税务的意见。请您务必在进行交易投资前，仔细阅读金融服务指南（FSG）和产品披露申明（PDS）。如果本网站上有任何建议，则仅为一般建议。
    </div>
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
