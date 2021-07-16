<template>
    <div class="app-container">
        <div class="copy-wrap" v-for="item in dataList" :key="item.uid">
            <a-input v-model="item.uid" placeholder="请填写内容..." class="copy-input" />
            <a-button type="primary" icon="el-icon-document" @click="handleCopy(item.uid,$event)">复制</a-button>
        </div>
    </div>
</template>
<script>
import clipBoard from '@/utils/clipBoard'
export default {
    name: 'clipBoard',
    data () {
        return {
            dataList: [
                {uid:'111'},
                {uid:'222'},
                {uid:'333'},
                {uid:'444'},
                {uid:'555'},
                {uid:'666'},
                {uid:'777'},
                {uid:'888'},
            ]
        }
    },
    methods: {
        handleCopy (text, event) {
            clipBoard(text, event);
        }
    }
}
</script>
<style lang="less" scoped>
    .app-container{
        padding: 10px;
        background-color: @base-bg-color;
        .copy-wrap {
            margin-bottom: 20px;
            .copy-input {
                width: 700px;
                max-width: 100%;
                margin-right: 20px;
            }
        }
    }
</style>