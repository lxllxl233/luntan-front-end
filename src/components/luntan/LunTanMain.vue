<template>

  <el-container>
    <el-container>
      <el-aside width="600px">
        <el-col :span="12">
          <el-divider content-position="center">论坛分类展示</el-divider>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu v-for="catalog in catalogList" :key="catalog.id" :index="catalog.tbForumCatalogV1.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{catalog.tbForumCatalogV1.name}}</span>
              </template>

              <el-menu-item-group v-for="catalogV2 in catalog.tbForumCatalogV2List" :key="catalogV2.id">
                <el-menu-item :index="catalog.tbForumCatalogV1.id +'-'+ catalogV2.id">{{catalogV2.name}}</el-menu-item>
              </el-menu-item-group>

            </el-submenu>

          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-main>


          <el-row v-for="i in 3" :key="i">
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="image">
                <div style="padding: 14px;">
                  <span>论坛</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">查看论坛</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>



        </el-main>
      </el-container>
    </el-container>
  </el-container>


</template>

<script>
  export default {
    name: "",
    created() {
      this.getAllForumCatalog()
    },
    data() {
      return {
        currentDate: new Date(),
        catalogList: []
      };
    },
    methods: {
      getAllForumCatalog: function () {
        this.$http.get("/api/user/getAllForumCatalog").then(
          (response) => {
            let data = response.data.data;
            this.catalogList = data
            console.log(data)
          }, (err) => {

          }
        )
      }
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
