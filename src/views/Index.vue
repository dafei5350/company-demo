<template>
  <div class="block">
    <el-carousel>
      <el-carousel-item class="fenye01"><img src="../assets/index/carousel.jpg" alt="" srcset=""/>
        <div class="block"><h1 class="title">{{ $t('index.indexAPLTGWSX') }}</h1>
          <router-link class="clearA" to="/">
            <el-button class="btn" type="primary">{{ $t('index.indexLJJY2013') }}</el-button>
          </router-link>
        </div>
      </el-carousel-item>
      <el-carousel-item class="fenye02">
        <div class="block-text"><h1>{{ $t('index.indexJYGPWHZS') }}</h1>
          <p>{{ $t('index.indexJYLZNYJY') }}</p>
          <div class="btn">
            <router-link class="clearA" to="/">
              <el-button class="btn" type="primary">{{ $t('index.indexLJJY1255') }}</el-button>
            </router-link>
            <router-link class="clearA" to="/">
              <el-button class="btn">{{ $t('index.indexMNZH6829') }}</el-button>
            </router-link>
          </div>
        </div>
        <div class="icon-container">
          <div class="parent-Alibaba"><i class="sprite-home sprite-Alibaba delay-1s"></i></div>
          <div class="parent-Alphabet"><i class="sprite-home sprite-Alphabet delay-7s"></i></div>
          <div class="parent-Amazon"><i class="sprite-home sprite-Amazon delay-5s"></i></div>
          <div class="parent-BHP"><i class="sprite-home sprite-BHP delay-4s"></i></div>
          <div class="parent-Bitcoin"><i class="sprite-home sprite-Bitcoin delay-2s"></i></div>
          <div class="parent-Commbank"><i class="sprite-home sprite-Commbank delay-3s"></i></div>
          <div class="parent-Dollar"><i class="sprite-home sprite-Dollar delay-6s"></i></div>
          <div class="parent-Euro"><i class="sprite-home sprite-Euro delay-3s"></i></div>
          <div class="parent-Facebook"><i class="sprite-home sprite-Facebook delay-5s"></i></div>
          <div class="parent-Gold"><i class="sprite-home sprite-Gold delay-2s"></i></div>
          <div class="parent-Microsoft"><i class="sprite-home sprite-Microsoft delay-7s"></i></div>
          <div class="parent-Netflix"><i class="sprite-home sprite-Netflix"></i></div>
          <div class="parent-Oil"><i class="sprite-home sprite-Oil delay-1s"></i></div>
          <div class="parent-Pound"><i class="sprite-home sprite-Pound delay-2s"></i></div>
          <div class="parent-Telsa"><i class="sprite-home sprite-Telsa delay-4s"></i></div>
          <div class="parent-Yen"><i class="sprite-home sprite-Yen"></i></div>
          <div class="parent-apple"><i class="sprite-home sprite-apple"></i></div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="ban-row">
    <div class="content">
      <div class="items"><h3>0.1-0.8</h3>
        <p>{{ $t('index.indexDC212370') }}</p></div>
      <div class="items"><h3>{{ $t('index.indexXS356884') }}</h3>
        <p>{{ $t('index.indexBJDBJ137') }}</p></div>
      <div class="items"><h3>{{ $t('index.indexZ1801778') }}</h3>
        <p>{{ $t('index.indexJYZCLB21') }}</p></div>
      <div class="items"><h3>1:100</h3>
        <p>{{ $t('index.indexGGBL1429') }}</p></div>
      <div class="items"><h3>{{ $t('index.indexMY105237') }}</h3>
        <p>{{ $t('index.indexZDRJ6352') }}</p></div>
      <div class="items"><h3>{{ $t('index.indexSBZPZ152') }}</h3>
        <p>{{ $t('index.indexJYCP1072') }}</p></div>
    </div>
  </div>
  <div class="content-row">
    <div class="cointainer">
      <div class="text" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <h2>{{ $t('index.indexXZAPLDLY') }}</h2>
        <p>{{ $t('index.indexBYWHEJHG') }}</p></div>
      <div class="block">
        <div class="img" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
            src="../assets/index/diannaotupian.png" alt=""/>
          <div class="btn">
            <el-button plain type="primary">{{ $t('index.indexKHTY9233') }}</el-button>
          </div>
        </div>
        <div class="content" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div class="items"><img src="../assets/index/lost_cost_trading.png"
                                  alt=""/><b>{{ $t('index.indexZYJYTY11') }}</b>
            <p>{{ $t('index.indexCDJYCBSD') }}</p></div>
          <div class="items"><img src="../assets/index/execution_speed.png"
                                  alt=""/><b>{{ $t('index.indexSRSCFX21') }}</b>
            <p>{{ $t('index.indexZSHXWSJD') }}</p></div>
          <div class="items"><img src="../assets/index/time.png" alt=""/><b>{{ $t('index.indexDZCLBTGS') }}</b>
            <p>{{ $t('index.indexWHGZDZSP') }}</p></div>
          <div class="items"><img src="../assets/index/education.png" alt=""/><b>{{ $t('index.indexYDYZHJL2') }}</b>
            <p>{{ $t('index.indexZLYWNTGJ') }}</p></div>
          <div class="items"><img src="../assets/index/no_dealing_desk.png"
                                  alt=""/><b>{{ $t('index.indexYZJYZY70') }}</b>
            <p>{{ $t('index.indexJGHHKDZD') }}</p></div>
          <div class="items"><img src="../assets/index/regulation.png"
                                  alt=""/><b>{{ $t('index.indexDCJG1085') }}</b></div>
        </div>
      </div>
    </div>
  </div>
  <div class="ban-row">
    <div class="content">
      <div class="text">{{ $t('index.indexJKSQAPLZ') }}</div>
      <div class="btn">
        <el-button plain type="primary">{{ $t('index.indexKHTY2037') }}</el-button>
      </div>
    </div>
  </div>
  <div class="zy-row">
    <div class="items">
      <div class="title" data-aos="fade-down" data-aos-easing="linear"
           data-aos-duration="1500">{{ $t('index.indexZYDJYTY6') }}</div>
    </div>
    <div class="items-rig">
      <div class="block" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
          src="../assets/index/jinqian.png" alt=""></div>
      <div class="muens" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <p>{{ $t('index.indexZZLKHKYH') }}</p>
        <div class="items"><img src="../assets/index/lost_cost_trading.png"
                                alt=""/><b>{{ $t('index.indexCDJYCB14') }}</b>
          <p>{{ $t('index.indexDCDZ6410') }}</p></div>
        <div class="items"><img src="../assets/index/execution_speed.png"
                                alt=""/><b>{{ $t('index.indexJSDDZX12') }}</b>
          <p>{{ $t('index.indexJYSDKDM1') }}</p></div>
        <div class="items"><img src="../assets/index/time.png" alt=""/><b>{{ $t('index.indexSDSCLDX1') }}</b>
          <p>{{ $t('index.indexLZJQQDJY') }}</p></div>
        <div class="items"><img src="../assets/index/no_dealing_desk.png"
                                alt=""/><b>{{ $t('index.indexZZDEJYMS') }}</b>
          <p>{{ $t('index.indexDDZJDJZL') }}</p></div>
        <router-link to="/">
          <el-button type="primary fourth-button hvr-sweep-to-right">{{ $t('index.indexLJGD1958') }}</el-button>
        </router-link>
      </div>
    </div>
  </div>
  <div class="other-row">
    <div class="content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <h1>{{ $t('index.indexYZJYZYJS') }}</h1>
      <div>{{ $t('index.indexJYCGDGJZ') }}</div>
      <div>{{ $t('index.indexWMDJXZYH') }}</div>
    </div>
  </div>
  <div class="ban-row">
    <div class="content">
      <div class="text">{{ $t('index.indexJKSQAPLZ') }}</div>
      <router-link to="/" style="text-decoration: none;">
        <div class="btn">
          <el-button plain type="primary">{{ $t('index.indexMNZH3307') }}</el-button>
        </div>
      </router-link>
    </div>
  </div>
  <div class="pt-row">
    <div class="items">
      <div class="title" data-aos="fade-down" data-aos-easing="linear"
           data-aos-duration="1500">{{ $t('index.indexXZMHMJYP') }}</div>
    </div>
    <div class="items-rig">
      <div class="block" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
          src="../assets/index/video_screen_shot.png" alt=""></div>
      <div class="pingtai" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h2>{{ $t('index.indexWMDJYPT1') }}</h2>
        <p>{{ $t('index.indexNKYXZYYF') }}</p>
        <div class="items"><img src="../assets/index/mt.jpg" alt=""/><span>{{ $t('index.indexM1228854') }}</span><img
            src="../assets/index/Group68.png" alt=""></div>
        <div class="items"><img src="../assets/index/mt.jpg" alt=""/><span>{{ $t('index.indexM1602995') }}</span><img
            src="../assets/index/Group68.png" alt=""></div>
        <div class="items"><img src="../assets/index/windows.png" alt=""/><img src="../assets/index/apple.png"
                                                                               alt=""/><img
            src="../assets/index/android.png" alt=""/></div>
      </div>
    </div>
  </div>
  <div class="js-row">
    <div class="items">
      <div class="title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <h3>{{ $t('index.indexHYLXDZHG') }}</h3></div>
    </div>
    <div class="items-rig">
      <div class="block" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
          src="../assets/index/diannaotupian.png" alt=""></div>
      <div class="text" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <p>{{ $t('index.indexPJYHDYHJ') }}</p></div>
    </div>
  </div>
  <div class="py-row" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
    <div class="title"><h3>{{ $t('index.indexZAPLKSJY') }}</h3></div>
    <div class="block">
      <div class="items"><img src="../assets/index/time.png" alt="">
        <p>{{ $t('index.indexKSZH1062') }}</p><span>{{ $t('index.indexYFZ99789') }}</span></div>
      <div class="items"><img src="../assets/index/lost_cost_trading.png" alt="">
        <p>{{ $t('index.indexSCNDZJ15') }}</p><span>{{ $t('index.indexYZNDGRXX') }}</span></div>
      <div class="items"><img src="../assets/index/no_dealing_desk.png" alt="">
        <p>{{ $t('index.indexCRZJ1807') }}</p><span>{{ $t('index.indexZFKFSKGX') }}</span></div>
      <div class="items"><img src="../assets/index/execution_speed.png" alt="">
        <p>{{ $t('index.indexKSJY1541') }}</p><span>{{ $t('index.indexWHGPZSDZ') }}</span></div>
    </div>
    <div class="pay" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <h3>{{ $t('index.indexZFFF1207') }}</h3><img src="../assets/index/payment_logo.png" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "Index",
  setup() {
    
  }
};
</script>



