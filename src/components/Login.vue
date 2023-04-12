<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avater_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      
      <span class="login_lable">
        <h3>登 录</h3>
      </span>

      <!-- 登录表单 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        label-width="0px"
        :rules="loginFormRules"
        class="login_form"
      >
        <!-- username -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-usercenter1"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- pasword -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- button -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // 登录表单绑定数据
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      // 表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          {
            min: 1,
            max: 10,
            message: '用户名长度在 1 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 1,
            max: 10,
            message: '密码长度在 1 到 10 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },

  methods: {
    // 点击重置按钮
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    // 登录
    login() {
      // 预校验 valid表示结果
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        // php测试
        // const { data: res } = await this.$http.post('login.php', this.loginForm);
        // if (res.CODE != 200) {
        //     return this.$message.error('登陆失败！');
        // } else {
        //     console.log('登录成功');
        //     this.$message.success('登陆成功！')
        // }
        //本地测试
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status != 200) {
          return this.$message.error('登陆失败！')
        } else {
          console.log('登录成功')
          this.$message.success('登陆成功！')
        }
        // 设置session
        window.sessionStorage.setItem('token', res.data.token)
        // // 设置cookie
        // document.cookie =
        //   'Auth=' + res.data.token + '; max-age=' + 30 * 24 * 60 * 60
        this.$router.push('/home')
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #5dcde9;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 340px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avater_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.login_lable{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>