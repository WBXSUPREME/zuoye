<template>
  <div class="about">
    <!-- 布局容器 -->
    <el-container>
      <el-header>
        <!-- header -->
        <header-view></header-view>>
        <!-- header -->
        
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <the-sidebar></the-sidebar>
        <!-- 侧边栏 -->
        <el-main>
          <!-- 坑 -->
          <router-view/>
          <!-- 坑 --> 
        </el-main>
      </el-container>
    </el-container>
    <!-- 布局容器 -->
  </div>
</template>
<script>
import TheSidebar from '../components/TheSidebar.vue'
import HeaderView from '../components/HeaderView.vue'
  export default {
    components:{
      TheSidebar,
      HeaderView
      
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

* {
  padding: 0;
  margin: 0;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;

  line-height: 60px;
}



.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
  height: 91vh;
}
</style>
