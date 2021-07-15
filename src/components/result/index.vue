<template>
    <div class="result_wrap">
        <div class="result_icon">
            <a-icon :class="['icon',iconName]" :type="iconType" />
        </div>
        <div class="title" v-if="title">{{title}}</div>
        <div class="desc" v-if="description">{{description}}</div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Result',
    props:{
        iconName:{
            type:String,
            default:'success'
        },
        iconType:{
            type:String,
            default:'check-circle'
        },
        title:{
            type:String
        },
        description:{
            type:String
        }
    }
}
</script>
<style lang="less" scoped>
    .result_wrap {
        text-align: center;
        width: 72%;
        margin: 0 auto;
        .icon {
            font-size: 72px;
            line-height: 72px;
            margin-bottom: 24px;
        }
        .success {
            color: @success-color;
        }
        .error {
            color: @error-color;
        }
        .title {
            font-size: 24px;
            color: @title-color;
            font-weight: 500;
            line-height: 32px;
            margin-bottom: 16px;
        }
        .desc {
            color: @text-color-second;
            font-size: 14px;
            line-height: 22px;
        }
        .content {
            border-radius: 2px;
            text-align: left;
            background-color: @background-color-light;
        }
    }
</style>