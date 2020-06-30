<template>
  <main>
    <div align="center">
      <h1>与此关键词有关的用户</h1>
    </div>
    <div v-for="user in userList" :key="user">
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple" align="center">
          <div class="block"><el-avatar :size="100" :src="user.userHeadimg"></el-avatar></div>
          <div>
            <h5>{{user.username}}</h5>
          </div>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">
          <h5>{{user.nickname}}</h5>
          <div>
            用户介绍:{{user.userIntroduction}}
          </div>
          <div>
            用户注册时间:{{user.createTime}}
          </div>
        </div></el-col>

      </el-row>
      <el-divider></el-divider>
    </div>

    <div align="center">
      <h1>与此关键词有关的博客</h1>
    </div>

    <div>
      <el-row v-for="(o, index) in blogList" :key="o" >
        <el-col :span="8"><div class="grid-content bg-purple" align="right">
          <i class="el-icon-paperclip"></i>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">
          <div style="padding: 14px;">
            <div>{{o.title}}</div>
            <div>发布时间:<time class="time">{{ o.createTime }}</time></div>
            <div>
              <el-button type="text" class="button" @click="lookBlog(o.id)">查看博客</el-button>
            </div>
          </div>
        </div></el-col>
      </el-row>
    </div>
    <el-divider></el-divider>

    <div align="center">
      <h1>与此关键词有关的论坛</h1>
    </div>
    <div>
      <el-row v-for="(o, index) in forumList" :key="o" >
        <el-col :span="8"><div class="grid-content bg-purple" align="right">
          <i class="el-icon-paperclip"></i>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">
          <div style="padding: 14px;">
            <div class="bottom clearfix">
            <el-button type="text" class="button" @click="lookLunTan(o.id)">查看论坛</el-button>
          </div>
            <div>{{o.title}}</div>
            <div>发布时间：<time class="time">{{ o.createTime }}</time></div>

          </div>
        </div></el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
  </main>
</template>

<script>
    export default {
        inject: ['reload'],
        created() {
          let name = this.$route.params.searchName
          this.$http.get("/api/user/searchAll?searchName="+name).then(
            (response)=>{
              let data = response.data.data;
              this.userList = data.tbUsers
              this.blogList = data.tbBlogs
              this.forumList = data.tbForums
            },(err)=>{
              console.log(err)
            }
          )
        },
        name: "SearchResult",
        props: {
          searchName: ""
        },
      data(){
          return {
            userList: [],
            blogList: [],
            forumList: []
          }
      },
      methods: {
        lookBlog: function (blogId) {
          this.$router.push({path:'/blogPage/'+blogId})
        },
        lookLunTan: function (lunTanId) {
          this.$router.push({path:'/lunTanPage/'+lunTanId})
        },
        refresh () {
          this.reload()
        }
      }
    }
</script>

<style scoped>

</style>
