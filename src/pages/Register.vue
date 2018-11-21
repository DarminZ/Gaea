<template>
  <div class="register">
    <el-form :model="input" ref="input" :rules="inputrules" class="elform">
      <div style="margin-bottom: 40px">
        <span class="logo">Gaea</span><div/>
        <span class="slogan">注册Gaea,发现新世界</span>
      </div>
      <el-form-item prop="username">
        <el-input type="text" v-model="input.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="input.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="checkpassword">
        <el-input type="password" v-model="input.checkpassword" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="validataAndRegister()">注册</el-button>
      </el-form-item>
      <el-form-item>
        <span>已有账号? </span>
        <router-link to="/login">
          <span class="login">登录</span>
        </router-link>
      </el-form-item>
    </el-form>
    <div class="background">
    </div>
  </div>
</template>

<script>
  import ElForm from 'element-ui/packages/form/src/form'
  import ElFormItem from 'element-ui/packages/form/src/form-item'
  import ElInput from 'element-ui/packages/input/src/input'
  import ElButton from 'element-ui/packages/button/src/button'

  export default {
    components: {
      ElButton,
      ElInput,
      ElFormItem,
      ElForm
    },
    name: 'register',
    data: function () {
      return {
        input: {
          username: null,
          password: null,
          checkpassword: null
        },
        inputrules: {
          username: [{
            validator: (rule, value, cb) => {
              if (!value) {
                return cb(new Error('请填写用户名'))
              } else {
                cb()
              }
            },
            trigger: 'blur'
          }, {
            min: 3,
            max: 20,
            message: '请输入2到20个字符'
          }, {
            pattern: /^(\w){3,20}$/,
            message: '用户名只包括字母、数字'
          }],
          password: [{
            validator: (rule, value, cb) => {
              if (!value) {
                return cb(new Error('请填写密码'))
              } else {
                cb()
              }
            },
            trigger: 'blur'
          }, {
            min: 6,
            max: 20,
            message: '请输入6到20个字符'
          }, {
            pattern: /^(\w){6,20}$/,
            message: '用户名只包括字母、数字'
          }],
          checkpassword: [{
            validator: (rule, value, cb) => {
              if (!value) {
                return cb(new Error('请再次填写密码'))
              } else {
                cb()
              }
            },
            trigger: 'blur'
          }, {
            min: 6,
            max: 20,
            message: '请输入6到20个字符'
          }, {
            pattern: /^(\w){6,20}$/,
            message: '用户名只包括字母、数字'
          }]
        }
      }
    },
    methods: {
      validataAndRegister: function () {

      }
    }
  }
</script>

<style scoped>
  .background {
    width: 100%;
    height: 730px;
    background-image: url("../assets/backimg.jpg");
  }
  .el-form {
    text-align: center;
    margin-top: 70px;
    padding: 30px 50px 50px 50px;
    size: 16px;
    box-shadow: 1px 1px 10px #b2b2b2;
    height:410px;
    width:350px;
    background:white;
    left:50%;
    position:absolute;
    margin-left:-250px;
  }
  .logo {
    font-size: 75px;
    color: #409eff;
    user-select: none;
  }
  .slogan {
    font-size: 25px;
    color: #409eff;
  }
  .login {
    color: #409eff;
    cursor: hand;
  }
</style>
