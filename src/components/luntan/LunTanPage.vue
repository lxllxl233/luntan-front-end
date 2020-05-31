<template>

  <el-container>
    <el-main>
      <el-page-header @back="goBack" content="论坛详情">
      </el-page-header>
    </el-main>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "",
        methods: {
          goBack() {
            console.log('go back');
          }
        }
    }
</script>

<style scoped>

</style>
