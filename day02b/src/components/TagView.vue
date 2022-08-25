<template>
  <div>
    <!-- 标签 -->
    <el-tag class="tags" v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{ tag.name }}
    </el-tag>
    <!-- 标签 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
      ],
    };
  },
};
</script>

<style scoped>
.tags{
    margin-top: 15px;
    margin-left: 15px;
}
</style>