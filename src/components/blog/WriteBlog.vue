<template>

  <el-container>
    <el-header>
      <el-divider content-position="center">
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="40" :src="circleUrl"></el-avatar></div>
      </div>
      </el-divider>
    </el-header>
    <el-main>
      <div>
        <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px"/>
        <el-row :gutter="20">
          <el-divider content-position="center"> <el-button type="text" @click="dialogVisible = true">提交文章</el-button></el-divider>
        </el-row>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <el-input v-model="blog.title" placeholder="请输入博客标题"></el-input>
          <div class="block">
            <el-cascader v-model="value" :options="option" :props="{ expandTrigger: 'hover' }" placeholder="请输入分类" @change="handleChange">
            </el-cascader>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">提交</el-button>
          </span>
        </el-dialog>
      </div>
    </el-main>
  </el-container>


</template>

<script>
  export default {
    created() {
      this.getAllBlogCatalog()
      let userId = localStorage.getItem(`userId`)
      this.$http.get("/api/user/lookUserInfoById?userId="+userId).then(
        (response)=>{
          let data = response.data.data
          this.circleUrl = data.userHeadimg
        },(err)=>{

        }
      )
    },
    data() {
      return {
        value: [],
        option: [],
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        content:'', // 输入的markdown
        html:'',    // 及时转的html
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        dialogVisible: false,
        blog: {
          text: "",
          title: "",
          userId: 0,
          v2Id: 0
        }
      }
    },
    methods: {
      // 所有操作都会被解析重新渲染
      change(value, render){
        // render 为 markdown 解析后的结果[html]
        this.html = render;
      },
      getAllBlogCatalog: function () {
        this.$http.get("/api/user/getAllBlogCatalog").then(
          (response) => {
            let data = []
            data = response.data.data;
            let dt = new Array()
            data.forEach(dataKey => {
              let id = dataKey.value.id;
              let name = dataKey.value.name;
              let arr = new Array()
              if (null != dataKey.option) {
                dataKey.option.forEach(optionKey => {
                  let id1 = optionKey.id;
                  let name1 = optionKey.name;
                  arr.push({"value": id1, "label": name1})
                })
              }
              dt.push({"value":id,"label":name,"children":arr})
            })
              this.option = dt
            console.log(this.option)
          }, (err) => {

          }
        )
      },
      handleChange(value) {
        this.blog.v2Id = value[1]
      },
      submit(){
        this.blog.userId = localStorage.getItem("userId")
        this.blog.text = this.html
        this.$http.post("/api/blog/releaseBlog",this.blog).then(
          (response)=>{
            this.$message(response.data.msg);
            this.dialogVisible = false
          },(err)=>{
            this.dialogVisible = false
            console.log(err)
          }
        )
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
