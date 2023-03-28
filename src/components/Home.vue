HOME.vue



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
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleColllapse">|||</div>

        <!-- 侧边栏 菜单 -->
        <el-menu
          background-color="#73DADA"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/'+subItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->

      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // 左侧菜单数据
      menulist: [],
      iconsObj: {
        125: 'iconfont icon-account-fill',
        103: 'iconfont icon-security-fill',
        101: 'iconfont icon-cart-Empty',
        102: 'iconfont icon-image-text',
        145: 'iconfont icon-pic',
      },
      // 是否折叠菜单栏
      isCollapse: false,
      // 被激活的链接地址
      activePath:'',
    }
  },
  created() {
    this.getMenuList(),
    this.activePath=window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 折叠菜单栏
    toggleColllapse() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接高亮的函数(激活状态)
    saveNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath)
      this.activePath=activePath
    },

    // 获取所有的菜单
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
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
  .el-menu {
    border-right: 0px;
  }
}

.el-main {
  background-color: bisque;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>