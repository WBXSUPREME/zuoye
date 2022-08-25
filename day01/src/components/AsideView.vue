<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#ffffff"
      text-color="black"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/main">
        <span slot="title">学员管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">讲师管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">助教管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>