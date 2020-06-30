<template>
  <el-table
    :data="adminData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="用户id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="用户昵称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名">
    </el-table-column>
    <el-table-column
      prop="userPhone"
      label="用户手机号">
    </el-table-column>
    <el-table-column
      prop="userHeadimg"
      label="用户头像">
      <template slot-scope="scope">
        <el-image style="width: 40px;height: 40px" :src="scope.row.userHeadimg"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="userIntroduction"
      label="自我介绍">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="用户创建时间">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <div>
          <el-button type="text" size="small" @click="deleteUser(scope.row.id)">删除</el-button>
        </div>
        <div>
          <el-button type="text" size="small" @click="initUserPassword(scope.row.id)">重置密码</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    created() {
      this.$http.post("/api/admin/getAllUser").then(
        (response)=>{
          this.adminData = response.data.data
        },(err)=>{

        }
      )
    },
    name: "AdminInInfos",
    data() {
      return {
        adminData: ""
      }
    },
    methods: {
      deleteUser(userId){
        this.$http.get("/api/admin/deleteUser?userId="+userId).then(
          (response)=>{
            console.log(response)
            this.$message("删除成功");
          },(err)=>{
            console.log(err)
            this.$message("删除失败");
          }
        )
      },
      initUserPassword(userId){
        this.$http.get("/api/admin/initUserPassword?userId="+userId).then(
          (response)=>{
            console.log(response)
            this.$message("初始化成功");
          },(err)=>{
            console.log(err)
            this.$message("初始化失败");
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
