<template>
  <div id="login">
    <div class="head">
      <img src="../images/logo.jpg" width=100%>
      <div class="link">
        <p>文档中心</p>
        <router-link to="/"><p>首页</p></router-link>
      </div>
    </div>
    <hr size="1px" noshade=false color="#6CC8F0"/>
    <div class="content">
      <div class="word">
        <div class="title">
          <p>又拍云 DDoS 防护，</p>
          <p>超稳定护航 2019</p>
        </div>
        <div class="intro">
          <p>3T 带宽保障源站业务，弹性计费、限时低至 7.2 折</p>
        </div>
      </div>
      <div class="input">
        <div class=block>
          <div class="content">
            <p>用户名：</p>
            <input type="text" placeholder=" 账号/邮箱/手机号"/>
          </div>
          <div class="content">
            <p>登录密码：</p>
            <input type="password" placeholder=" 密码"/>
          </div>
          <div class="btn">
            <button>登 录</button>
          </div>
          <div class="item1">
            <p>忘记密码</p>
          </div>
          <div class="item2">
            <p>立即注册</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'login'
})
</script>

<style scoped>
#login {
  background:linear-gradient(to right, #009dfa, #32D0EF);
  height:700px;
}
.head {
  height:50px;
  line-height:50px;
}
.head img {
  float:left;
  margin-left:50px;
  width:150px;
}
.head .link {
  float:right;
  width:200px;
}
.head .link p {
  float:left;
  margin-right:50px;
  color:#FFFFFF;
}
hr {
   margin-top:40px;
}
.word {
  margin-left:150px;
  margin-top:200px;
  float:left;
}
.word p {
  color:#FFFFFF;
  margin-top:1px;
  margin-bottom:1px;
}
.title p {
  font-size:30px;
}
.intro {
  margin-top:30px;
}
.intro p {
  font-weight:lighter;
}
.input {
  float:right;
  background-color:#FFFFFF;
  height:380px;
  width:400px;
  margin-top:100px;
  margin-right:100px;
}
.block {
  margin:50px;
}
.input p {
  color:#747474;
  font-size:13px;
  font-weight:bold;
}
.input input {
  height:40px;
  width:300px;
}
button {
  margin-top:30px;
  background-color:#02A8EF;
  border-color:#02A8EF;
  color:#FFFFFF;
  height:40px;
  width:310px;
}
.item1 p{
  color:#02A8EF;
  font-size:13px;
}
.item2 p {
  color:#02A8EF;
  font-size:13px;
}
.item1 {
  float:left;
}
.item2 {
  float:right;
}
</style>
