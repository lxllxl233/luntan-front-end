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
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        htmlMD: "<h2><a id=\"_0\"></a>题目</h2> <blockquote> <p>在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。</p> <p>给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）</p> <p>例子:</p> <p>输入: N = 1, K = 1<br /> 输出: 0</p> <p>输入: N = 2, K = 1<br /> 输出: 0</p> <p>输入: N = 2, K = 2<br /> 输出: 1</p> <p>输入: N = 4, K = 5<br /> 输出: 1</p> <p>解释:<br /> 第一行: 0<br /> 第二行: 01<br /> 第三行: 0110<br /> 第四行: 01101001</p> <p>注意：</p> <p>N 的范围 [1, 30].<br /> K 的范围 [1, 2^(N-1)].</p> <p>===============================================================================</p> <p>给定一个 24 小时制（小时:分钟）的时间列表，找出列表中任意两个时间的最小时间差并已分钟数表示。</p> <p>示例 1：</p> <p>输入: [“23:59”,“00:00”]<br /> 输出: 1</p> </blockquote>"

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
