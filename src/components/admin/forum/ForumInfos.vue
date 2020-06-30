<template>
  <div>
    <el-row v-for="(o, index) in lunTanList" :key="o" >
      <el-col :span="1"><div class="grid-content bg-purple">
        <i class="el-icon-paperclip"></i>
      </div></el-col>
      <el-col :span="23"><div class="grid-content bg-purple-light">
        <div style="padding: 14px;">
          <div>{{o.title}}</div>
          <div>发布时间：<time class="time">{{ o.createTime }}</time></div>
          <div class="bottom clearfix">
            <el-button type="text" class="button" @click="lookLunTan(o.id)">查看论坛</el-button>
            <el-button type="text" class="button" @click="deleteLunTan(o.id)">删除论坛</el-button>
          </div>
        </div>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    created() {
      this.$http.post("/api/admin/getAllForum").then(
        (response)=>{
          console.log(response.data.data)
          this.lunTanList = response.data.data
        },(err)=>{
          console.log(err)
        }
      )
    },
    name: "AdminInInfos",
    data() {
      return {
        lunTanList: []
      }
    },
    methods: {
      deleteLunTan(lunTanId){
        this.$http.get("/api/admin/deleteForum?forumId="+lunTanId).then(
          (response)=>{
            this.$http.post("/api/admin/getAllForum").then(
              (response)=>{
                console.log(response.data.data)
                this.lunTanList = response.data.data
              },(err)=>{
                console.log(err)
              }
            )
            this.$message("删除成功")
          },(err)=>{
            this.$message("删除失败")
          }
        )
      },
      lookLunTan: function (lunTanId) {
        this.$router.push({path:'/lunTanPage/'+lunTanId})
      }
    }
  }
</script>

<style scoped>

</style>
