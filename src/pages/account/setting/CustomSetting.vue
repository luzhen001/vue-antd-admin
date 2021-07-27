<template>
    <div class="set-wrap">
        <setting />
    </div>
</template>
<script>
import Setting from '@/components/Setting'
export default {
    name:'CustomSetting',
    components:{
        Setting
    },
}
</script>
<style lang="less" scoped>
    .set-wrap{
        width: 100%;
        .side-setting{
            padding:  0 12px;
        }
    }
</style>