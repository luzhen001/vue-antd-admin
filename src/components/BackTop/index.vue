<template>
    <a-back-top :visibilityHeight="visibilityHeight">
        <div class="back_btn">
            <a-icon :type="icon" />
        </div>
    </a-back-top>
</template>
<script>
export default {
    name: 'BackTop',
    props:{
        icon:{
            type:String,
            default:'caret-up'
        },
        visibilityHeight:{
            type:Number,
            default:200
        },
    }
}
</script>
<style lang="less" scoped>
    .ant-back-top {
        bottom: 40px;
        right: 10px;
        .back_btn {
            width: 40px;
            height: 40px;
            color: #fff;
            font-size: 20px;
            line-height: 40px;
            border-radius: 4px;
            text-align: center;
            background-color: @primary-color;
            &:hover{
                opacity: .7;
                transition: all .3s;
            }
        }
    }
</style>