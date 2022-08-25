<template>
  <div>
    <!-- 标签 -->
    <tag-view></tag-view>
    <!-- 标签 -->

    <!-- tabs自打 -->
    <ul class="tabszi">
      <li
        v-for="(item, index) in tabszi"
        :key="index"
        :class="{ active: i == index }"
        @click="tabsziqie(index,item.uli)"
      >
        {{ item.title }}(8)
      </li>
    </ul>
    
    <ul class="tab">
      <li v-for="(item,index) in tabslist" :key="index">{{item.title}}
      <span>
        <el-button type="">标为已读</el-button>
        <el-button type="danger" >删除</el-button>
        <el-button type="info" >还原未读</el-button>
        <el-button type="" >还原</el-button>
        </span>
      </li>
    </ul>

   
  </div>
</template>

<script>
import TagView from "../components/TagView.vue";

export default {
  components: {
    TagView,
    
  },
  data() {
    return {
      activeName: "first",
      tabslist: [],
      tabszi: [
        {
          title: "未读消息",
          uli:0
        },
        {
          title: "已读消息",
          uli:1
        },
        {
          title: "回收站",
          uli:2
        },
      ],
      i: 0,
      
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(event);
    },
    tabsziqie(index,uli) {
      this.i = index;
      console.log(uli);
      
    },
  },
  created() {
    this.$axios.get("/tabs.json").then((res) => {
      console.log(res.data.unread);
      this.tabslist = res.data.unread;
      console.log(this.tabslist);
    });
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: skyblue;
  border-bottom: 2px solid skyblue;
}
.tabszi {
  width: 100%;
  height: 48px;
  // background-color: red;
  display: flex;
  border-bottom: 2px solid rgba(128, 128, 128, 0.743);
  li {
    width: 90px;
    height: 48px;
    // background-color: green;
    margin-right: 10px;
    text-align: center;
  }
}

.tabs {
  margin-top: 10px;
}
li {
  width: 100%;
  list-style: none;
  border-bottom: 1px solid black;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
