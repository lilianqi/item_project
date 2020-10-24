<template>
  <div id="app">
    <!-- banner图 -->
    <div class="banner">
      <div class="nav">
        <!-- logo -->
        <div>
          <router-link to="/">
            <img src="../assets/img/logo.cffb93eb.png" alt="" />
          </router-link>
        </div>
        <!-- logo  over -->
        <!-- 导航栏 -->
        <div>
          <ul>
            <li v-for="(v, i) of 4" :key="i">
              <router-link to="/">石晓楠</router-link>
            </li>
          </ul>
        </div>
        <!-- 导航栏 over -->
      </div>
      <div class="search">
        <div>
          <div>
            <router-link to="/"> 北京 </router-link>
            <span>
              <img src="../assets/icon/down.png" alt="" />
            </span>
          </div>
        </div>
        <div></div>
        <div>
          <span>
            <img src="../assets/icon/location.png" alt="" />
          </span>
          <input placeholder="关键字/位置/房屋" type="text" />
        </div>
        <div></div>
        <div>
          <!-- 日历开始 -->
          <div class="block">
            <!-- <span class="demonstration">默认</span> -->
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
          <!-- 日历结束 -->
        </div>
        <div>
          <button>搜索</button>
        </div>
      </div>
    </div>
    <!-- banner图 over -->
    <div class="bag">
      <div class="content">
        <h2>热门城市</h2>
        <ul>
          <li v-for="(v, i) of 4" :key="i">
            <router-link to="/hotelcopy">
              <div>
                <img src="../assets/img/202004221844417754.jpg" alt="" />
              </div>
            </router-link>
            <h1>巴适成都</h1>
            <p>来这儿体验慢生活，暂别奔忙。</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="below">
      <h1>超值特惠</h1>
      <div>
        <div>
          <div class="below_text">
            <router-link to="/"> 新房特惠 </router-link>
            <router-link to="/"> 新房让利，抢先体验 </router-link>
          </div>
          <router-link to="/hotelcopy">
            <img
              src="https://pic.tujia.com/upload/festatic/crn/xfyhpc2.png"
              alt=""
            />
          </router-link>
        </div>
        <div>
          <div>
            <div class="below_text_two">
              <router-link to="/hotelcopy"> 今日甩卖 </router-link>
              <router-link to="/hotelcopy"> 特价房限时购 </router-link>
            </div>
            <router-link to="/hotelcopy">
              <img
                src="https://pic.tujia.com/upload/festatic/crn/jrsmpc3.png"
                alt=""
              />
            </router-link>
          </div>
          <div>
            <div class="below_text_two">
              <router-link to="/hotelcopy"> 连连优惠 </router-link>
              <router-link to="/hotelcopy"> 住多天更优惠 </router-link>
            </div>
            <router-link to="/hotelcopy">
              <img
                src="https://pic.tujia.com/upload/festatic/crn/lzyhpc3.png"
                alt=""
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="swipe">
      <h1>民宿种草</h1>
      <div class="swipe_list">
        <div v-for="(v, i) of 9" :key="i">
          <el-carousel indicator-position="outside" :autoplay="false">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="swipe_h3_img">
                <img style="border-radius:10px"
                  src="https://pic.tujia.com/upload/qualifiedpics/day_190202/thumb/201902021539507601_700_467.jpg"
                  alt=""
                />
              </h3>
            </el-carousel-item>
          </el-carousel>
          <div class="swipe_text">
            <router-link to="/hotelcopy">解放碑洪崖洞长江索道旁双床江景投影房</router-link>
            <ul>
              <li v-for="(v, i) of 6" :key="i">
                <router-link to="/">1居2床4人</router-link>
              </li>
            </ul>
            <ul class="swipe_card">
              <li v-for="(v, i) of 5" :key="i">
                <router-link to="/">连住优惠</router-link>
              </li>
            </ul>
            <div class="swipe_money">
              <p>
                <span>￥138</span>
              </p>
              <p>204</p>
            </div>
            <div class="swipe_portrait">
              <img src="https://pic.tujia.com/upload/landlordstorelogo/day_200416/thumb/202004160944206649_90_90.jpg" alt="">
              <span></span>
            </div>
            
          </div>
        </div>
      </div>
        <div class="swipe_more">
              <router-link to="/">查看等多</router-link>
          </div>
    </div>
    <div class="wrapper">
      <ul>
        <li>
          <router-link to="/layout">
            <img src="../assets/img/download.png" alt="" />
            <p>现行赔付</p>
            <p>100万保障金</p>
          </router-link>
        </li>
        <li>
          <router-link to="/caring">
            <img src="../assets/img/Custome.png" alt="" />
            <p>赠送保险</p>
            <p>11万人身保险</p>
          </router-link>
        </li>
        <li>
          <router-link to="/safe">
            <img src="../assets/img/pay.png" alt="" />
            <p>贴心客服</p>
            <p>7*24小时</p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img src="../assets/img/home.png" alt="" />
            <p>房屋保真</p>
            <p>4项房屋审核</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="foot">
      <ul class="nav_item">
        <!-- <li v-for="(v, i) of 3" :key="i">途家热门公寓</li> -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first" :class="color">
            <div class="list">
              <ul class="list_item" v-for="(v, i) of 9" :key="i">
                <li v-for="(v, i) of 3" :key="i">
                  <router-link to="/">洛阳日租房</router-link>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second" :class="color">
            <div class="list">
              <ul class="list_item" v-for="(v, i) of 9" :key="i">
                <li v-for="(v, i) of 3" :key="i">
                  <router-link to="/">石晓楠</router-link>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="角色管理" name="third" :class="color">
            <div class="list">
              <ul class="list_item" v-for="(v, i) of 9" :key="i">
                <li v-for="(v, i) of 3" :key="i">
                  <router-link to="/">杜泽洋</router-link>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth" :class="color">
            <div class="list">
              <ul class="list_item" v-for="(v, i) of 9" :key="i">
                <li v-for="(v, i) of 3" :key="i">
                  <router-link to="/">徐少轩</router-link>
                </li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </ul>
    </div>
    <div class="foot_botm">
      <div class="one_line">
        <ul>
          <li>
            <router-link to="/">隐私协议</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">用户协议</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">关于我们</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">我是房客</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">加入途家</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">网站地图</router-link>
          </li>
        </ul>
      </div>
      <div class="two_line">
        国内客服电话：400-188-1234 国内商服电话：010-81400100
        海外及港澳台客服电话：0086-571-28089451 0086-10-80697258
      </div>
      <p class="three_line">
        © 2020 tujia.com途家版权所有 津ICP备17006480号
        <span>
          <img src="../assets/icon/download.png" alt="" />
        </span>
        <router-link to="/"
          >京公网安备11010802031847号 营业执照 途家保障计划</router-link
        >
      </p>
      <div class="four_line">
        <router-link to="/"></router-link>
        <router-link to="/"></router-link>
        <router-link to="/"></router-link>
      </div>
    </div>
  </div>
