<template>
  <div id="app">
<el-container>
  <el-header>
    <el-menu
      router="true"
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/login">首页</el-menu-item>
      <el-menu-item index="/blogMain">博客</el-menu-item>
      <el-menu-item index="/lunTanMain">论坛</el-menu-item>
      <el-submenu index="4">
        <template slot="title">网站工具</template>
        <el-menu-item index="4-1">自动化爬虫(施工中...)</el-menu-item>
        <el-menu-item index="4-2">json在线格式化</el-menu-item>
        <el-menu-item index="4-3">常见算法演示</el-menu-item>
      </el-submenu>
      <el-menu-item index="#"><el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        网站公共聊天室
      </el-button>

        <el-drawer
          title="公共聊天站"
          :visible.sync="drawer"
          size="50%">
          <div>
            <el-button @click="innerDrawer = true">我的信息</el-button>
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
              <el-container>

                <el-header>
                  <el-divider content-position="center">
                    <div class="demo-basic--circle">
                      <div class="block"><el-avatar :size="50" :src="userInfo.userHeadimg"></el-avatar></div>
                    </div>
                  </el-divider>
                  <div align="center">
                  <i class="el-icon-edit"></i>
                  <el-link type="info" @click="editUserInfo=true">编辑个人信息</el-link>
                    <el-dialog title="编辑个人信息" :visible.sync="editUserInfo" width="50%" style="z-index: 999" center append-to-body="true">
                      <span>
                        <el-form ref="form" :model="form" label-width="80px" v-if="isEditInfo">
                          <el-form-item>
                            <!--上传文件-->
                            <el-upload action="#" :http-request="myUpload" list-type="picture-card" :auto-upload="true">
                                <i slot="default" class="el-icon-plus"></i>
                                <div slot="file" slot-scope="{file}">
                                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                                  <span class="el-upload-list__item-actions">
                                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                      <i class="el-icon-zoom-in"></i>
                                    </span>
                                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                      <i class="el-icon-download"></i>
                                    </span>
                                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                      <i class="el-icon-delete"></i>
                                    </span>
                                  </span>
                                </div>
                            </el-upload>
                          </el-form-item>
                          <el-form-item>
                            <el-input placeholder="修改姓名" v-model="form.username"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-input placeholder="修改昵称" v-model="form.nickname"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-input placeholder="修改个人介绍" v-model="form.userIntroduction"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-divider content-position="center">
                              <el-button type="primary" @click="onSubmit">确认修改</el-button>
                              <el-button @click="toEditInfo">切换到修改密码</el-button>
                            </el-divider>
                          </el-form-item>
                        </el-form>

                        <el-form ref="form" :model="form" label-width="80px" v-if="!isEditInfo">
                          <el-form-item>
                            <el-input placeholder="请输入修改前密码" v-model="form.username"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-input placeholder="请输入修改后密码" v-model="form.nickname"></el-input>
                          </el-form-item>
                           <el-form-item>
                            <el-input placeholder="请再次输入修改后密码" v-model="form.nickname"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-divider content-position="center">
                              <el-button type="primary" @click="onSubmit">立即修改密码</el-button>
                              <el-button @click="toEditInfo">切换到修改个人信息</el-button>
                            </el-divider>
                          </el-form-item>
                        </el-form>
                      </span>
                    </el-dialog>
                </div>
                </el-header>
                <el-main>
                  <el-divider content-position="center">
                    姓名
                  </el-divider>
                  <div align="center">{{userInfo.username}}</div>
                  <el-divider content-position="center">
                    昵称
                  </el-divider>
                  <div align="center">{{userInfo.nickname}}</div>
                  <el-divider content-position="center">
                    个人介绍
                  </el-divider>
                  <div align="center">{{userInfo.userIntroduction}}</div>
                  <el-divider content-position="center">
                    操作
                  </el-divider>
                  <el-row>
                    <el-col :span="12">
                      <div class="grid-content bg-purple" align="center">
                      <el-button type="success" round @click="toWriteBlog">发布博客</el-button>
                    </div></el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-light" align="center">
                      <el-button type="success" @click="toLunTanPage" round>发布论坛</el-button>
                    </div></el-col>
                  </el-row>

                </el-main>
              </el-container>
            </el-drawer>
          </div>
        </el-drawer></el-menu-item>
      <el-menu-item>
        <el-button type="text" @click="centerDialogVisible = true" v-if="isNotLogin">登录/注册</el-button>

        <el-dialog title="登录/注册" :visible.sync="centerDialogVisible" width="45%" center="false">
          <span>
            <el-form ref="form" :model="form" label-width="80px" v-if="isRegistered">
              <el-form-item>
                <el-input placeholder="大侠留个姓名吧" v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="留个昵称" v-model="form.nickname"></el-input>
              </el-form-item>
                 <el-form-item>
                <el-input placeholder="填个电话" v-model="form.userPhone"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请输入密码" v-model="form.userPassword"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请再次输入密码" v-model="form.userPassword"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="最后,一句话介绍一下自己吧" v-model="form.userIntroduction"></el-input>
              </el-form-item>
              <el-form-item>
                <el-divider content-position="center">
                  <el-button type="primary" @click="onRegistered">立即注册</el-button>
                  <el-button @click="toLogin">切换到登录</el-button>
                </el-divider>
              </el-form-item>
            </el-form>

            <el-form ref="form" :model="loginForm" label-width="80px" v-if="!isRegistered">
              <el-form-item>
                <el-input placeholder="请输入手机号" v-model="loginForm.userPhone"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请输入密码" v-model="loginForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-divider content-position="center">
                  <el-button type="primary" @click="onLogin">立即登录</el-button>
                  <el-button @click="toLogin">切换到注册</el-button>
                </el-divider>
              </el-form-item>
            </el-form>
          </span>
        </el-dialog>
      </el-menu-item>

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
      form: {
        username: "",
        nickname: "",
        userPhone: "",
        userPassword: "",
        userIntroduction: ""
      },
      loginForm: {
        userPhone: "",
        password: ""
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      userInfo: {
        username: "",
        nickname: "",
        userHeadimg: "",
        userIntroduction: ""
      },
      changeUserInfo: {
        id: 0,
        nickname: "",
        userHeadimg: "",
        userIntroduction: "",
        username: ""
      },
        //是否修改个人信息
      isEditInfo: true,
      //是否登录
      isNotLogin: true,
      //注册还是登录
      isRegistered: true,
      centerDialogVisible: false,
      editUserInfo: false,
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
      done()
    },
    load () {
      if (this.count > 10){
        this.count+=1
      }else {
        this.count += 2
      }
    },
    onSubmit() {
      console.log('submit!');
    },
    toLogin(){
      this.isRegistered = !this.isRegistered
    },
    toWriteBlog(){
      this.$router.replace("/writeBlog")
    },
    toWriteLunTan(){
      this.isRegistered = !this.isRegistered
    },
    toLunTanPage(){
      this.$router.replace("/lunTanEdit")
    },
    toEditInfo(){
      this.isEditInfo = !this.isEditInfo
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {

    },
    //登录函数
    onLogin(){
      this.$http.post("/user/userLogin",this.loginForm).then(
        (response)=>{
          this.$message(response.data.msg);
          localStorage.setItem("token",response.data.data.token)
          localStorage.setItem("userId",response.data.data.userId)
          this.$http.get("/user/lookUserInfo?userPhone="+this.loginForm.userPhone).then(
            (res)=>{
              let data = res.data.data;
              this.userInfo.username = data.username
              this.userInfo.nickname = data.nickname
              this.userInfo.userHeadimg = data.userHeadimg
              this.userInfo.userIntroduction = data.userIntroduction
              this.centerDialogVisible = false
            },
            (err)=>{
              console.log(err)
            }
          )
        },(err)=>{
          console.log(err)
        }
      )
    },
    //注册函数
    onRegistered(){
      this.$http.post("/user/userRegistered",this.form).then(
        (response)=>{
          this.$message(response.data.msg);
        },
        (err)=>{
        }
      )
    },
    myUpload(content){
      var form = new FormData();
      form.append("file", content.file);
      form.append("fileName",content.file.name)
      this.$http.post("/upload/uploadFile", form).then(res=>{
        if(res.data.code != 200) {
          content.onError('文件上传失败, code:' + res.data.code)
        } else {
          this.changeUserInfo.userHeadimg = res.data.data
        }
      }).catch(error=>{
        if (error.response) {
          content.onError('文件上传失败,' + error.response.data);
        } else if(error.request) {
          content.onError('文件上传失败，服务器端无响应')
        } else {
          content.onError('文件上传失败，请求封装失败')
        }
      })
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
