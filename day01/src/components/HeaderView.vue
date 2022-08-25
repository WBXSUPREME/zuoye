<template>
    <div>
        <el-menu
      
      class="el-menu-demo"
      mode="horizontal"
      
      text-color="#fff"
      active-text-color="#42e2bb"
    >
    <!-- <template slot-scope="scope"> -->
      <el-menu-item index="10"><img class="img1" src="/img/1.png" alt=""></el-menu-item>   
    <!-- </template> -->
      <el-menu-item index="1"><i class="el-icon-share"></i>用户</el-menu-item>
      <el-menu-item index="2"><i class="el-icon-share"></i>教学</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-share"></i>题库</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-share"></i>运营</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-share"></i>营销</el-menu-item>
      <el-menu-item index="6"><i class="el-icon-share"></i>商品</el-menu-item>
      <el-menu-item index="7"><i class="el-icon-share"></i>财务</el-menu-item>
      <el-menu-item index="8"><i class="el-icon-share"></i>统计</el-menu-item>
      <el-menu-item index="9"><i class="el-icon-share"></i>系统</el-menu-item> 
    </el-menu>
    </div>
</template>


<style scoped>
.img1{
    margin-left: 29px;
    margin-right: 66px;
  width: 67px;
}
.el-menu-demo{
 background-image: linear-gradient(to right,#253dc4,#308afe);
}
</style>