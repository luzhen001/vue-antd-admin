<template>
    <a-card :bordered="false">
        <result :title="title" :description="description"></result>
    </a-card>
</template>
<script>
import Result from '@/components/result'
export default {
    name: 'Success',
    components: { Result },
    data () {
        return {
            title: '提交成功',
            description: '提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。'
        }
    }
}
</script>