<template>
  <div>
  <el-container >
    <el-main>
      <el-container>
        <el-container>
          <el-main>
            <template>
              <el-carousel indicator-position="outside" height="500px">
                <el-carousel-item v-for="item in imgUrls"  :key="item">
                  <el-image
                    style="width: 1880px; height: 500px"
                    :src="item"
                    fit="cover"></el-image>
                </el-carousel-item>
              </el-carousel>
            </template>
          </el-main>
        </el-container>
      </el-container>
    </el-main>

  </el-container>
  <el-container>
    <el-main>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item>
          <template slot="title">
            <el-divider content-position="center">
              <i class="el-icon-s-help"></i>
              >>> 热门博客 Popular blogs <<<</el-divider>
          </template>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"></el-image>
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-divider content-position="center">
              <i class="el-icon-s-promotion"></i>
              >>> 热门论坛 Popular forums <<<</el-divider>
          </template>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"></el-image>
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-divider content-position="center">
              <i class="el-icon-magic-stick"></i>
              >>> 推荐用户 Recommend users <<<</el-divider>
          </template>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"></el-image>
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-divider content-position="center">
              <i class="el-icon-football"></i>
              >>> 网站工具 Website tools <<<</el-divider>
          </template>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"></el-image>
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-main>
  </el-container>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data() {
        return {
          currentDate: new Date(),
          activeName: '1',
          count: 0,
          circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          sizeList: ["large", "medium", "small"],
          textarea1: '',
          activeIndex: '1',
          activeIndex2: '1',
          drawer: false,
          innerDrawer: false,
          imgUrls: [
            "https://pan.qqsuu.cn/view/1059.jpg",
            "https://pan.qqsuu.cn/view/524.jpg",
            "https://pan.qqsuu.cn/view/974.jpg",
            "https://pan.qqsuu.cn/view/837.jpg"
          ]
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        //内层关闭事件
        handleClose(done) {
          this.$confirm('还有未保存的工作哦确定关闭吗？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        load () {
          if (this.count > 10){
            this.count+=1
          }else {
            this.count += 2
          }

        }
      }
    }
</script>


<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .infinite-list{
    height:400px;
  }
  .infinite-list-item{
    height:100px;
  }
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
