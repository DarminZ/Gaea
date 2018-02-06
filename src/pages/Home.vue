<template>
  <div class="home">
    <el-container>
      <el-header>
        <gaea-header></gaea-header>
      </el-header>
      <el-main>
        <div class="carousel">
          <el-carousel :interval="6000" trigger="click" type="card" height="300px">
            <el-carousel-item>
              <img src="../assets/newyear.png" @click="gotoURL('/#/login')"/>
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/newyear.png"/>
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/newyear.png"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="module">
          <img src="../assets/img.jpg"/>
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
      GaeaHeader},
    name: 'home',
    methods: {
      gotoURL (url) {
        window.location.href = url
      }
    }
  }
</script>

<style scoped>
  .el-header,.el-footer {
    padding: 0px;
  }
  .el-main {
    padding: 0px;
  }
</style>
