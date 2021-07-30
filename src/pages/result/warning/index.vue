<template>
    <a-card :bordered="false">
        <result iconName="warn" iconType="close-circle" :title="title" :description="description"></result>
    </a-card>
</template>
<script>
import Result from '@/components/Result'
export default {
    name: 'Error',
    components: { Result },
    data () {
        return {
            title: '警告',
            description: '请核对并修改以下信息后，再重新提交。'
        }
    }
}
</script>