</template>
<style>
#app {
  min-width: 1380px;
}
.banner {
  width: 100%;
  height: 682px;
  background-image: url(https://fe.tujiacdn.com/pc/static/img/banner.e35a6a3e.jpg);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
.banner::before {
  content: "";
  display: table;
}
.nav {
  width: 1340px;
  height: 30px;
  /* background-color: aqua; */
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.nav > div:first-child {
  width: 115px;
  height: 34px;
  /* background-color: blue; */
}
.nav > div:first-child img {
  width: 100%;
}
.nav > div:last-child {
  width: 314px;
  height: 34px;
  line-height: 34px;
  /* background-color: aquamarine; */
}
.nav > div:last-child > ul {
  display: flex;
  justify-items: center;
  justify-content: space-around;
}
.nav > div:last-child > ul a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}
.search {
  height: 64px;
  width: 950px;
  border-radius: 50px;
  margin: 0 auto;
  -webkit-box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  top: 490px;
  z-index: 99;
  display: flex;
  font-size: 18px;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
}
.search > div:first-child {
  width: 100px;
  white-space: nowrap;
  text-align: center;
  height: 34px;
  justify-items: center;
  line-height: 34px;
}
.search > div:first-child span > img {
  width: 26%;
  vertical-align: -6px;
}
.search > div:first-child a {
  font-size: 18px;
  color: #444;
  text-decoration: none;
}
.search > div:nth-child(2),
.search > div:nth-child(4) {
  display: block;
  width: 1px;
  height: 30px;
  background: #ddd;
}
.search > div:nth-child(3) {
  width: 244px;
}
.search > div:nth-child(3) > input {
  border: 0;
  text-align: center;
  font-size: 18px;
  line-height: 34px;
  height: 34px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  outline: none;
  padding-top: 8px;
}
.search > div:nth-child(3) > span > img {
  /* float: left; */
  width: 10%;
  position: relative;
  left: 37px;
  vertical-align: middle;
  top: -4px;
}
.search > div:nth-child(5) {
  line-height: 32px;
}
.search > div:nth-child(5) > span > img {
  width: 8%;
  vertical-align: -4px;
}
.search > div:nth-child(5) > span:last-child {
  position: relative;
  left: 25px;
}
.search > div:last-child::before {
  content: "";
  display: table;
}
.search > div:last-child > button {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff7632),
    to(#ffa819)
  );
  background-image: linear-gradient(90deg, #ff7632, #ffa819);
  -webkit-box-shadow: 0 20px 22px -13px rgba(229, 100, 0, 0.2);
  box-shadow: 0 20px 22px -13px rgba(229, 100, 0, 0.2);
  border-radius: 25px;
  padding: 0 45px;
  border: 0;
  outline: none;
}
.bag {
  width: 100%;
  background: #fafafa;
}
.content {
  width: 1180px;
  margin: 0 auto;
  /* height: 500px; */
  padding-top: 60px;
}
.content > h2 {
  text-align: center;
  line-height: 32px;
  font-size: 32px;
  counter-reset: #000;
  font-weight: bold;
}
.content > ul {
  margin-top: 40px;
  padding-bottom: 60px;
  display: flex;
}
.content > ul > li {
  width: 280px;
  margin-right: 20px;
}
.content > ul > li > a > div {
  width: 280px;
  height: 420px;
  margin-bottom: 18px;
  border-radius: 12px;
  overflow: hidden;
}
.content > ul > li > a > div > img {
  width: 100%;
}
.content > ul > li > p {
  font-size: 16px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 15px;
}
.content > ul > li > h1 {
  font-size: 24px;
  font-weight: bolder;
  counter-reset: #000;
}
.below {
  width: 1180px;
  margin: 0 auto;
  margin-top: 50px;
}
.below > div {
  height: 580px;
  display: flex;
  margin-top: 40px;
}
.below > div > div:first-child {
  width: 580px;
  height: 580px;
  margin-right: 20px;
  position: relative;
}
.below_text {
  position: absolute;
  /* width: 200px;
    height: 200px;
    background: #ff7632; */
  top: 86px;
  left: 86px;
}
.below_text > a:first-child {
  display: block;
  color: #264d5b;
  font-size: 44px;
  font-weight: bolder;
  text-decoration: none;
}
.below_text > a:last-child {
  display: block;
  margin-top: 30px;
  font-size: 26px;
  color: #5d7588;
  text-decoration: none;
}
.below > div > div:last-child {
  width: 580px;
}
.below > div > div:last-child > div {
  position: relative;
}
.below > div > div:last-child > div:last-child {
  margin-top: 20px;
}
.below > div > div img {
  width: 100%;
  height: 100%;
}
.below > h1 {
  font-size: 32px;
  color: #000;
  font-weight: bolder;
  text-align: center;
  line-height: 32px;
}
.below_text_two {
  position: absolute;
  top: 58px;
  left: 58px;
  max-width: 408px;
}
.below_text_two > a:first-child {
  font-size: 34px;
  font-weight: bold;
  text-decoration: none;
  display: block;
  color: #6e4848;
}
.below_text_two > a:last-child {
  display: block;
  margin-top: 24px;
  font-size: 24px;
  text-decoration: none;
  color: #6e4848;
}
.wrapper {
  width: 1180px;
  margin: 0 auto;
  margin-top: 70px;
}
.wrapper > ul {
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}
.wrapper > ul > li {
  width: 200px;
}
.wrapper > ul img {
  width: 28%;
  margin-bottom: 15px;
}
.wrapper > ul a {
  text-decoration: none;
}
.wrapper > ul a p {
  font-size: 20px;
  color: rgba(50, 55, 70, 0.8);
  letter-spacing: 1px;
}
.wrapper > ul a p:last-child {
  margin-top: 5px;
  font-size: 14px;
  color: rgba(50, 55, 70, 0.6);
  line-height: 21px;
}
.swipe {
  width: 100%;
  background-color: #fafafa;
  padding-top: 60px;
  margin-top: 60px;
  
}
.swipe > h1 {
  text-align: center;
  font-size: 32px;
  color: #333;
  font-weight: bolder;
}
.swipe > .swipe_list {
  width: 1180px;
  margin: 0 auto;
  margin-top: 60px;
  /* background-color: #666; */
  display: flex;
  flex-wrap: wrap;
}
.swipe > .swipe_list > div {
  flex: 0 0 33.2%;
  box-sizing: border-box;
  padding: 0 10px;
}
.swipe_text {
  width: 23.3rem;
  /* height: 200px; */
  /* background-color: #ff7632; */
  box-sizing: border-box;
  padding: 0 5px;
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
}
.swipe_text>a:first-child{
      font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    color: #000;
}
.swipe_text > ul {
  width: 100%;
  font-size: 14px;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 10px 0;
}
.swipe_text > ul > li {
  display: inline;
}
.swipe_text > ul > li::after {
  content: "·";
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
}
.swipe_text > ul > li:last-child::after {
  content: "";
}
.swipe_text > ul > li > a {
  text-decoration: none;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.swipe_text>.swipe_card{
   width: 100%;
  font-size: 14px;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 10px 0;
}
.swipe_text >.swipe_card > li::after{
  content: "";
  display: inline-block;
  margin:0;
}
.swipe_text>.swipe_card>li{
  text-align: center;
  padding: 2px 5px;
  background-color: #d3dce6;
  margin-right: 3px;
}
.swipe_text>.swipe_card>li>a{
  font-size: 12px;
  text-align: center;
  line-height: 16px;
}
.swipe_text>.swipe_money{
  display: flex;
  align-items: flex-end;
}
.swipe_text>.swipe_money>p{
      font-weight: 700;
    font-size: 14px;
    color: #fd8238;
    white-space: nowrap;
    margin: 0 10px 0 0
}
.swipe_text>.swipe_money>p>span{
      line-height: 35px;
    font-size: 26px;
}
.swipe_text>.swipe_money>p:nth-child(2){
      margin: 0 10px 2px 0;
    line-height: 21px;
    font-size: 16px;
    color: #999;
    text-decoration: line-through
}
.swipe_text>.swipe_portrait{
  width: 64px;
    height: 64px;
        position: absolute;
    right: -5px;
    bottom: 0;
    z-index: 1;
    background-color: #5d7588;
    border-radius: 50%;
}
.swipe_text>.swipe_portrait>img{
  width: 100%;
  border-radius: 50%;
}
.swipe_text>.swipe_portrait>span{
  position: absolute;
    z-index: 10;
    right: -5px;
    bottom: 0;
    border-radius: 50%;
    background-image: url('../assets/icon/component.png');
    background-position: 0 0;
    width: 24px;
    height: 24px;
}
.swipe>.swipe_more{
  width: 100%;
  margin: 40px 0;
}
.swipe::after{
  content: "";
  display: table;
}
.swipe>.swipe_more>a{
  color: #2c364b;
    display: block;
    text-decoration: none;
    text-align: center;
    border: 1px solid rgba(44,54,75,.2);
    border-radius: 25px;
    font-size: 16px;
    width: 300px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
}
.swipe>.swipe_more>a:hover{
  background: #2c364b;
    color: #fff;
}
.foot {
  width: 100%;
  font-size: 12px;
  color: #b2b2b2;
  line-height: 18px;
  background: #333;
  padding: 60px 0 46px 0;
}
.foot > .nav_item {
  width: 1180px;
  margin: 0 auto;
  display: flex;
}
.foot > .nav_item > li {
  margin-right: 10px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0;
  height: 30px;
  line-height: 30px;
  letter-spacing: 0.5px;
  padding: 0 10px;
  cursor: pointer;
}
.foot .list {
  width: 1180px;
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}
.foot .list > ul > li {
  width: 131px;
  text-align: left;
  margin-bottom: 14px;
}
.foot .list > ul > li > a {
  color: #b2b2b2;
  text-decoration: none;
}
.foot_botm {
  width: 100%;
  background: #292828;
  color: #dcdcdc;
  padding: 60px 0;
  font-size: 12px;
}
.foot_botm > .one_line {
  width: 500px;
  margin: 0 auto;
}
.foot_botm > .one_line > ul {
  display: flex;
  justify-content: space-around;
}
.foot_botm > .one_line > ul > li > a {
  text-decoration: none;
  color: #999;
}
.foot_botm > .two_line {
  text-align: center;
  margin-top: 15px;
}
.foot_botm > .three_line {
  text-align: center;
  margin-top: 15px;
}
.foot_botm > .three_line > a {
  color: #dcdcdc;
  text-decoration: none;
}
.foot_botm > .three_line > span > img {
  width: 16px;
  height: 16px;
  position: relative;
  left: -1px;
  top: 3px;
}
.foot_botm > .four_line {
  margin: 0 auto;
  display: flex;
  width: 408px;
  margin-top: 15px;
}
.foot_botm > .four_line > a {
  display: inline-block;
  width: 140px;
  height: 42px;
  text-align: center;
  background-image: url("../assets/img/download22.png");
  margin-right: 10px;
}
.foot_botm > .four_line > a:first-child {
  background-position: 0 0;
}
.foot_botm > .four_line > a:nth-child(2) {
  background-position: 0 -46px;
}
.foot_botm > .four_line > a:nth-child(3) {
  background-position: 0 -92px;
  width: 108px;
  height: 42px;
}
.el-tabs__item.is-active{
  color: #fff !important;
  font-weight: 2000px;
}
.el-tabs__item {
  color: #b2b2b2 !important;
  background: rgba(0, 0, 0, 0.3) !important;
  border-radius: 6px;
  text-align: center;
  margin-right: 10px;
  font-size: 12px !important;
  height: 30px !important;
  line-height: 30px !important;
   color: #fff !important;
  background: hsla(0, 0%, 100%, 0.15) !important;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px !important;
}
#tab-fourth {
  padding-right: 20px !important;
}
.el-tabs__nav-wrap::after {
  height: 0px !important;
}
.el-tabs__active-bar {
  height: 0px !important;
  color: #fff !important;
  background: hsla(0, 0%, 100%, 0.15);
}
.el-tabs__item.is-active {
  color: #fff !important;
  background: hsla(0, 0%, 100%, 0.15);
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__container {
  width: 100%;
  border-radius: 10px;
}
.el-carousel__container > .el-carousel__item {
  width: 100%;
  border-radius: 10px;
}
arousel--horizontal {
  border-radius: 10px;
}
.el-carousel__button {
  border-radius: 50%;
  width: 10px !important;
  height: 10px !important;
}
.el-carousel__indicators--outside {
  margin-top: -30px !important;
}
.el-carousel--horizontal{
  border-radius: 10px;
}
.el-carousel__indicators--outside{
  position: absolute !important;
}
.swipe_h3_img{
  opacity: 1 !important;
}
#tab-fourth{
  background: rgba(0,0,0,.3);
  color: #fff;
}
</style>
<style scoped>

</style>
<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      activeName: "first",
      color: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>