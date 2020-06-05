<template>
  <el-container>
    <el-main>
      <el-divider content-position="center">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
          </div>
        </div>
      </el-divider>
    </el-main>
    <el-main>

      <div>
        <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px"/>
        <el-row :gutter="20">
          <el-divider content-position="center"><el-button type="success" plain @click="submit">提交论坛文案</el-button></el-divider>
        </el-row>

      </div>

    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "lunTanEdit",
        data () {
          return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            sizeList: ["large", "medium", "small"]
          }
        }
    }
</script>

<style scoped>

</style>
