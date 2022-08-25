<template>
  <div>
    <!-- 标签 -->
      <tag-view></tag-view>
    <!-- 标签 -->

    <!-- 按钮一行 -->
    <p>
      <!-- 按钮 -->
      <el-button type="primary">删除选中</el-button>

      <!-- 下拉框 -->
      <el-select
        class="select"
        v-model="form.region"
        placeholder="地址"
        
      >
        <el-option label="广东省" value="广东省"></el-option>
        <el-option label="福建省" value="福建省"></el-option>
        <el-option label="湖南" value="湖南"></el-option>
      </el-select>

      <!-- input -->

      <el-input
        v-model="form.username"
        placeholder="用户名"
        class="inputusername"
       
      ></el-input>

      <el-button type="primary" @click="search">搜索</el-button>
    </p>
    <!-- 按钮一行 -->

    <!-- 表格 tableData3-->
    <el-table
      ref="multipleTable"
      :data="newtable.slice((pagenum-1)*pagesize,pagenum*pagesize)"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <!-- <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column> -->
      <el-table-column prop="name" label="用户名" width="120">
      </el-table-column>
      <el-table-column
        prop="money"
        label="账户余额"
        width="120"
      ></el-table-column>
      <el-table-column prop="name" label="头像(查看大图)" width="120">
        <template slot-scope="scope"
          ><img class="imgs" :src="scope.row.thumb" alt=""
        /></template>
      </el-table-column>
      <el-table-column prop="address" label="地址" width="160">
      </el-table-column>
      <el-table-column prop="state" label="状态" width="120">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.state == '成功'">{{
            scope.row.state
          }}</el-tag>
          <el-tag type="danger" v-else>{{ scope.row.state }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="注册时间" width="120">
      </el-table-column>
      <el-table-column prop="name" label="操作" width="220">
        <el-button type="primary">编辑</el-button>
        <el-button type="primary">删除</el-button>
      </el-table-column>
      <!-- <el-table-column prop="address" label="地址" show-overflow-tooltip> -->
    </el-table>
    <!-- 表格 -->

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1, 2, 4, 6]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="6"
    >
    </el-pagination>
    <!-- 分页 -->
  </div>
</template>

<script>
import TagView from '../components/TagView.vue'
export default {
  components: {
    TagView
  },
  data() {
    return {
      
      form: {
        region: "",
        username: "",
      },
      tableData3: [],
      currentPage4: 1,
      pagenum: 1, //页码
      pagesize: 6, //每页条数
      newtable: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      //表格操作
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      //表格操作
      this.multipleSelection = val;
    },

    handleSizeChange(val) {
      //分页操作
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      //分页操作
      console.log(`当前页: ${val}`);
      this.pagenum = val;
    },
    search(){
        //当只有地址的时候
        this.newtable=this.tableData3.filter((item) => {
            return item.address.indexOf(this.form.region)!=-1
        })

        //当只有用户的时候
        this.newtable=this.tableData3.filter((item) => {
            return item.name.indexOf(this.form.username)!=-1
        })

        // 用户+地址

        let resul=this.tableData3.filter((item)=>{
            return item.name.indexOf(this.form.username)!=-1
        })
        this.newtable=resul.filter((item)=>{
             return item.address.indexOf(this.form.region)!=-1
        })
    }
    
  },
  created() {
    this.$axios.get("/table.json").then((res) => {
      console.log(res.data.list);
      this.tableData3 = res.data.list;
      this.newtable = res.data.list;
    //   
    });
  },
};
</script>

<style scoped>
.inputusername {
  width: 200px;
  margin-left: 20px;
  margin-right: 20px;
}
.select {
  margin-left: 20px;
}
.imgs {
  width: 50px;
}
</style>