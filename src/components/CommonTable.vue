<template>
    <div class="common-table">
        <el-table :data="tableData" height="90%" stripe>
            <el-table-column
                show-overflow-tooltip
                v-for="item in tableLabel"
                :key="item.prop"
                :label="item.label"
                :width="item.width ? item.width : 125"
                >
                    <template slot-scope="scope">
                        <span style="margin-left : 10px">{{scope.row[item.prop]}}</span>
                    </template>
                </el-table-column>
                <el-table-column lable="操作" min-width="180">
                    <template slot-scope="scope" >
                    <el-button @click="handleEdit(scope.row)" size="mini">编辑</el-button>
                    <el-button @click = "handleDelete(scope.row)" size="mini" type="danger">删除</el-button>
                    </template>
                </el-table-column>   
           
        </el-table>
        <el-pagination
        class="pager" 
        layout="prev,pager,next"
        :total="config.total"
        :current-page.sync="config.page"
        @current-change="changePage"
        :page-size ="20"
        ></el-pagination>
    </div>  
</template>

<script>

export default {
    name:'CommonTable',
    props:{
        tableData:Array,
        tableLabel:Array,
        config:Object
    },
    
    data(){
        return{}
    },
    methods:{
       handleEdit(row){
            this.$emit('edit',row)
       }, 
       handleDelete(row){
            this.$emit('del',row)
       },
       changePage(page){
            this.$emit('changePage',page)
       }
    }
}

</script>
<style lang="less" scoped>
.common-table{
    height: calc(100% - 62px);
    background-color: #fff;
    position: relative;
    .pager{
        position: absolute;
        bottom: 0;
        right:20px;
    }
}
</style>
