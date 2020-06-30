<template>
  <el-container>

    <el-main>
      <el-page-header @back="goBack" content="博客详情"></el-page-header>

      <div class="block">
        <el-image style="width: 100%; height: 500px" :src="src"></el-image>
      </div>

      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple">>>></div></el-col>
        <el-col :span="16">
          <div v-html="htmlMD"></div>
          <div class="grid-content bg-purple">
          </div>
        </el-col>
        <el-col :span="4"><div class="grid-content bg-purple"><<<</div></el-col>
      </el-row>

      <el-row>
        <el-col :span="20"><div class="grid-content bg-purple">
          <el-input type="textarea" autosize="true" placeholder="觉得不错,发个评论呗..............." v-model="comment"></el-input>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light" align="center">
          <el-button type="success" @click="submitComment" round>提交评论</el-button>
        </div></el-col>
      </el-row>

      <div v-for="(one,index) in comments" :key="one">
        <el-row>
          <el-col :span="4"><div class="grid-content bg-purple">
            <div style="color: #99a9bf" align="center">
              #{{index+1}}楼 - 发布时间:{{one.p1.createTime}}
            </div>
          </div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple-light">
            <div>
              <div>
                <el-row>
                    <div>
                      {{one.p1.text}}
                    </div>
                    <div>
                      <i class="el-icon-edit"></i>
                      <template>
                        <el-button type="text" @click="open(one.p1.id)">回复楼主</el-button>
                      </template>
                    </div>
                </el-row>
              </div>
            </div>

            <div v-for="(p2,inx) in one.p2List">
              <el-row>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <div style="color: #99a9bf" align="left">
                    ##{{inx+1}}楼 - 发布时间:{{p2.createTime}}
                  </div>
                </div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple-light">
                  <div>
                    {{p2.text}}
                  </div>
                </div></el-col>
              </el-row>
            </div>

          </div></el-col>
        </el-row>
      </div>
    </el-main>

  </el-container>
</template>

<script>
  import Login from "../login/Login";
  export default {
    name: "",
    props: {
      id: 0
    },
    created() {
      let id = this.$route.params.id;
      //获取带参数的博客
      this.$http.get("/api/blog/getBlogById?blogId="+id).then(
        (response)=>{
          console.log(response.data.data)
          this.htmlMD = response.data.data.text
        },(err)=>{

        }
      )
      //获取博客评论
      this.$http.get("/api/blog/getComment?blogId="+id).then(
        (response)=>{
          this.comments = response.data.data
          console.log(this.comments)
        },(err)=>{
          console.log(err)
        }
      )
    },
    data() {
      return {
        activeNames: ['1'],
        input: "",
        visible: false,
        title: "",
        comment: '',
        comments: [], //博客评论存放数组
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        content:'', // 输入的markdown
        html:'',    // 及时转的html
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        htmlMD: "",
        commentRequest: {
          bUserId: 0, //回复评论的id
          blogId: 0,
          pId: 0,
          text: "string",
          userId: 0
        }
      }
    },
    components: [Login],
    methods: {
      goBack() {
        this.$router.push("/")
      },
      //提交博客评论
      submitComment(){
        this.commentRequest.userId = localStorage.getItem("userId")
        this.commentRequest.blogId = this.$route.params.id;
        this.commentRequest.pId = 0;
        this.commentRequest.text = this.comment;
        this.commentRequest.bUserId = 0;
        //提交博客评论
        this.$http.post("/api/blog/releaseComment",this.commentRequest).then(
          (response)=>{
            console.log(response)
            this.$message(response.data.msg);
          },(err)=>{
            console.log(err)
          }
        )
      },
      open(bUserId) {
        this.$prompt('请输入回复的内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.commentRequest.userId = localStorage.getItem("userId")
          this.commentRequest.blogId = this.$route.params.id;
          this.commentRequest.pId = 1;
          this.commentRequest.text = value;
          this.commentRequest.bUserId = bUserId;
          //提交博客评论
          this.$http.post("/api/blog/releaseComment",this.commentRequest).then(
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
      }
    }
  }
</script>

