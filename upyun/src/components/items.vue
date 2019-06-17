<template>
  <div class="change">
    <div class="items">
      <div class="item1" @mouseenter="mouseEnter1()" @mouseleave="mouseLeave1()">
        <el-button type="primary" plain :class="{ active: isActive }">CDN</el-button>
      </div>
      <div class="item2">
        <el-button type="primary" plain>云存储</el-button>
      </div>
      <div class="item3">
        <el-button type="primary" plain>安全防护</el-button>
      </div>
      <div class="item4">
        <el-button type="primary" plain>云处理</el-button>
      </div>
      <div class="item5">
        <el-button type="primary" plain>HTTPS/SSL证书</el-button>
      </div>
    </div>
    <div class="choice1">
      <img src="../images/CDN.png">
      <p>CDN：极速稳定，简单易用，全场景支持，国内首家全网支持 TLS 1.3、HTTP/2 、Brotli 、边缘规则等特性。</p>
    </div>
    <div class="choice2" :style="{display:activeDisplay2 = 'none'}">
      <img src="../images/云存储.png">
      <p>云存储：超低成本，一份数据写三份，跨数据中心存储，确保数据存储和访问安全。</p>
    </div>
    <div class="choice3" :style="{display:activeDisplay3 = 'none'}">
      <img src="../images/安全防护.png">
      <p>安全防护：专业级 DDoS 防护体系，多协议、多线路支持，一键接入，灵活计费。</p>
    </div>
    <div class="choice4" :style="{display:activeDisplay4 = 'none'}">
      <img src="../images/云处理.png">
      <p>云处理：WebP、H.265、窄带高清等功能，便捷便宜。日均超 10 亿次处理请求，可靠性高达99.9999%</p>
    </div>
    <div class="choice5" :style="{display:activeDisplay5 = 'none'}">
      <img src="../images/证书.png">
      <p>HTTPS/SSL证书：国际顶级 CA 机构合作，申购方便，极速签发，一键部署，更快更安全。</p>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'items',
  data () {
    return {
      isActive: true,
      activeDispaly1: 'block',
      activeDispaly2: 'none',
      activeDispaly3: 'none',
      activeDispaly4: 'none',
      activeDispaly5: 'none'
    }
  },
  methods: {
    mouseEnter1 () {
      this.isActive = !this.isActive
      this.activeDisplay1 = 'block'
    },
    mouseLeave1 () {
      this.isActive = !this.isActive
      this.activeDisplay1 = 'none'
    }
  }
})
</script>

<style>
.change {
  width:100%;
  height:53%;
  margin-top:40px;
  text-align:center;
}
.items {
  width:900px;
  height:80px;
  margin:0 auto;
}
.item1, .item2, .item3, .item4, .item5 {
  float:left;
  margin-left:20px;
  margin-right:20px;
}
.el-button--primary.is-plain {
  height:45px;
  width:140px;
  background-color:#FFFFFF;
  color:#BBBBBB;
  border-color:#BBBBBB;
}
.el-button--primary.is-plain:hover {
  background-color:#FFFFFF;
  color:#01AEE6;
  border-color:#01AEE6;
}
.choice1, .choice2, .choice3, .choice4, .choice5 {
  margin-top:50px;
  width:100%;
}
.choice1, .choice2, .choice3, .choice4, .choice5  img {
  margin-bottom:50px;
}
.choice1, .choice2, .choice3, .choice4, .choice5  p {
  font-weight:lighter;
  width:50%;
  margin:0 auto;
}
</style>
