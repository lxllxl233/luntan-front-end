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
        <mavon-editor
          v-model="content"
          ref="md"
          @change="change"
          style="min-height: 600px"
        />
        <el-row :gutter="20">
          <el-divider content-position="center"><el-button type="success" plain @click="submit">提交文章</el-button></el-divider>
        </el-row>

      </div>
    </el-main>
  </el-container>


</template>

<script>
  export default {
    data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        content:'', // 输入的markdown
        html:'',    // 及时转的html

      }
    },
    methods: {
      // 所有操作都会被解析重新渲染
      change(value, render){
        // render 为 markdown 解析后的结果[html]
        this.html = render;
      },
      // 提交
      submit(){
        console.log(this.content);
        console.log(this.html);
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
