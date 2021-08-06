<template>
    <a-card>
        <a-row type="flex" justify="start" align="middle" :gutter="16">
            <a-col >文件名称:</a-col>
            <a-col :span="7">
                <a-input size="large" v-model="filename" placeholder="请输入文件名称(默认为当前时间)">
                    <a-icon slot="prefix" type="file-zip" />
                </a-input>
            </a-col>
            <a-col >
                <a-button type="primary" size="large" @click="handleExportZip">导出ZIP</a-button>
            </a-col>
        </a-row>
        <a-space direction="vertical" style="width:100%">
            <a-table :columns="columns" :data-source="zipList" :bordered="true" :pagination="false">
                <template slot="imgurl" slot-scope="imgurl">
                    <img :src="imgurl" alt />
                </template>
                <template slot="level" slot-scope="level">
                    <a-tag color="green" v-if="level===1">一级</a-tag>
                    <a-tag color="blue" v-else-if="level===2">二级</a-tag>
                    <a-tag color="red" v-else>三级</a-tag>
                </template>
                <template slot="readNum" slot-scope="readNum">
                    <a-icon type="eye" />
                    {{readNum}}
                </template>
                <template slot="downNum" slot-scope="downNum">
                    <a-icon type="arrow-down" />
                    {{downNum}}
                </template>
            </a-table>
        </a-space>
    </a-card>
</template>
<script>
import { request } from '@/utils/request'
export default {
    name:'index',
    data () {
        return {
            filename:'',
            zipList:[],
            columns:[
                {title:'序号',key: 'id', dataIndex: 'id', customRender: (text, record, index) => `${index + 1}`},
                {title:'图片',key: 'imgurl',dataIndex: 'imgurl',scopedSlots: { customRender: 'imgurl' }},
                {title:'标题',key: 'title', dataIndex: 'title'},
                {title:'内容',key: 'content', dataIndex: 'content'},
                {title:'作者',key: 'author',dataIndex: 'author'},
                {title:'等级',key: 'level',dataIndex: 'level',scopedSlots: { customRender: 'level' }},
                {title:'阅读量',key: 'readNum', dataIndex: 'readNum',scopedSlots: { customRender: 'readNum' }},
                {title:'下载量',key: 'downNum',dataIndex: 'downNum',scopedSlots: { customRender: 'downNum' }},
                {title:'日期', key: 'time',dataIndex: 'time'},
            ]
        }
    },
    created () {
        this.getZipList();
    },
    methods:{
        async getZipList(){
            const {data:res} = await request('/zip/list','get');
            if(res.code !== 0){
                return this.$message.error('获取数据出错了！');
            }
            this.zipList = res.result;
        },
        //导出zip
        handleExportZip(){
            this.$confirm({
                title:'温馨提示',
                content:'确定要导出Zip吗？(不填写文件名，默认为当前时间)',
                okText: '导出',
                cancelText: '想一想',
                centered:true,
                onOk() {
                    return Promise.resolve(()=>{
                        console.log(111);
                        console.log(this.filename);
                    })
                },
                onCancel(){}
            })
            // import('@/utils/exportToZip.js').then(zip => {
            //     const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date'];
            //     const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
            //     const list = this.zipList;
            //     const data = this.formatJson(filterVal, list);
            //     zip.export_txt_to_zip(tHeader, data, this.filename, this.filename);
            // });
        },
        formatJson (filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]))
        }
    }
}
</script>
<style lang="less" scoped>
.ant-tag{
    padding: 0 20px;
}
</style>