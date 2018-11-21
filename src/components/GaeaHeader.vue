<template>
  <div class="gaeaheader">
    <el-container direction="horizontal">
      <span class="logo">Gaea</span>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">模块</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">管理</el-menu-item>
      </el-menu>
      <div class="searchBar">
        <el-input
          placeholder="请输入内容"
          suffix-icon="el-icon-search">
        </el-input>
      </div>
      <div class="userInfo">
        <a v-if="logined" href="/#/login">登录</a>
      </div>

    </el-container>
  </div>
</template>

<script>
    export default {
      components: {},
      name: 'GaeaHeader',
      data () {
        return {
          activeIndex: '1'
        }
      },
      methods: {
        handleSelect (key, keyPath) {
          console.log(key, keyPath)
        }
      }
    }
</script>

<style scoped>
  .gaeaheader {
    width: 100%;
    position: fixed;
    z-index: 9999;
    background: white;
    box-shadow: 1px 1px 0px #b2b2b2;
  }
  .el-container {
    width: 1000px;
    align-items: center;
    margin: 0 auto;
  }
  .el-menu-item {
    font-size: 15px;
  }
  .userInfo {
    flex: 1;
    justify-content: flex-end;
    display: flex;
  }
  .logo {
    padding-bottom: 6px;
    padding-right: 30px;
    font-size: 40px;
    color: #409eff;
    user-select: none;
    cursor: pointer;
  }
  .searchBar {
    margin-left: 50px;
  }
  a {
    text-decoration: none;
    color: #333;
    font-size: 15px;
  }
</style>
