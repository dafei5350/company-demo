<template>
  <div class="block">
    <el-carousel height="790px">
      <el-carousel-item class="fenye01">
        <img src="@/assets/index/carousel.jpg" alt="" srcset="">
        <div class="block">
          <h1 class="title">“Attuare Pty. Ltd.提供我所需要的交易工具、交易知识和专业的相关服务，让我可以随时随地在世界上任何一个角落轻松交易。”</h1>
          <el-button class="btn" type="primary">开始交易</el-button>
        </div>
      </el-carousel-item>
      <el-carousel-item class="fenye02">
        <h1>交易股票、外汇、指数、大宗商品和数字货币</h1>
        <p>交易来自纽约交易所、纳斯达克和澳大利亚证券交易所的660多支股票。</p>
        <div class="btn">
          <el-button>开始交易</el-button>
          <el-button>模拟账户</el-button>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  const ENV = import.meta.env
  export default {
    name: 'Index',
    setup(){
      console.log('ENV', ENV);
    }
  }
</script>



<style>
  .fenye01{
    position: relative;
  }
  .fenye01 img{
    position: absolute;
  }
  .fenye01 .block{
    width: 650px;
    height: 280px;
    font-size: 30px;
    line-height: 48px;
    color: #eee;
    position:absolute;
    top: 200px;
    left: 280px;

  }
  .fenye01 .block .btn{
    width: 260px;
    height: 50px;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .25s ease-in-out;
  }
  .fenye01 .block .btn:hover{
    transform: scale(1.2);
  }
  .fenye02{
    position: relative;
    background-color: #FFFFFF;
  }
</style>