<template>
  <div>
    <h1>学员管理</h1>
    <hr />

    <!-- 搜索一栏 -->
    学员状态
    <el-select v-model="form.status" placeholder="请选择状态">
      <el-option label="启用" value="1"></el-option>
      <el-option label="禁用" value="0"></el-option>
    </el-select>

    学生姓名
    <el-input
      class="input1"
      v-model="input"
      placeholder="请输入内容"
    ></el-input>

    手机号
    <el-input
      class="input1"
      v-model="phone"
      placeholder="请输入内容"
    ></el-input>


    <!-- 搜索按钮 -->
    <el-button icon="el-icon-search" @click="zsou()">搜索</el-button>
    <el-button icon="el-icon-back">重置</el-button>
    <!-- 搜索按钮 -->

    <p>
      <el-button type="primary">新增学员</el-button>
      <el-button type="primary">批量导入</el-button>
      <el-button type="primary">批量导出</el-button>
      <el-button type="primary">查看报表</el-button>
    </p>
    <!-- 搜索一栏 -->

    <!-- 表格部分 -->
    <el-table
      ref="multipleTable"
      :data="newtabList.slice((pagenum - 1) * pagesize, pagenum * pagesize)"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <!-- <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column> -->
      <el-table-column prop="nickname" label="姓名" width="180">
        <template slot-scope="scope">
          <img class="img1" :src="scope.row.avatar" alt="" />{{
            scope.row.nickname
          }}
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号" width="120">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="120">
        <template slot-scope="scope">
          {{ scope.row.status == 1 ? "启用" : "禁用" }}
          <!--           <el-tag v-show="scope.row.status == 1">启用</el-tag>
          <el-tag type="danger" v-show="scope.row.status == 0">禁用</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="创建时间" width="120">
      </el-table-column>
      <el-table-column prop="mobile" label="操作" width="360">
        <!-- <template slot-scope="scope"> -->
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <!-- </template> -->
      </el-table-column>
    </el-table>
    <!-- 表格部分 -->

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="newtabList.length"
    >
    </el-pagination>
    <!-- 分页 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [], //请求过来的json原数据
      newtabList: [], // 存放搜索数据
      form: {
        status: "",
        
      },
      input: "",
        phone: "",
      pagesize: 5, // 当前页的条数
      pagenum: 1, // 当前页码数
      a:1,//学员状态,
      b:1,//姓名状态,
      c:1,//手机号码状态

    };
  },
  methods: {
    handleSelectionChange(val) {
      //表格自带单选框
      this.multipleSelection = val;
    },
    zsou() {
      //总的搜索
      //只有状态时
      if (this.form.status != "") {
        this.newtabList = this.tableData3.filter((item) => {
          return item.status == this.form.status;
        });
      }
      console.log(this.form.status);

      // 只有姓名
      this.newtabList = this.tableData3.filter((item) => {
        return item.nickname.indexOf(this.input) != -1;
      });
      //只有手机号
      this.newtabList = this.tableData3.filter((item) => {
        return item.mobile.indexOf(this.phone) != -1;
      });

      // 姓名+手机号
      let relus1 = this.tableData3.filter((item) => {
        return item.nickname.indexOf(this.input) != -1;
      });
      this.newtabList = relus1.filter((item) => {
        return item.mobile.indexOf(this.phone) != -1;
      });

      // 姓名+状态
      if (this.form.status != "") {
        let relus2 = this.tableData3.filter((item) => {
          return item.status == this.form.status;
        });
        this.newtabList = relus2.filter((item) => {
          return item.nickname.indexOf(this.input) != -1;
        });
      }

      // 状态+手机号
      if (this.form.status != "") {
        let relus3 = this.tableData3.filter((item) => {
          return item.status == this.form.status;
        });
        this.newtabList = relus3.filter((item) => {
          return item.mobile.indexOf(this.phone) != -1;
        });
      }

      // 状态+手机号+姓名
      if (this.form.status != "") {
        let relus4 = this.tableData3.filter((item) => {
          return item.status == this.form.status;
        });
        this.newtabList = relus4.filter((item) => {
          return item.mobile.indexOf(this.phone) != -1;
        });
        this.newtabList = relus4.filter((item) => {
          return item.nickname.indexOf(this.input) != -1;
        });
      }
        // let studstatus=this.studstatus//学员状态,
        // let namestatus=this.namestatus//姓名状态,
        // let mobilestatus=this.mobilestatus//手机号码状态


        // if(this.a===1){//只有启用未启用状态时
        //   this.statu()
        // }else if(this.b===1){//只有学生姓名时
        //   this.name()
        // }else if(this.c===1){//只有手机号时
        //   this.mobile()
        // }

       

      // },



    // statu(){
    //   //只有状态时
    //   if (this.form.status != "") {
    //     this.newtabList = this.tableData3.filter((item) => {
    //       return item.status == this.form.status;
    //     });
    //   }
    //   console.log(this.form.status);
    // },

    // name(){
    //    //只有姓名
    //   this.newtabList = this.tableData3.filter((item) => {
    //     return item.nickname.indexOf(this.input) != -1;
    //   });
    // },
    // mobile(){
    //   //手机号
    //   this.newtabList = this.tableData3.filter((item) => {
    //     return item.mobile.indexOf(this.phone) != -1;
    //   });
    // },  

    // namemobile(){
    //    // 姓名+手机号
    //   let relus1 = this.tableData3.filter((item) => {
    //     return item.nickname.indexOf(this.input) != -1;
    //   });
    //   this.newtabList = relus1.filter((item) => {
    //     return item.mobile.indexOf(this.phone) != -1;
    //   });
    // },

    // namestatus(){
    //   //姓名加状态
    //   if (this.form.status != "") {
    //     let relus2 = this.tableData3.filter((item) => {
    //       return item.status == this.form.status;
    //     });
    //     this.newtabList = relus2.filter((item) => {
    //       return item.nickname.indexOf(this.input) != -1;
    //     });
    //   }
    // },


    // statusmobile(){
    //   //状态+手机号
    //   if (this.form.status != "") {
    //     let relus3 = this.tableData3.filter((item) => {
    //       return item.status == this.form.status;
    //     });
    //     this.newtabList = relus3.filter((item) => {
    //       return item.mobile.indexOf(this.phone) != -1;
    //     });
    //   }
    // },

    // //状态+手机号+姓名
    //   statusmobilename(){
    //      if (this.form.status != "") {
    //     let relus4 = this.tableData3.filter((item) => {
    //       return item.status == this.form.status;
    //     });
    //     this.newtabList = relus4.filter((item) => {
    //       return item.mobile.indexOf(this.phone) != -1;
    //     });
    //     this.newtabList = relus4.filter((item) => {
    //       return item.nickname.indexOf(this.input) != -1;
    //     });
    //   }
      },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.pagenum = val;
    },
  },
  created() {
    this.$axios.get("/list.json").then((res) => {
      console.log(res.data);
      this.tableData3 = res.data;
      this.newtabList = res.data;
    });
  },
};
</script>

<style scoped>
h1 {
  padding: 0;
  margin: 0;
}
.input1 {
  width: 200px;
}
.img1 {
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
}
</style>