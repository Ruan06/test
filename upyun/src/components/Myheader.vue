<template>
  <div id="header">
    <div class="logo">
      <img src="../images/logo.jpg" height="100%">
    </div>
    <div class="menu">
      <div class="block">
        <el-dropdown>
          <span class="el-dropdown-link">
            产品<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <div class="top">
              <div class="rank">
                <div class="title">
                  <p>CDN & 存储</p>
                </div>
                <div class="content">
                  <p>CDN</p>
                  <p>PrismCDN</p>
                  <p>对象存储</p>
                  <p>融合云存储</p>
                </div>
              </div>
              <div class="rank">
                <div class="title">
                  <p>视频服务</p>
                </div>
                <div class="content">
                  <p>直播云</p>
                  <p>点播云</p>
                  <p>短视频</p>
                </div>
              </div>
              <div class="rank">
                <div class="title">
                  <p>数据处理</p>
                </div>
                <div class="content">
                  <p>音视频处理</p>
                  <p>图片处理</p>
                  <p>内容识别</p>
                </div>
              </div>
              <div class="rank">
                <div class="title">
                  <p>云安全</p>
                </div>
                <div class="content">
                  <p>SSL 证书</p>
                  <p>安全防护</p>
                </div>
              </div>
              <div class="rank">
                <div class="title">
                  <p>云计算</p>
                </div>
                <div class="content">
                  <p>容器云</p>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="rank">
                <div class="title">
                  <p>云解析</p>
                </div>
                <div class="content">
                  <p>融合 CDN 调度</p>
                </div>
              </div>
              <div class="rank">
                <div class="title">
                  <p>云通信</p>
                </div>
                <div class="content">
                  <p>短信服务</p>
                </div>
              </div>
              <div class="rank">
                <div class="title">
                  <p>区块链</p>
                </div>
                <div class="content">
                  <p>区块链服务</p>
                </div>
              </div>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="block">
        <el-dropdown>
          <span class="el-dropdown-link">
            解决方案<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">items1</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">items2</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">items3</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">items4</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="block">
        <span class="el-dropdown-link">价格</span>
      </div>
      <div class="block">
        <el-dropdown>
          <span class="el-dropdown-link">
            帮助与工具<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">items1</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">items2</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">items3</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">items4</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="block">
        <el-dropdown>
          <span class="el-dropdown-link">
            小拍日志<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">items1</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">items2</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">items3</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">items4</el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
      </div>
      <div class="block">
        <span class="el-dropdown-link">Open Talk</span>
      </div>
      <div class="block">
        <el-dropdown>
          <span class="el-dropdown-link">
            热门专题<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">items1</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">items2</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">items3</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">items4</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="user">
      <div class="login">
        <router-link to="/login"><span class="el-dropdown-link">登录</span></router-link>
      </div>
      <div class="register">
        <span class="el-dropdown-link">注册</span>
      </div>
      <div class="btn">
        <el-button>控制台</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default({
  name: 'header'
})
</script>

<style>
#header {
  height:80px;
  width:100%;
  background:linear-gradient(to right, #009dfa, #32D0EF);
  position:fixed;
  top:0px;
  z-index:11;
  color:#FFFFFF;
}
.logo {
  float:left;
  width:130px;
  height:70px;
  margin-left:1%;
  margin-right:7px;
}
.menu {
  float:left;
  width:65%;
  height:80px;
}
.block {
  float:left;
  margin-top:27px;
  margin-left:35px;
}
.el-dropdown-link {
  cursor:default;
  font-size:16px;
  color:#FFFFFF;
  font-weight:lighter;
}
.el-dropdown-menu {
  padding:20px 30px;
}
.top {
  height:170px;
  margin-bottom:20px;
}
.bottom {
  height:30px;
}
.rank {
  float:left;
  margin-right:50px;
}
.rank .title p {
  color:#416888;
  margin-bottom:20px;
}
.rank .content p {
  font-weight:lighter;
  font-size:15px;
  color:#859EB3;
  margin-top:7px;
  margin-bottom:7px;
}
.user {
  width:18%;
  height:80px;
  float:right;
  padding-right:1%;
}
.login, .register {
  margin-top:27px;
  float:left;
  width:60px;
  height:20px;
}
.router-link {
   text-decoration: none;
 }
.el-button {
  margin-top:23px;
  float:left;
  padding:0px;
  width:75px;
  height:33px;
  background-color:transparent;
  font-size:16px;
  color:#FFFFFF;
  border-color:#FFFFFF;
  font-weight:lighter;
}
.el-button:hover {
background-color:#d0f0fb;
color:#FFFFFF;
border-color:#FEFFFF;
}
</style>
