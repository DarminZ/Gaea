<template>
  <div class="login">
      <el-form ref="input" :model="input" :rules="inputrules" class="elform">
        <div style="margin-bottom: 40px">
          <span class="logo">Gaea</span><div/>
          <span class="slogan">登录Gaea,发现新世界</span>
        </div>
        <el-form-item prop="username">
          <el-input type="text" v-model="input.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" style="margin-bottom: 10px">
          <el-input type="password" v-model="input.password" placeholder="密码"></el-input>
        </el-form-item>
        <div  class="forget">
          <span @click="forgetPassword">忘记密码？</span>
        </div>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="validataAndLogin('input')">登录</el-button>
        </el-form-item>
        <el-form-item>
          <span>没有账号? </span>
          <router-link to="/register">
          <span class="register">注册</span>
          </router-link>
        </el-form-item>
      </el-form>
      <div class="background">
      </div>
  </div>
</template>

<script>
    import * as axios from 'axios'
    import url from '../config/url'
    import ElForm from 'element-ui/packages/form/src/form'
    import ElFormItem from 'element-ui/packages/form/src/form-item'
    import ElInput from 'element-ui/packages/input/src/input'
    import ElButton from 'element-ui/packages/button/src/button'

    export default {
      components: {
        ElButton,
        ElInput,
        ElFormItem,
        ElForm},
      name: 'login',
      data: function () {
        let checkUserName = (rule, value, cb) => {
          if (!value) {
            return cb(new Error('请填写用户名'))
          } else {
            cb()
          }
        }
        let checkPassword = (rule, value, cb) => {
          if (!value) {
            return cb(new Error('请填写密码'))
          } else {
            cb()
          }
        }
        return {
          ui: {
            isLogining: false
          },
          input: {
            username: null,
            password: null
          },
          inputrules: {
            username: [{
              validator: checkUserName,
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
              validator: checkPassword,
              trigger: 'blur'
            }, {
              min: 6,
              max: 20,
              message: '请输入6到20个字符'
            }, {
              pattern: /^(\w){6,20}$/,
              message: '用户名只包括字母、数字'
            }]
          },
          user: {
            name: null,
            status: null
          }
        }
      },
      methods: {
        validataAndLogin: function (form) {
          this.$refs[form].validate(valid => {
            if (valid) {
              this.doLogin()
            } else {
              this.$message.error('表单验证失败！')
            }
          })
        },
        doLogin: function () {
          let input = {
            username: this.input.username,
            password: this.input.password
          }
          axios.post(url.loginURL, input).then(response => {
            this.ui.isLogining = false
            let data = response.data
            console.log(response)
            if (data.success) {
              this.$router.push('/')
            } else {
              this.$message.error(data.message)
              return false
            }
          }).catch(error => {
            this.ui.isLogining = false
            this.$message.error(error)
          })
        },
        forgetPassword: function () {

        }
      }
    }
</script>

<style scoped>
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
  .el-input {
    width: 100%;
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
  .background {
    width: 100%;
    height: 730px;
    background-image: url("../assets/backimg.jpg");
  }
  .register {
    color: #409eff;
    cursor: pointer;
    text-decoration-line: none;
  }
  .forget {
    color: darkgray;
    margin-bottom: 20px;
  }
  .forget span{
    cursor: pointer;
  }
</style>
