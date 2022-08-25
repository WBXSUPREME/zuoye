<template>
  <div class="about">
    <!-- <h1>主页</h1> -->
    <!-- 头部 -->
    <header-view></header-view>
    <!-- 头部 -->

    <!-- 布局容器 -->
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏 -->
        <aside-view></aside-view>
        <!-- 侧边栏 -->
      </el-aside>
      <el-main>
        <!-- 主体 -->
        <router-view/>
        <!-- 主体 -->
      </el-main>
    </el-container>
    <!-- 布局容器 -->
  </div>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import AsideView from "../components/AsideView.vue";
export default {
  components: {
    HeaderView,
    AsideView,
  },
  data() {
    return {
      
    };
  },
  methods: {},
};
</script>

<style scoped>
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  height: 800px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>


