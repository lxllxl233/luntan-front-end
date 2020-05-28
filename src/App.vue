<template>
  <div id="app">
<el-container>
  <el-header>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">博客</template>
        <el-menu-item index="2-1">热门</el-menu-item>
        <el-menu-item index="2-2">分类</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">论坛</template>
        <el-menu-item index="3-1">热门</el-menu-item>
        <el-menu-item index="3-2">分类</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">网站工具</template>
        <el-menu-item index="4-1">自动化爬虫(施工中...)</el-menu-item>
        <el-menu-item index="4-2">json在线格式化</el-menu-item>
        <el-menu-item index="4-3">常见算法演示</el-menu-item>
      </el-submenu>
      <el-menu-item index="5"><el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        网站公共聊天室
      </el-button>

        <el-drawer
          title="公共聊天站"
          :visible.sync="drawer"
          size="50%">
          <div>
            <el-button @click="innerDrawer = true">登录/注册</el-button>
            <p>
              <el-container>
                <el-header>
                  <el-alert
                    title="连接聊天室成功"
                    type="success">
                  </el-alert>
                </el-header>
                <el-main>

                  <!-- 无限滚动条 -->
                  <template>
                    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                      <li v-for="i in count" class="infinite-list-item">
                        <el-container>
                          <el-aside width="50px">
                              <span class="demo-basic--circle">
                                <span class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></span>
                              </span>
                          </el-aside>

                          <el-container>
                            <el-header height="10px" style="font-size: 8px;">
                              player
                            </el-header>
                            <el-main >
                              <el-tag type="label"  effect="dark">{{i}}</el-tag>
                            </el-main>
                          </el-container>
                        </el-container>
                      </li>
                    </ul>
                  </template>

                </el-main>
                <el-footer>
                  <el-input
                    type="textarea"
                    autosize
                    placeholder="请输入内容"
                    v-model="textarea1">
                  </el-input>
                  <div style="margin: 20px 0;"></div>
                </el-footer>
              </el-container>
            </p>
            <el-drawer
              title="我的信息"
              :append-to-body="true"
              :before-close="handleClose"
              :visible.sync="innerDrawer">
              <p>
                _(:зゝ∠)_
              </p>
            </el-drawer>
          </div>
        </el-drawer></el-menu-item>
    </el-menu>
  </el-header>
  <router-view></router-view>
  <el-footer>
    <el-row :gutter="20">
      <el-divider content-position="center">2020 lxl @<el-link href="https://github.com/lxllxl233" type="success">Github</el-link>.com</el-divider>
    </el-row>
  </el-footer>
</el-container>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {

    return {
      count: 0,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      textarea1: '',
      activeIndex: '1',
      activeIndex2: '1',
      drawer: false,
      innerDrawer: false,
      imgUrls: [
        "https://images.pexels.com/photos/247421/pexels-photo-247421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/292426/pexels-photo-292426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //内层关闭事件
    handleClose(done) {
      this.$confirm('还有未保存的工作哦确定关闭吗？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    load () {
      if (this.count > 10){
        this.count+=1
      }else {
        this.count += 2
      }

    }
  }
}
</script>

<style>
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

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .infinite-list{
    height:400px;
  }
  .infinite-list-item{
    height:100px;
  }
</style>
