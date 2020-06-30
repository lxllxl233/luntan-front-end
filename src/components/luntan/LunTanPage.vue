<template>

  <el-container>
    <el-main>
      <el-page-header @back="goBack" content="论坛详情">
      </el-page-header>

      <h1 align="center">{{luntan.title}}</h1>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple">
          <div align="center">
            <img :src="mainInfo.userHeadimg" style="width: 40px;height: 40px">
            <div>{{mainInfo.nickname}}</div>
          </div>
        </div></el-col>
        <el-divider direction="vertical"></el-divider>
        <el-col :span="20"><div class="grid-content bg-purple-light">
          <div v-html="luntan.text"></div>
          <div>
`         <el-row>
            <el-col :span="20"><div class="grid-content bg-purple">
              <el-input v-model="input" placeholder="请输入友善的评论"></el-input>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light" align="center">
              <el-button type="success" round @click="commitToLouZu">提交</el-button>
            </div></el-col>
          </el-row>
          </div>
        </div></el-col>
      </el-row>
      <el-divider></el-divider>
      <div v-for="(com,index) in lunTanCommit" :key="com">
        <el-row>
          <el-col :span="4"><div class="grid-content bg-purple">
            <div align="center">
              <div>#{{index+1}}楼</div>
              <div>发布时间</div>
              <div>{{com.p1.createTime}}</div>
            </div>
          </div></el-col>
          <el-divider direction="vertical"></el-divider>
          <el-col :span="20"><div class="grid-content bg-purple-light">
            <div>
              {{com.p1.text}}
            </div>
            <div>
              <i class="el-icon-edit"></i>
              <template>
                <el-button type="text" @click="open(com.p1.id)">回复楼主</el-button>
              </template>
            </div>
            <el-divider></el-divider>
            <div v-for="(p2,ind) in com.p2List">
              <el-row>
                <el-col :span="4"><div class="grid-content bg-purple">
                  <div>##{{ind+1}}楼</div>
                  <div>发布时间</div>
                  <div>{{p2.createTime}}</div>
                </div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">
                  {{p2.text}}
                </div></el-col>
              </el-row>
              <el-divider></el-divider>
            </div>
          </div></el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "",
        props: {
          id: 0
        },
        created() {
          let id = this.$route.params.id;
          //获取带参数的论坛
          this.$http.get("/api/forum/getLunTanById?forumId="+id).then(
            (response)=>{
              this.luntan = response.data.data
              console.log("信息")
              console.log(this.luntan.userId)
              //获取论坛主信息
              this.$http.get("/api/user/lookUserInfoById?userId="+this.luntan.userId).then(
                (resp)=>{
                  this.mainInfo = resp.data.data
                },(err)=>{
                  console.log(err)
                }
              )
            },(err)=>{
              console.log(err)
            }
          )
          this.myCommit.userId = localStorage.getItem("userId")
          //获取论坛讨论
          this.$http.get("/api/forum/getComment?forumId="+id).then(
            (response)=>{
              this.lunTanCommit = response.data.data
            },(err)=>{
              console.log(err)
            }
          )
        },
        data() {
          return {
            input: "",
            currentDate: new Date(),
            lunTanCommit: [],
            luntan: {},
            mainInfo: {},
            myCommit: {
              "bUserId": 0,
              "forumId": 0,
              "pId": 0,
              "text": "",
              "userId": 0
            }
          };
        },
        methods: {
          goBack() {
            this.$router.push("/")
          },
          open(bUserId) {
            this.$prompt('请输入回复的内容', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
            }).then(({ value }) => {
              this.myCommit.userId = localStorage.getItem("userId")
              this.myCommit.forumId = this.$route.params.id;
              this.myCommit.pId = 1;
              this.myCommit.text = value;
              this.myCommit.bUserId = bUserId;
              //提交博客评论
              this.$http.post("/api/forum/postComment",this.myCommit).then(
                (response)=>{
                  console.log(response)
                  this.$message(response.data.msg);
                },(err)=>{
                  console.log(err)
                }
              )
              this.$message({
                type: 'success',
                message: '提交成功'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '提交失败'
              });
            });
          },
          //回复楼主
          commitToLouZu(){
            this.myCommit.userId = localStorage.getItem("userId")
            this.myCommit.forumId = this.$route.params.id;
            this.myCommit.pId = 0;
            this.myCommit.text = this.input;
            this.myCommit.bUserId = 0;
            //提交博客评论
            this.$http.post("/api/forum/postComment",this.myCommit).then(
              (response)=>{
                console.log(response)
                this.$message("发布成功");
              },(err)=>{
                console.log(err)
              }
            )
          }
        }
    }
</script>

<style scoped>

</style>
