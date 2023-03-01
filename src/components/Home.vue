<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
      <img class="header_img" src="../assets/logo.png" alt="" />
      <span>后台管理系统</span>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  .header_img {
    width: 50px;
    height: 50px;
    border-radius: 50%;

  }

  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin: 15px;
    }
  }
}

.el-aside {
  background-color: rgb(115, 218, 218);
}

.el-main {
  background-color: bisque;
}

</style>