<template>
    <a-card :bordered="false">
        <result iconName="error" iconType="close-circle" :title="title" :description="description"></result>
    </a-card>
</template>
<script>
import Result from '@/components/Result'
export default {
    name: 'Error',
    components: { Result },
    data () {
        return {
            title: '提交失败',
            description: '请核对并修改以下信息后，再重新提交。'
        }
    }
}
</script>