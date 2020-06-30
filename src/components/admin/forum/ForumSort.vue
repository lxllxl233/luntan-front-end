<template>
  <div class="block">
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple" align="center">
        <h1>一级分类</h1>
        <div>
          <el-button type="primary" plain @click="submitV1">增加一级分类</el-button>
        </div>
        <el-divider></el-divider>
        <div v-for="(opt,index) in option">
          <el-row>
            <el-col :span="12"><div class="grid-content bg-purple" align="right">
              {{opt.label}}
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
              <el-button type="danger" icon="el-icon-delete" circle @click="deleteV1(opt.value)"></el-button>
              <el-button type="success" icon="el-icon-check" circle @click="checkV1(index,opt.value)"></el-button>
            </div></el-col>
          </el-row>
          <el-divider></el-divider>
        </div>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light" align="center">
        <h1>二级分类</h1>
        <el-button type="primary" plain @click="submitV2">增加二级分类</el-button>
        <el-divider></el-divider>
        <div v-for="opt in v2List">
          <el-row>
            <el-col :span="12"><div class="grid-content bg-purple" align="right">
              {{opt.label}}
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
              <el-button type="danger" icon="el-icon-delete" circle @click="deleteV2(opt.value)"></el-button>
            </div></el-col>
          </el-row>
          <el-divider></el-divider>
        </div>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    inject: ['reload'],
    created() {
      this.getAllBlogCatalog()
    },
    name: "BlogSort",
    data(){
      return {
        option: [],
        currentIndex: -1,
        currentV1: -1,
        v2List: []
      }
    },
    methods: {
      getAllBlogCatalog: function () {
        this.$http.get("/api/user/getAllForumCatalog").then(
          (response) => {
            console.log(response)
            let data = []
            data = response.data.data;
            let dt = new Array()
            data.forEach(dataKey => {
              let id = dataKey.tbForumCatalogV1.id;
              let name = dataKey.tbForumCatalogV1.name;
              let arr = new Array()
              if (null != dataKey.tbForumCatalogV2List) {
                dataKey.tbForumCatalogV2List.forEach(optionKey => {
                  let id1 = optionKey.id;
                  let name1 = optionKey.name;
                  console.log(name1)
                  arr.push({"value": id1, "label": name1})
                })
              }
              dt.push({"value":id,"label":name,"children":arr})
            })
            this.option = dt
            console.log(this.option)
          }, (err) => {
            console.log(err)
          }
        )
      },
      submitV1(){
        this.$prompt('请输入要添加的一级分类名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          this.$http.get("/api/admin/addForumCatalogV1?name="+value).then(
            (response)=>{
              this.refresh()
            },(err)=>{
              console.log(err)
            }
          )
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      submitV2(){
        if (this.currentV1 == -1){
          this.$message("请选择你的 v1")
          return;
        }
        this.$prompt('请输入要添加的二级分类名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          this.$http.get("/api/admin/addForumCatalogV2?name="+value+"&v1Id="+this.currentV1).then(
            (response)=>{
              this.$message("添加成功")
              this.refresh()
            },(err)=>{
              this.$message("添加失败")
              console.log(err)
            }
          )
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      deleteV1(v1Id){
        this.$http.get("/api/admin/deleteForumCatalogV1?id="+v1Id).then(
          (response)=>{
            this.refresh()
            this.$message("删除成功")
          },(err)=>{
            this.$message("删除失败")
          }
        )
      },
      checkV1(index,v1Id){
        this.currentV1 = v1Id
        this.currentIndex = index
        this.v2List = this.option[index].children
      },
      deleteV2(v2Id){
        this.$http.get("/api/admin/deleteForumCatalogV2?id="+v2Id).then(
          (response)=>{
            this.refresh()
            this.$message("删除成功")
          },(err)=>{
            this.$message("删除失败")
          }
        )
      },
      refresh () {
        this.reload()
      }
    }
  }
</script>

<style scoped>

</style>
