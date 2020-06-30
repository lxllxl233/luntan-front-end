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
        无
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
      created() {
        this.$http.post("/api/admin/getAllAdmin").then(
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
        lookLunTan: function (lunTanId) {
          this.$router.push({path:'/lunTanPage/'+lunTanId})
        }
      }
    }
</script>

<style scoped>

</style>
