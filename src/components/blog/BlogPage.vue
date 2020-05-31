<template>
  <el-container>

    <el-main>
      <el-page-header @back="goBack" content="博客详情">
      </el-page-header>
    </el-main>
    <el-main>
      <div class="block">
        <el-image style="width: 100%; height: 500px" :src="src"></el-image>
      </div>
    </el-main>
    <el-main>

      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple">>>></div></el-col>
        <el-col :span="16">
          <div v-html="htmlMD"></div><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"><<<</div></el-col>
      </el-row>


    </el-main>
    <el-footer>Footer</el-footer>

  </el-container>
</template>

<script>
  import Login from "../login/Login";
  export default {
    name: "",
    data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        content:'', // 输入的markdown
        html:'',    // 及时转的html
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        htmlMD: "<h2><a id=\"_0\"></a>题目</h2> <blockquote> <p>在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。</p> <p>给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）</p> <p>例子:</p> <p>输入: N = 1, K = 1<br /> 输出: 0</p> <p>输入: N = 2, K = 1<br /> 输出: 0</p> <p>输入: N = 2, K = 2<br /> 输出: 1</p> <p>输入: N = 4, K = 5<br /> 输出: 1</p> <p>解释:<br /> 第一行: 0<br /> 第二行: 01<br /> 第三行: 0110<br /> 第四行: 01101001</p> <p>注意：</p> <p>N 的范围 [1, 30].<br /> K 的范围 [1, 2^(N-1)].</p> <p>===============================================================================</p> <p>给定一个 24 小时制（小时:分钟）的时间列表，找出列表中任意两个时间的最小时间差并已分钟数表示。</p> <p>示例 1：</p> <p>输入: [“23:59”,“00:00”]<br /> 输出: 1</p> </blockquote>"
      }
    },
    components: [Login],
    methods: {
      goBack() {
        this.$router.replace("/")
      }
    }
  }
</script>

<style scoped>

</style>
