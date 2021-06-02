<template>
  <footer class="footer">
    <img class="bg" src="@/assets/footerBg.jpg" alt="尾部背景图片" srcset="">
    <div class="block">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" srcset="">
      </div>
      <div class="items">
        <div class="title">关于我们</div>
        <p>关于我们</p>
        <p>监管信息</p>
        <p>常见问题解答</p>
        <p>公告</p>
        <p>联系我们</p>
      </div>
      <div class="items">
        <div class="title">交易产品</div>
        <p>外汇</p>
        <p>贵金属</p>
        <p>股票指数</p>
      </div>
      <div class="items">
        <div class="title">交易平台</div>
        <p>MT4</p>
        <p>MT5</p>
      </div>
      <div class="items">
        <div class="title">新闻动态</div>
        <p>市场分析</p>
        <p>市场快报</p>
      </div>
      <div class="items">
        <div class="title">合作伙伴</div>
        <p>IB代理计划</p>
        <p>区域代理</p>
        <p>国际合作</p>
      </div>
    </div>
    <div class="tips">
      风险提示：外汇及其他金融衍生品交易风险较高。在您决定进行外汇交易投资之前，我们建议您考虑您的投资目标、风险承受能力以及交易经验。您的交易亏损有可能超过您的原始投入。 Attuare Pty. Ltd.并未将您的投资目标、财务状况和需求考虑在内。本网站的内容不构成投资建议，如有任何疑问，请您咨询独立专业的财务或税务的意见。请您务必在进行交易投资前，仔细阅读金融服务指南（FSG）和产品披露申明（PDS）。如果本网站上有任何建议，则仅为一般建议。
    </div>
  </footer>
</template>




<style scoped>
.footer {
  padding: 0px !important;
  width: 100%;
  height: 520px;
  position: relative;
  display: flex;
  justify-content: center;
}
.footer .bg{
  position: absolute;
  width: 100%;
  height: 100%;
}
.footer .block{
  width: 80%;
  color: #fff;
  position: absolute;
  top: 15%;
  display: flex;
  justify-content: space-around;
}
.footer .block .items .title{
  margin-bottom: 50px;
}
.footer .block .logo img{
  width:120px;
  height: 100px; 
}
.footer .tips{
  font-size: 12px;
  color: #d8dbda;
  font-weight: 300;
  width: 75%;
  position: absolute;
  bottom: 20px;
}
</style>