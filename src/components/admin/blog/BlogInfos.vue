<template>
  <div>
    <el-row v-for="(o, index) in blogList" :key="o" >
      <el-col :span="1"><div class="grid-content bg-purple">
        <i class="el-icon-paperclip"></i>
      </div></el-col>
      <el-col :span="23"><div class="grid-content bg-purple-light">
        <div style="padding: 14px;">
          <div>{{o.title}}</div>
          <div>发布时间:<time class="time">{{ o.createTime }}</time></div>
          <div class="bottom clearfix">
            <el-button type="text" class="button" @click="lookBlog(o.id)">查看博客</el-button>
            <el-button type="text" class="button" @click="deleteBlog(o.id)">删除博客</el-button>
          </div>
        </div>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    created() {
      this.$http.post("/api/admin/getAllBlog").then(
        (response)=>{
          console.log(response.data.data)
          this.blogList = response.data.data
        },(err)=>{
          console.log(err)
        }
      )
    },
    name: "AdminInInfos",
    data() {
      return {
        blogList: []
      }
    },
    methods: {
      lookBlog: function (blogId) {
        this.$router.push({path:'/blogPage/'+blogId})
      },
      deleteBlog(blogId){
        this.$http.get("/api/admin/deleteBlog?blogId="+blogId).then(
          (response)=>{
            this.$http.post("/api/admin/getAllBlog").then(
              (response)=>{
                console.log(response.data.data)
                this.blogList = response.data.data
              },(err)=>{
                console.log(err)
              }
            )
            this.$message("删除成功")
          },(err)=>{
            this.$message("删除失败")
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
