<template>

  <el-container>
    <el-container>
      <el-aside width="600px" style="height: 800px">
        <el-col :span="12">
          <el-divider content-position="center">博客分类展示</el-divider>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu v-for="catalog in catalogList" :key="catalog.id" :index="catalog.value.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{catalog.value.name}}</span>
              </template>

              <el-menu-item-group v-for="catalogV2 in catalog.option" :key="catalogV2.id">
                <el-menu-item :index="catalog.value.id +'-'+ catalogV2.id" @click="getBlogs(catalogV2.id)">{{catalogV2.name}}</el-menu-item>
              </el-menu-item-group>

            </el-submenu>

          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-main>

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
                  </div>
                </div>
              </div></el-col>
            </el-row>
          </div>


        </el-main>
      </el-container>
    </el-container>
  </el-container>


</template>

<script>
    export default {
      name: "blogMain",
      created() {
        this.getAllBlogCatalog()
      },
      data() {
          return {
            currentDate: new Date(),
            catalogList: [],
            blogList: []
          };
        },
        methods: {
          getAllBlogCatalog: function () {
            this.$http.get("/api/user/getAllBlogCatalog").then(
              (response) => {
                let data = response.data.data;
                this.catalogList = data
                console.log(data)
              }, (err) => {

              }
            )
          },
          getBlogs: function (v2Id) {
            console.log(v2Id)
            this.$http.get("/api/blog/getV2Blog?v2Id="+v2Id).then(
              (response)=>{
                console.log(response.data.data)
                this.blogList = response.data.data

              },(err)=>{
                console.log(err)
              }
            )
          },
          lookBlog: function (blogId) {
            this.$router.push({path:'/blogPage/'+blogId})
          }
        }
    }
</script>
