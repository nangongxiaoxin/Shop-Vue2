<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"> </el-button>
          </el-input>
        </el-col>

        <el-col :span="4">
          <el-button type="primary">添加商品</el-button>
        </el-col>
      </el-row>

      <!-- table表格区域 -->
      <el-table :data="goodslist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="商品名称" prop="goods_name"></el-table-column>
        <el-table-column label="商品价格(元)" prop="goods_price" width="95px"></el-table-column>
        <el-table-column label="商品重量" prop="goods_weight" width="70px"></el-table-column>
        <el-table-column label="商品创建时间" prop="add_time" width="140px">
            <template slot-scope="scope">
                {{ scope.row.add_time | dateFormat }}
            </template>
        </el-table-column>
        <el-table-column label="操作" width="130px">
            <template slot-scope="scope">
                <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
            </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
        //查询参数对象
        queryInfo: {
            query: '',
            pagenum: 1,
            pagesize: 10
        },
        // 商品列表数据
        goodslist:[],
        // 总条数
        total: 0,
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    // 根据分页获取相应的商品列表
    async getGoodsList(){
        const {data:res}= await this.$http.get('goods', {params: this.queryInfo})
        
        // 失败
        if (res.meta.status !== 200) {
            return this.$message.error('获取商品列表失败！')
        }

        // 成功
        if(res.meta.status === 200){
            this.$message.success('获取商品列表成功！')
        }

        this.goodslist = res.data.goods
        this.total = res.data.total
    },
  }
}
</script>

<style lang="less" scope>
</style>