<template>
    <div>
       <el-main>
           <div class="main">
               <img src="../assets/images/safe-banner.jpg" alt="">
               <div class="safe-top">
                   <img src="../assets/images/safe-top.bb99eb26.png" alt="">
               </div>
               <div class="safe-info">
                   <img src="../assets/images/safe-info.png" alt="">
               </div>
           </div>
           <div class="title">
               <p class="big_title">途家网《入住保障服务》</p>
               <p class="contrast">全面解决你的预定担心与困扰</p>
               <img src="../assets/images/safe-content.jpg" alt="入住保障，真实保障，收费保障">
           </div>
           <div class="safe-footer">
               <p class="footer-title">玩转公寓民宿</p>
               <ul class="ul-li">
                   <li class="img">
                       <img src="../assets/images/hotel-bg1.jpg" alt="">
                         <p class="p1">轰趴聚会</p>
                         <p class="p2">——</p>
                         <p class="p3">私密空间 亲朋好友尽兴玩</p> 
                   </li>
                   <li class="img">
                       <img src="../assets/images/hotel-bg2.jpg" alt="">
                       <p class="p1">家庭出游</p>
                       <p class="p2">——</p>
                       <p class="p3">一房多卧 家人合住好照看</p>
                   </li>
                   <li class="img">
                       <img src="../assets/images/hotel-bg3.jpg" alt="">
                       <p class="p1">实惠长住</p>
                       <p class="p2">——</p>
                       <p class="p3">洗衣做饭 设施齐全又省钱</p>
                   </li>
                   <li class="img">
                       <img src="../assets/images/hotel-bg4.jpg" alt="">
                       <p class="p1">新奇体验</p>
                       <p class="p2">——</p>
                       <p class="p3">房型丰富 风格迥异更养眼</p>
                   </li>
               </ul>
           </div>
       </el-main>
       <Footer></Footer>
    </div>
</template>
<style>
.main img{
    width:100%;
    height:1000px;
    margin-bottom:60px;
    position: relative;
}
.safe-top img{
    position: absolute;
    width:100%;
    height:64.69px;
    top:20px;
    margin:0;
}
.safe-info img{
    width:528.14px;
    height:524.39px;
    position: absolute;
    bottom:-8px;
    left:557px;
    margin:0;
}
.title{
    text-align: center;
    color:#333;
}
.big_title{
    font-size:28px;
    line-height: 60px;
}
.contrast{
    font-size: 18px;
}
.safe-footer{
    font-size:20px;
    margin:0 auto;
}
.footer-title{
    padding:50px;
    text-align: center;
    color:#333;
}
.ul-li{
    display: flex;
    box-sizing: border-box;
    padding:0 200px;
}
.img{
    padding:10px;
    position:relative;
}
.p1{
    position:absolute;
    top:181px;
    left:128px;
    font-size: 16px;
    color:#fff;
    padding:10px 0 0;
}
.p2{
    position:absolute;
    bottom:214px;
    left:145px;
    font-weight: bold;
    color:#fff;
}
.p3{
    position: absolute;
    bottom:189px;
    left:92px;
    font-size: 14px;
    color:#fff;
}
</style>
<script>
import Footer from '@/components/footer.vue'
export default {
    components: {
    Footer
  } 
}
</script>


