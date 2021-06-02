<template>
  <div class="block">
    <el-carousel height="790px">
      <el-carousel-item class="fenye01">
        <img src="@/assets/index/carousel.jpg" alt="" srcset="" />
        <div class="block">
          <h1 class="title">
            “Attuare Pty.
            Ltd.提供我所需要的交易工具、交易知识和专业的相关服务，让我可以随时随地在世界上任何一个角落轻松交易。”
          </h1>
          <el-button class="btn" type="primary">开始交易</el-button>
        </div>
      </el-carousel-item>
      <el-carousel-item class="fenye02">
        <div class="block-text">
          <h1>交易股票、外汇、指数、大宗商品和数字货币</h1>
          <p>交易来自纽约交易所、纳斯达克和澳大利亚证券交易所的660多支股票。</p>
          <div class="btn">
            <el-button class="items" type="primary">开始交易</el-button>
            <el-button class="items">模拟账户</el-button>
          </div>
        </div>
        <img
          src="@/assets/index/mobile-banner1-background.jpg"
          alt=""
          srcset=""
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="ban-row">
    <div class="content">
      <div class="items">
        <h3>0.1-0.8</h3>
        <p>点差</p>
      </div>
      <div class="items">
        <h3>24小时</h3>
        <p>不间断报价</p>
      </div>
      <div class="items">
        <h3>5种</h3>
        <p>交易资产类别</p>
      </div>
      <div class="items">
        <h3>1:100</h3>
        <p>杠杆比率</p>
      </div>
      <div class="items">
        <h3>100美元</h3>
        <p>最低入金</p>
      </div>
      <div class="items">
        <h3>上百种品种</h3>
        <p>交易产品</p>
      </div>
    </div>
  </div>
  <div class="content-row"></div>
  <div class="ban-row">
    <div class="content">
      <div class="text">即刻申请Attuare Pty. Ltd.真实交易账户!</div>
      <el-button plain>开户体验</el-button>
    </div>
  </div>
  <div class="content-row"></div>
  <div class="other-row"></div>
  <div class="ban-row">
    <div class="content">
      <div class="text">即刻申请Attuare Pty. Ltd.真实交易账户!</div>
      <el-button plain>开户体验</el-button>
    </div>
  </div>
  <div class="other-row"></div>
  <div class="content-row"></div>
  <div class="other-row"></div>
</template>

<script>
const ENV = import.meta.env;
export default {
  name: "Index",
  setup() {
    console.log("ENV", ENV);
  },
};
</script>



<style>
.fenye01 {
  position: relative;
}
.fenye01 img {
  position: absolute;
}
.fenye01 .block {
  width: 650px;
  height: 280px;
  font-size: 30px;
  line-height: 48px;
  color: #eee;
  position: absolute;
  top: 200px;
  left: 280px;
}
.fenye01 .block .btn {
  width: 260px;
  height: 50px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in-out;
}
.fenye01 .block .btn:hover {
  transform: scale(1.2);
}
.fenye02 {
  position: relative;
  background-color: #ffffff;
}
.fenye02 .block-text {
  width: 650px;
  height: 280px;
  font-size: 30px;
  line-height: 48px;
  color: #01254f;
  position: absolute;
  top: 200px;
  left: 280px;
}
.fenye02 .block-text p {
  font-size: 24px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.85);
}
.fenye02 .block-text .btn {
  display: flex;
  justify-content: space-between;
}
.fenye02 .block-text .btn .items {
  width: 260px;
  height: 50px;
  font-size: 22px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in-out;
}
.fenye02 .block-text .btn .items:hover {
  transform: scale(1.2);
}
.fenye02 img {
  position: absolute;
  z-index: -1;
  max-width: unset;
  top: -134px;
  width: 156%;
}
.ban-row {
  color: #eee;
  position: absolute;
  height: 120px;
  width: 100%;
  background: #01254f;
  display: flex;
  justify-content: center;
}
.ban-row .content {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.ban-row .content .text {
  font-size: 28px;
  color: #eee;
}
.ban-row .content button {
  width: 200px;
}
.content-row {
  width: 100%;
  height: 950px;
  background: #f2f2f2;
}
.other-row {
  width: 100%;
  height: 560px;
  background: #ffffff;
}
</style>