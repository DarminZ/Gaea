<template>
  <div class="home">
    <el-container>
      <el-header>
        <gaea-header></gaea-header>
      </el-header>
      <el-main>
        <div class="main">
          <z-askpaper :paper-infos="paperInfos" @submit="submit"></z-askpaper>

        </div>
        <div class="main-right">

        </div>
      </el-main>
      <el-footer>
        <gaea-footer></gaea-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import GaeaHeader from '../components/GaeaHeader'
  import GaeaFooter from '../components/GaeaFooter.vue'

  export default {
    components: {
      GaeaFooter,
      GaeaHeader
    },
    name: 'home',
    data () {
      return {
        paperInfos: [
          {
            type: 'single',
            question: '请问您的性别是',
            answer: {
              key: 'sex',
              value: '',
              options: ['男', '女', '保密']
            }
          },
          {
            type: 'multiple',
            question: '请选择你的兴趣爱好',
            answer: {
              key: 'interest',
              value: [],
              options: ['看书', '游泳', '跑步', '看电影', '听歌']
            }
          },
          {
            type: 'text',
            question: '请选择你的兴趣爱好',
            answer: {
              key: 'introduce',
              value: ''
            }
          }
        ]
      }
    },
    methods: {
      submit: function () {
        var result = []
        this.paperInfos.forEach(function (paperItem) {
          result.push(paperItem.answer.key, paperItem.answer.value)
        })
        alert('submit:' + result)
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    padding: 0px;
    text-align: center;
    color: #2c3e50;
  }

  .el-main {
    padding: 0px;
    box-sizing: border-box;
    position: relative;
    margin: 10px auto;
    min-width: 600px;
    max-width: 800px;
  }

  .main {
    width: 100%;
    float: left;
    padding-right: 200px;
  }

  .main-right {
    width: 200px;
    float: left;
    margin-left: -200px;
  }
</style>