<style>
.el-carousel__container{
  height: 700px !important;
}
.fenye01{position:relative;}
.fenye01 .block,.fenye01 img{position:absolute}
.fenye01 .block{top:200px;left:280px;width:650px;height:280px;color:#eee;font-size:30px;line-height:48px}
.fenye01 .block .btn{display:flex;width:260px;height:50px;font-size:22px;transition:all 0.25s ease-in-out;justify-content:center;align-items:center}
.fenye01 .block .btn:hover{transform:scale(1.2)}
.fenye02{position:relative;background-color:#fff}
.fenye02 .block-text{position:absolute;top:200px;left:280px;width:650px;height:280px;color:#01254f;font-size:30px;line-height:48px;text-decoration:none}
.fenye02 .block-text p{width:100%;color:rgba(0,0,0,0.85);font-size:24px;line-height:32px}
.fenye02 .block-text .clearA .btn{width:150px}
 .btn{display:flex;justify-content:space-between}
.fenye02 .block-text .btn .items{display:flex;width:260px;height:50px;font-size:22px;transition:all 0.25s ease-in-out;flex-direction:row;justify-content:center;align-items:center;text-decoration:none}
.fenye02 .block-text .btn .items:hover{transform:scale(1.2)}
.fenye02 img{position:absolute;top:-134px;z-index:-1;width:156%;max-width:unset}
.fenye02 .icon-container .sprite-home {background-image: url(../assets/home-spritesheet.png); background-repeat:no-repeat;display:block; animation-name:floating; animation-iteration-count:infinite; animation-direction:alternate; animation-play-state: running; animation-timing-function: ease-in-out; -webkit-animation-duration: 4s;}


.ban-row{display:flex;width:100%;height:120px;background:#01254f;color:#eee;justify-content:center}
.ban-row .content{display:flex;width:80%;justify-content:space-around;align-items:center}
.ban-row .content .text{color:#eee;font-size:28px}
.ban-row .content button{width:200px}
.content-row{display:flex;width:100%;height:950px;background:#f2f2f2;flex-direction:column;align-items:center;justify-content:center}
.content-row .cointainer{padding-top:200px;width:80%;height:800px;max-width: 1200px;}
.content-row .text{display:flex;color:#9b9999;font-size:16px;flex-direction:column;align-items:center}
.content-row .text h2{color:rgba(0,0,0,0.85)}
.content-row .block{display:flex;flex-direction:row;flex:1}
.content-row .block .btn,.content-row .block .img{display:flex;justify-content:center;text-decoration:none}
.content-row .block .img{width:50%;flex-direction:column;margin-right:15px;}
.content-row .block .img .el-button{margin-top:20px;width:50%;text-align:center}
.content-row .block .content{display:flex;color:#9b9999;flex-wrap:wrap; font-size: 12px;width: 50%;}
.content-row .block .content .items{display:flex;padding:15px;width:40%;flex-direction:column}
.content-row .block .content .items img{width:50px;height:50px}
.zy-row{display:flex;width:100%;height:950px;background:#f2f2f2;flex-direction:column;align-items:center;justify-content:center}
.zy-row .items .title{font-size:22px;margin-bottom:20px}
.zy-row .items-rig{width:80%;color:#9b9999;display:flex;flex-direction:row}
.zy-row .items-rig .block{width: 60%;margin-top: 100px;}
.zy-row .items-rig .block img{width: 100%;}
.zy-row .items-rig .muens{width:50%;display:flex;flex-direction:row;flex-wrap:wrap}
.zy-row .items-rig .muens .items{width:50%;display:flex;flex-direction:column}
.zy-row .items-rig .muens .items img{width:50px;height:50px}
.zy-row .items-rig .pingtai{width:40%;display:flex;flex-direction:row;flex-wrap:wrap}
.pt-row{display:flex;width:100%;height:950px;background:#ffffff;flex-direction:column;align-items:center;justify-content:center}
.pt-row .items .title{font-size:22px;margin-bottom:20px}
.pt-row .items-rig{width:80%;color:#9b9999;display:flex;flex-direction:row;justify-content:center}
.pt-row .items-rig .block img{height:450px}
.pt-row .items-rig .pingtai{width:35%;display:flex;flex-wrap:wrap}
.pt-row .items-rig .pingtai .items{width:50%;display:flex;align-items:center;justify-content:space-around}
.pt-row .items-rig .pingtai .items:last-child{width:100%}
.pt-row .items-rig .pingtai .items img:first-child{width:80px;height:80px}
.other-row{width:100%;margin: 250px 0;background:#fff;display:flex;justify-content:space-evenly}
.other-row .content{width:60%;display:flex;flex-direction:column;justify-content:center;color:#9b9999;font-size:18px}
.other-row .content h1{text-align:center;color:rgba(0,0,0,.85)}
.js-row{display:flex;width:100%;height:950px;background:#ffffff;flex-direction:column;align-items:center;justify-content:center}
.js-row .items .title{font-size:22px;margin-bottom:20px}
.js-row .items-rig{width:80%;color:#9b9999;display:flex;flex-direction:row;justify-content:center}
.js-row .items-rig .block img{height:450px}
.js-row .items-rig .text{width:40%;display:flex;flex-wrap:wrap;align-items:center; padding: 0 125px}


.py-row{display:flex;width:100%;height:950px;background:#ffffff;flex-direction:column;align-items:center;justify-content:space-evenly}
.py-row .title{width: 60%; text-align: center}
.py-row .block{ width: 80%; display:flex; flex-direction:row; justify-content: space-evenly}
.py-row .block .items{width: 260px; height: 280px; border-radius: 5px; border: 1px solid #9099A0; display: flex; flex-direction: column; justify-content: space-evenly; align-items:center;}
.py-row .block .items img{width: 60px; height: 60px;}
.py-row .block .items p{padding: 10px;}
.py-row .block .items span{color: #9b9999;padding: 0 10px;}
.py-row .pay{text-align: center}


.fenye02 .icon-container .parent-Alibaba{position: absolute; top: 30%; right: 100px; transform:scale(.7); z-index: -1;}
.fenye02 .icon-container .parent-Alibaba .sprite-Alibaba {width: 161px; height: 160px; background-position: -5px -5px;}
.parent-Amazon {position:absolute;bottom:100px;left:80px;transform:scale(.7);z-index:-1}
.sprite-Amazon {width:161px;height:160px;background-position:-346px -5px}
.parent-BHP {position:absolute;bottom:100px;right:380px;transform:scale(0.6);z-index:-1}
.sprite-BHP {width:161px;height:160px;background-position:-517px -5px}
.parent-Bitcoin {position:absolute;top:100px;left:154px;transform:scale(.85);z-index:-1}
.sprite-Bitcoin {width:160px;height:160px;background-position:-5px -175px}
.parent-Commbank {position:absolute;top:350px;right:200px;transform:scale(.6);z-index:-1}
.sprite-Commbank {width:161px;height:160px;background-position:-175px -175px}
.parent-Dollar {position:absolute;top:10px;left:290px;transform:scale(.6);z-index:-1}
.sprite-Dollar {width:160px;height:160px;background-position:-346px -175px}
.parent-Euro {position:absolute;top:270px;left:20;transform:scale(.5);z-index:-1}
.sprite-Euro {width:161px;height:160px;background-position:-516px -175px}
.parent-Facebook {position:absolute;top:187px;right:411px;transform:scale(1);z-index:-1}
.sprite-Facebook {width:160px;height:160px;background-position:-5px -345px;transform:scale(1.1)}
.parent-Gold {position:absolute;bottom:50px;left:453px;transform:scale(.8);z-index:-1}
.sprite-Gold {width:160px;height:160px;background-position:-175px -345px}
.parent-Microsoft {position:absolute;bottom:10px;left:725px;transform:scale(1);z-index:-1}
.sprite-Microsoft {width:160px;height:160px;background-position:-345px -345px}
.parent-Netflix {position:absolute;top:80px;right:450px;transform:scale(.9);z-index:-1}
.sprite-Netflix {width:160px;height:160px;background-position:-515px -345px}
.parent-Oil {position:absolute;top:150px;right:600px;transform:scale(.6);z-index:-1}
.sprite-Oil {width:161px;height:160px;background-position:-5px -515px}
.parent-Pound {position:absolute;top:10px;right:250px;transform:scale(.5);z-index:-1}
.sprite-Pound {width:161px;height:160px;background-position:-176px -515px}
.parent-Telsa {position:absolute;top:120px;right:50%;transform:scale(1);z-index:-1}
.sprite-Telsa {width:161px;height:160px;background-position:-347px -515px}
.parent-Yen {position:absolute;top:170px;left:970px;transform:scale(.6);z-index:-1}
.sprite-Yen {width:161px;height:160px;background-position:-518px -515px}
.parent-apple {position:absolute;top:375px;left:60%;transform:scale(1.2);z-index:-1}
.sprite-apple {width:160px;height:160px;background-position:-688px -5px}
.fourth-button {
		display: flex;
		width: 200px;
		height: 40px;
		align-items: center;
		justify-content: center;
		background: #013B81;
		border-radius:5px;
		overflow: hidden;
		box-shadow: 0px 2px 4px rgb(0 0 0 / 40%), 0px 0px 20px rgb(0 0 0 / 10%) inset;
	}
@keyframes -Pure-ECN-Pricing-icon {0% {transform:translateY(-50%) translateX(-50%)}
    to {transform:translateY(-60%) translateX(-50%)}
}
@keyframes floating2 {0% {transform:translateY(-10px)}
    to {transform:translateY(10px)}
}
@keyframes floating3 {0% {transform:translateY(10px)}
    to {transform:translateY(-10px)}
}
@keyframes floating {0% {transform:translateY(10px) rotate3d(0,0,1,4deg)}
    to {transform:translateY(-10px) rotate3d(0,0,1,0deg)}
}
.delay-1s {animation-delay:-1s}
.delay-2s {animation-delay:-2s}
.delay-3s {animation-delay:-3s}
.delay-4s {animation-delay:-4s}
.delay-5s {animation-delay:-5s}
.delay-6s {animation-delay:-6s}
.delay-7s {animation-delay:-7s}


@media screen and (max-width: 768px){

  .el-carousel__container{
    width: 100%;
    height: 400px !important;

  }
  .fenye01 .block .title{
	  padding: 0 10px;
  }
  .fenye01 .block, .fenye01 img{
    height: 100%;
    width: 100%;
  }
  .fenye02 img{
    height: 100%;
  }
  .ban-row{
    height: auto;
	padding: 10px 0;
  }
  .ban-row .content{
    flex-wrap: wrap;
  }
  .ban-row .content .items{
    width: 50%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content-row .block{
    flex-direction: column;
  }
  .content-row{
    height: auto;
	padding-bottom: 50px;
  }
  .content-row .cointainer{
    padding-top: 0;
    width: 90%;
    height: auto;
  }

  .content-row .block .img{
    width: 100%;
  }
  .content-row .block .content{
    display: flex;
    align-items: center;
	width: 100%;
  }
  .content-row .block .content .items{
    width: 100%;
    align-items: center;
  }

  .zy-row{
    display: none;
  }
  .pt-row{
    display: none;
  }
  .other-row{
	  margin: 50px 0;
  }
  .other-row .content{
    width: 90%;
  }
  .js-row{
    display: none;
  }
  .py-row .title{
    width: 90%;
    font-size: 20px;
  }
  .py-row .block{
    width: 100%;
    height: 370px;
    align-items: center;
    flex-wrap: wrap;
  }
  .py-row .block .items{
    width: 150px;
    height: 160px;
  }
  .py-row .pay img{
    width: 95%;
  }
  .fenye02 .icon-container .sprite-home{
    display: none;
  }
  .fenye01 .block{
    top: 0;
    left: 0;
    width: 100%;
    font-size: 16px;
    line-height: 30px;
  }
  .fenye01 .block .btn{
    margin: 0 auto;
  }
  .fenye02 .block-text{
    top: 0;
    left: 0;
    width: 300px;
    position: static;
    margin: 0 auto;
    font-size: 16px;
    line-height: 30px;
  }
  .el-main{
    overflow-x: hidden !important;
  }
}
@media screen and (min-width: 1200px){

}
</style>
