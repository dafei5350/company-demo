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
          <el-button class="btn" type="primary"><router-link to="/">{{ $t("index.btn") }}</router-link></el-button>
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
  <div class="content-row">
    <div class="cointainer">
      <div class="text">
        <h2>选择Attuare Pty. Ltd.的理由</h2>
        <p>被誉为华尔街和硅谷的完美结合，我们不仅仅是一家持多国牌照的全球知名经纪商，还是一家以技术为灵感、以客户为中心的多资产供应商，致力于为客户提供卓越的在线交易服务。</p>
      </div>
      <div class="block">
        <div class="img">
          <img src="@/assets/index/diannaotupian.png" alt="">
          <div class="btn">
            <el-button type="primary">开户体验</el-button>
          </div>
        </div>
        <div class="content">
          <div class="items">
            <img src="@/assets/index/execution_speed.png" alt="">
            <b>卓越交易体验</b>
            <p>超低交易成本 | 闪电般订单执行速度 | 原始点差</p>
          </div>
          <div class="items">
            <img src="@/assets/index/execution_speed.png" alt="">
            <b>卓越交易体验</b>
            <p>超低交易成本 | 闪电般订单执行速度 | 原始点差</p>
          </div>
          <div class="items">
            <img src="@/assets/index/execution_speed.png" alt="">
            <b>卓越交易体验</b>
            <p>超低交易成本 | 闪电般订单执行速度 | 原始点差</p>
          </div>
          <div class="items">
            <img src="@/assets/index/execution_speed.png" alt="">
            <b>卓越交易体验</b>
            <p>超低交易成本 | 闪电般订单执行速度 | 原始点差</p>
          </div>
          <div class="items">
            <img src="@/assets/index/execution_speed.png" alt="">
            <b>卓越交易体验</b>
            <p>超低交易成本 | 闪电般订单执行速度 | 原始点差</p>
          </div>
          <div class="items">
            <img src="@/assets/index/execution_speed.png" alt="">
            <b>卓越交易体验</b>
            <p>超低交易成本 | 闪电般订单执行速度 | 原始点差</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ban-row">
    <div class="content">
      <div class="text">即刻申请Attuare Pty. Ltd.真实交易账户!</div>
      <el-button plain>开户体验</el-button>
    </div>
  </div>
  <div class="content-row">

  </div>
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
.fenye01{position:relative}
.fenye01 .block,.fenye01 img{position:absolute}
.fenye01 .block{top:200px;left:280px;width:650px;height:280px;color:#eee;font-size:30px;line-height:48px}
.fenye01 .block .btn{display:flex;width:260px;height:50px;font-size:22px;transition:all .25s ease-in-out;justify-content:center;align-items:center}
.fenye01 .block .btn:hover{transform:scale(1.2)}
.fenye02{position:relative;background-color:#fff}
.fenye02 .block-text{position:absolute;top:200px;left:280px;width:650px;height:280px;color:#01254f;font-size:30px;line-height:48px}
.fenye02 .block-text p{color:rgba(0,0,0,.85);font-size:24px;line-height:32px}
.fenye02 .block-text .btn{display:flex;justify-content:space-between}
.fenye02 .block-text .btn .items{display:flex;width:260px;height:50px;font-size:22px;transition:all .25s ease-in-out;flex-direction:row;justify-content:center;align-items:center}
.fenye02 .block-text .btn .items:hover{transform:scale(1.2)}
.fenye02 img{position:absolute;top:-134px;z-index:-1;width:156%;max-width:unset}
.ban-row{position:absolute;display:flex;width:100%;height:120px;background:#01254f;color:#eee;justify-content:center}
.ban-row .content{display:flex;width:80%;justify-content:space-around;align-items:center}
.ban-row .content .text{color:#eee;font-size:28px}
.ban-row .content button{width:200px}
.content-row{display:flex;width:100%;height:950px;background:#f2f2f2;flex-direction:column;align-items:center;justify-content:center}
.content-row .cointainer{padding-top:200px;width:60%;height:800px}
.content-row .text{display:flex;color:#9b9999;font-size:16px;flex-direction:column;align-items:center}
.content-row .text h2{color:rgba(0,0,0,.85)}
.content-row .block{display:flex;flex-direction:row;flex:1}
.content-row .block .btn,.content-row .block .img{display:flex;justify-content:center}
.content-row .block .img{width:60%;flex-direction:column}
.content-row .block .img .el-button{margin-top:20px;width:50%;text-align:center}
.content-row .block .content{display:flex;color:#9b9999;flex-wrap:wrap}
.content-row .block .content .items{display:flex;margin-left:15px;padding:15px;width:40%;flex-direction:column}
.content-row .block .content .items img{width:50px;height:50px}
.other-row{width:100%;height:560px;background:#fff}

</style>